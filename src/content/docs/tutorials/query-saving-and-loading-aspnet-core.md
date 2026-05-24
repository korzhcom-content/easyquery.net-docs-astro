---
title: Query saving and loading in ASP.NET (Core)
slug: tutorials/query-saving-and-loading-aspnet-core
sidebar:
  order: 4
---

## Overview

EasyQuery lets users build queries interactively in the browser. Saving those queries and reloading them later is a first-class feature of the library, covered by a pair of symmetrical abstractions — `IQueryStore` on the server and `QueryStorage` on the client.

Query persistence involves two independent halves that work together:

| Side | Abstraction | Default Implementation | What it does |
|------|------------|---------|--------------|
| **Server (.NET)** | `IQueryStore` | `FileQueryStore` | Stores and retrieves query JSON on the server |
| **Client (JS)** | `QueryStorage` | `BrowserQueryStorage` | Stores and retrieves queries from the browser or a server endpoint |

The server-side store is the authoritative source. The client side decides *how* to talk to it — either by making HTTP calls to the EasyQuery REST endpoints (via `EqServerQueryStorage`, part of the Enterprise package) or by keeping queries locally in `localStorage` (via `BrowserQueryStorage`, the community default).

---

## Server Side: `IQueryStore`

### The interface

```csharp
public interface IQueryStore
{
    Task<bool> LoadQueryAsync(Query query, string queryId, CancellationToken ct = default);
    Task<bool> AddQueryAsync(Query query, CancellationToken ct = default);
    Task<bool> SaveQueryAsync(Query query, bool createIfNotExists = true, CancellationToken ct = default);
    Task<bool> RemoveQueryAsync(string modelId, string queryId, CancellationToken ct = default);
    Task<IEnumerable<QueryListItem>> GetAllQueriesAsync(string modelId, CancellationToken ct = default);
}
```

`EasyQueryManager` calls these methods when any of the query-related REST endpoints is hit. You never need to call them directly — instead you register a store implementation and let the middleware handle the rest.

### Built-in implementations

#### `FileQueryStore` (default)

Stores each query as a JSON (or XML) file on the local file system. This is the simplest option and works well for development or single-server deployments.

```
App_Data/
└── dm-{modelId}/
    └── queries/
        ├── my-report.json
        └── customer-filter.json
```

**Registration:**

```csharp
// In Startup.cs / Program.cs
app.MapEasyQuery(options => {
    options.UseQueryStore(_ => new FileQueryStore("App_Data"));

    // or, to also control the serialization format:
    options.UseQueryStore(_ => new FileQueryStore(new FileQueryStoreSettings {
        DataPath = "App_Data",
        FileFormat = "json"   // "json" (default) or "xml"
    }));
});
```

**Subclassing `FileQueryStore`**

`FileQueryStore` exposes several virtual methods for customisation:

```csharp
public class MyFileQueryStore : FileQueryStore
{
    public MyFileQueryStore(string dataPath) : base(dataPath) { }

    // Restrict which files are visible in the query list
    protected override IEnumerable<string> FilterFileNames(IEnumerable<string> fileNames)
        => fileNames.Where(f => !Path.GetFileName(f).StartsWith("_"));

    // Filter the assembled list items (e.g. per current user)
    protected override IEnumerable<QueryListItem> FilterQueryItems(IEnumerable<QueryListItem> queries)
        => queries.Where(q => q.name != "Draft");

    // Modify a query just before it is written to disk
    protected override void TuneQuery(Query query, bool isNew)
    {
        if (isNew) query.Description = $"Created at {DateTime.UtcNow:O}";
    }
}
```

#### `SessionQueryStore` (sample implementation)

Keeps queries in ASP.NET session memory. On first access it seeds itself from a `FileQueryStore`, so pre-built queries on disk are automatically available per-session without sharing across users.

```csharp
// From samples/EqAspNetCoreDemo90/Services/SessionQueryStore.cs
public class SessionQueryStore : IQueryStore
{
    private const string _keyPrefixQuery = "query-";
    private const string _keyPrefixItem  = "items-";

    private readonly HttpContext _httpContext;
    private readonly string fileStoreDataPath;

    public SessionQueryStore(IServiceProvider services, string initialStoreDataPath = "App_Data")
    {
        fileStoreDataPath = initialStoreDataPath;
        _httpContext = services.GetRequiredService<IHttpContextAccessor>().HttpContext;
    }

    public async Task<bool> LoadQueryAsync(Query query, string queryId, CancellationToken ct = default)
    {
        var json = _httpContext.Session.GetString(_keyPrefixQuery + queryId);
        if (!string.IsNullOrEmpty(json)) {
            await query.LoadFromJsonStringAsync(json);
            return true;
        }
        return false;
    }

    public async Task<bool> SaveQueryAsync(Query query, bool createIfNotExists = true, CancellationToken ct = default)
    {
        var existing = _httpContext.Session.GetString(_keyPrefixQuery + query.Id);
        if (!string.IsNullOrEmpty(existing)) {
            _httpContext.Session.SetString(_keyPrefixQuery + query.Id, await query.SaveToJsonStringAsync());
            return true;
        }
        else if (createIfNotExists) {
            return await AddQueryAsync(query, ct);
        }
        return false;
    }

    // ... AddQueryAsync, RemoveQueryAsync, GetAllQueriesAsync follow the same pattern
}
```

**Registration:**

```csharp
app.MapEasyQuery(options => {
    options.UseQueryStore(manager => new SessionQueryStore(manager.Services));
});
```

> Make sure `services.AddSession()` and `app.UseSession()` are present in your startup code.

#### `DbQueryStore` (sample implementation)

Stores queries in a SQL Server table, isolated per user. This is the right choice for multi-user applications where every user has their own set of saved reports.

Required table schema:

```sql
CREATE TABLE dbo.Queries (
    Id          NVARCHAR(100) NOT NULL PRIMARY KEY,
    ModelId     NVARCHAR(100) NOT NULL,
    UserId      NVARCHAR(450) NOT NULL,
    Name        NVARCHAR(255) NOT NULL,
    Description NVARCHAR(1000) NULL,
    QueryJson   NVARCHAR(MAX) NOT NULL
);
```

```csharp
// From samples/EqAspNetCoreDemo90/Services/AdoNetQueryStore.cs
public class DbQueryStore : IQueryStore
{
    private readonly string _connectionString;
    private readonly object _userId;

    public DbQueryStore(object userId, string connectionString)
    {
        _userId = userId;
        _connectionString = connectionString;
    }

    public async Task<bool> AddQueryAsync(Query query, CancellationToken ct = default)
    {
        if (string.IsNullOrEmpty(query.Id))
            query.Id = Utils.GenerateId("quer");

        var sql = "INSERT dbo.Queries (Id, ModelId, UserId, Name, Description, QueryJson) "
                + "VALUES (@id, @model_id, @user_id, @name, @description, @query_json)";

        using var connection = new SqlConnection(_connectionString);
        using var command = new SqlCommand(sql, connection);
        command.Parameters.Add(new SqlParameter("@id",         query.Id));
        command.Parameters.Add(new SqlParameter("@model_id",   query.Model.Id));
        command.Parameters.Add(new SqlParameter("@user_id",    _userId));
        command.Parameters.Add(new SqlParameter("@name",       query.Name ?? ""));
        command.Parameters.Add(new SqlParameter("@description",query.Description ?? ""));
        command.Parameters.Add(new SqlParameter("@query_json", await query.SaveToJsonStringAsync()));

        await connection.OpenAsync(ct);
        return await command.ExecuteNonQueryAsync(ct) != 0;
    }

    public async Task<bool> SaveQueryAsync(Query query, bool createIfNotExist = true, CancellationToken ct = default)
    {
        if (await QueryExistsAsync(query.Id)) {
            var sql = "UPDATE dbo.Queries SET Name=@name, Description=@description, QueryJson=@query_json "
                    + "WHERE Id=@id AND UserId=@user_id";
            // ... execute update
            return true;
        }
        else if (createIfNotExist) {
            return await AddQueryAsync(query, ct);
        }
        return false;
    }

    // ... LoadQueryAsync, RemoveQueryAsync, GetAllQueriesAsync similarly
}
```

**Registration with the current user's ID:**

```csharp
app.UseEasyQuery(options => {
    options.UseQueryStore(manager => {
        var httpContextAccessor = manager.Services.GetRequiredService<IHttpContextAccessor>();
        var userId = httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var connStr = Configuration.GetConnectionString("Default");
        return new DbQueryStore(userId, connStr);
    });
});
```

### Automatic save options

`EasyQueryOptions` exposes several flags that trigger automatic saves without any extra client-side code:

```csharp
app.MapEasyQuery(options => {
    // Save the query every time the client calls SyncQuery (i.e. on each query change)
    options.SaveQueryOnSync = true;

    // When NewQuery is called, persist the empty query immediately
    options.SaveNewQuery = true;

    // Cache the most-recently-used query in the ASP.NET session (fast re-load)
    options.StoreQueryInCache = true;

    // After SaveQuery, return the (possibly server-modified) query back to the client
    options.ReturnQueryOnSave = true;
});
```

`ReturnQueryOnSave = true` is useful when the server assigns an ID or timestamps to the query inside `TuneQuery()` and you want those changes reflected immediately in the browser.

---

## Client Side: `QueryStorage`

### The interface

```typescript
export interface QueryStorage {
    init(options?): void;
    getQueryList(options?: GetQueryListOptions): Promise<QueryListItem[]>;
    newQuery(options?: NewQueryOptions):         Promise<QueryData>;
    loadQuery(options?: LoadQueryOptions):       Promise<QueryData>;
    saveQuery(options?: SaveQueryOptions):       Promise<QueryData>;
    removeQuery(options?: RemoveQueryOptions):   Promise<void>;
}
```

### Built-in implementations

#### `BrowserQueryStorage` (community default)

Stores queries in the browser's `localStorage`. This is the default when you use `@easyquery/core` without the Enterprise package. It prints a console warning to remind you that server-side storage is not active.

Storage keys follow the pattern:
- `eq-querylist` — JSON array of `{ id, name, text }` items
- `eq-{queryId}` — the serialised query JSON

You can change the key prefix:

```typescript
context.init({
    // ...other options...
});
// After init, the storage is already created. Override key prefix via options:
context.init({
    keyPrefix: 'myapp'   // keys become myapp-querylist, myapp-{queryId}
});
```

#### `EqServerQueryStorage` (Enterprise)

The Enterprise package replaces `BrowserQueryStorage` with `EqServerQueryStorage`, which makes HTTP calls to the EasyQuery.NET REST endpoints:

| Operation | HTTP call |
|-----------|-----------|
| `newQuery` | `POST /api/easyquery/models/{modelId}/queries` |
| `loadQuery` | `GET /api/easyquery/models/{modelId}/queries/{queryId}` |
| `saveQuery` | `PUT /api/easyquery/models/{modelId}/queries/{queryId}` |
| `removeQuery` | `DELETE /api/easyquery/models/{modelId}/queries/{queryId}` |
| `getQueryList` | `GET /api/easyquery/models/{modelId}/queries` |

This happens automatically when `useEnterprise()` is called with a valid license key:

```typescript
context
    .useEndpoint('/api/easyquery')
    .useEnterprise(() => {
        view.init({ defaultModelId: 'NWind' });
    });
```

### `EqContext` methods

`EqContext` wraps `QueryStorage` and adds lifecycle management (process start/end events, widget refresh, error handling). These are the methods you call in application code.

#### `loadQuery(options?)`

Loads a query from storage into the current context, then refreshes all registered widgets.

```typescript
context.loadQuery({
    queryId: 'my-report',
    success: (query) => {
        console.log('Loaded:', query.getName());
    },
    error: (message) => {
        console.error('Load failed:', message);
    }
});
```

The `loadQuery` call waits for the model to be fully loaded before proceeding (it chains onto the model loader's internal promise), so it is safe to call it before the model is available.

#### `saveQuery(options?)`

Saves the current query to storage.

```typescript
context.saveQuery({
    success: () => {
        showNotification('Query saved successfully');
    },
    error: (message) => {
        showError(message);
    }
});
```

If `ReturnQueryOnSave = true` is set on the server, the response will contain the updated query and `loadFromData` is called automatically so any server-side changes (e.g. a new ID) are reflected on the client.

#### `newQuery(options?)`

Resets the current query and optionally persists it through storage (calls `QueryStorage.newQuery`).

```typescript
// Create a new blank query and save it immediately (server storage)
context.newQuery({
    name: 'My New Report',
    success: () => {
        console.log('New query ready, id:', context.getQuery().getId());
    }
});

// Create a new blank query locally without touching storage
context.newQuery({ useStorage: false });
```

#### `removeQuery(options?)`

Deletes the current query from storage and resets the query object.

```typescript
context.removeQuery({
    success: () => {
        console.log('Query deleted');
    },
    error: (message) => {
        console.error(message);
    }
});
```

#### `loadQueryList(options?)`

Retrieves the list of saved queries for the current model without loading any particular one.

```typescript
context.loadQueryList({
    success: (queries) => {
        const select = document.getElementById('querySelect');
        queries.forEach(q => {
            const opt = document.createElement('option');
            opt.value = q.id;
            opt.textContent = q.name;
            select.appendChild(opt);
        });
    }
});
```

---

## End-to-End Examples

### Example 1: File-based storage with auto-save (ASP.NET Core)

This is the simplest full setup — queries are persisted as JSON files and saved automatically every time the user modifies and syncs their query.

**Server (`Program.cs`):**

```csharp
builder.Services.AddEasyQuery()
    .UseSqlManager()
    .AddDefaultExporters();

// ...

app.UseEasyQuery(options => {
    options.DefaultModelId = "NWind";
    options.UseDbContext<AppDbContext>();

    // Persist queries to the file system
    options.UseQueryStore(_ => new FileQueryStore("App_Data"));

    // Automatically save after every SyncQuery call
    options.SaveQueryOnSync = true;

    // Return the saved query in the response so the client stays in sync
    options.ReturnQueryOnSave = true;
});
```

**Client:**

When using the Enterprise package, `EqServerQueryStorage` is active and the standard view buttons (New / Save / Load) handle everything automatically. For manual control:

```typescript
// Load a specific query by ID
context.loadQuery({ queryId: 'customer-orders' });

// Save the current state
document.getElementById('btnSave').addEventListener('click', () => {
    context.saveQuery({
        success: () => alert('Saved!'),
        error: (msg) => alert('Error: ' + msg)
    });
});
```

---

### Example 2: Per-user database storage (ASP.NET Core + Identity)

**Server:**

```csharp
app.UseEasyQuery(options => {
    options.DefaultModelId = "NWind";
    options.UseDbContext<AppDbContext>();

    options.UseQueryStore(manager => {
        var http  = manager.Services.GetRequiredService<IHttpContextAccessor>();
        var userId = http.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value
                     ?? "anonymous";
        var connStr = manager.Services
                             .GetRequiredService<IConfiguration>()
                             .GetConnectionString("Default");
        return new DbQueryStore(userId, connStr);
    });

    options.SaveNewQuery  = true;
    options.ReturnQueryOnSave = true;
});
```

Each user gets their own isolated set of queries in the `dbo.Queries` table.

---

### Example 3: Populating a query selector manually (Client)

A common UI pattern is a dropdown that lists saved queries and loads one on selection.

```html
<select id="queryList">
    <option value="">-- select a saved query --</option>
</select>
<button id="btnNew">New</button>
<button id="btnSave">Save</button>
<button id="btnDelete">Delete</button>
```

```typescript
const select = document.getElementById('queryList') as HTMLSelectElement;

function refreshQueryList() {
    // Remove all options except the placeholder
    while (select.options.length > 1) select.remove(1);

    context.loadQueryList({
        success: (queries) => {
            queries.forEach(q => {
                const opt = new Option(q.name, q.id);
                select.add(opt);
            });

            // Re-select the currently active query if it is in the list
            const currentId = context.getQuery().getId();
            if (currentId) select.value = currentId;
        }
    });
}

select.addEventListener('change', () => {
    if (select.value) {
        context.loadQuery({
            queryId: select.value,
            success: () => refreshQueryList()
        });
    }
});

document.getElementById('btnNew').addEventListener('click', () => {
    context.newQuery({
        name: `Report ${new Date().toLocaleDateString()}`,
        success: () => refreshQueryList()
    });
});

document.getElementById('btnSave').addEventListener('click', () => {
    context.saveQuery({
        success: () => refreshQueryList()
    });
});

document.getElementById('btnDelete').addEventListener('click', () => {
    if (!confirm('Delete this query?')) return;
    context.removeQuery({
        success: () => refreshQueryList()
    });
});

// Populate the list once the context is ready
context.addEventListener('ready', () => refreshQueryList());
```

---

### Example 4: Custom `IQueryStore` implementation

If you need storage that the built-in implementations do not cover (cloud blob storage, a Redis cache, a different database ORM), implement `IQueryStore` directly.

```csharp
public class BlobQueryStore : IQueryStore
{
    private readonly BlobServiceClient _blobClient;
    private readonly string _containerName;
    private readonly string _userId;

    public BlobQueryStore(BlobServiceClient blobClient, string userId)
    {
        _blobClient = blobClient;
        _containerName = "easyquery";
        _userId = userId;
    }

    private string BlobName(string modelId, string queryId)
        => $"{_userId}/{modelId}/{queryId}.json";

    public async Task<bool> LoadQueryAsync(Query query, string queryId, CancellationToken ct = default)
    {
        var container = _blobClient.GetBlobContainerClient(_containerName);
        var blob = container.GetBlobClient(BlobName(query.Model.Id, queryId));

        if (!await blob.ExistsAsync(ct)) return false;

        var response = await blob.DownloadContentAsync(ct);
        await query.LoadFromJsonStringAsync(response.Value.Content.ToString());
        return true;
    }

    public async Task<bool> SaveQueryAsync(Query query, bool createIfNotExists = true, CancellationToken ct = default)
    {
        var container = _blobClient.GetBlobContainerClient(_containerName);
        await container.CreateIfNotExistsAsync(cancellationToken: ct);

        var blob = container.GetBlobClient(BlobName(query.Model.Id, query.Id));
        var json = await query.SaveToJsonStringAsync();

        await blob.UploadAsync(BinaryData.FromString(json), overwrite: true, cancellationToken: ct);
        return true;
    }

    public Task<bool> AddQueryAsync(Query query, CancellationToken ct = default)
        => SaveQueryAsync(query, createIfNotExists: true, ct);

    public async Task<bool> RemoveQueryAsync(string modelId, string queryId, CancellationToken ct = default)
    {
        var container = _blobClient.GetBlobContainerClient(_containerName);
        var blob = container.GetBlobClient(BlobName(modelId, queryId));
        return await blob.DeleteIfExistsAsync(cancellationToken: ct);
    }

    public async Task<IEnumerable<QueryListItem>> GetAllQueriesAsync(string modelId, CancellationToken ct = default)
    {
        var container = _blobClient.GetBlobContainerClient(_containerName);
        var prefix = $"{_userId}/{modelId}/";
        var result = new List<QueryListItem>();

        await foreach (var item in container.GetBlobsAsync(prefix: prefix, cancellationToken: ct)) {
            var queryId = Path.GetFileNameWithoutExtension(item.Name);
            result.Add(new QueryListItem(queryId, modelId, queryId, ""));
        }
        return result;
    }
}

// Registration
app.MapEasyQuery(options => {
    options.UseQueryStore(manager => {
        var http   = manager.Services.GetRequiredService<IHttpContextAccessor>();
        var userId = http.HttpContext?.User?.Identity?.Name ?? "anon";
        var blobClient = manager.Services.GetRequiredService<BlobServiceClient>();
        return new BlobQueryStore(blobClient, userId);
    });
});
```

---

### Example 5: Custom `QueryStorage` on the client side

To store queries somewhere other than `localStorage` (e.g. your own REST API or IndexedDB), implement the `QueryStorage` interface and register a resolver:

```typescript
import { QueryStorage, QueryListItem, QueryData,
         NewQueryOptions, LoadQueryOptions, SaveQueryOptions, 
         RemoveQueryOptions, GetQueryListOptions, EqContext } 
    from '@easyquery/core';

export class MyApiQueryStorage implements QueryStorage {

    constructor(private context: EqContext) {}

    public init(options?: any): void {}

    public async getQueryList(options?: GetQueryListOptions): Promise<QueryListItem[]> {
        const response = await fetch(`/my-api/queries?model=${this.context.getModel().getId()}`);
        return response.json();
    }

    public async newQuery(options?: NewQueryOptions): Promise<QueryData> {
        const query = options?.query || this.context.getQuery();
        if (options?.name) query.setName(options.name);
        query.reset();

        const response = await fetch('/my-api/queries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query.toJSONData() })
        });
        const data = await response.json();
        return data.query;
    }

    public async loadQuery(options?: LoadQueryOptions): Promise<QueryData> {
        const queryId = options?.queryId || this.context.getQuery().getId();
        const modelId = options?.modelId || this.context.getModel().getId();
        const response = await fetch(`/my-api/queries/${queryId}?model=${modelId}`);
        const data = await response.json();
        return data.query;
    }

    public async saveQuery(options?: SaveQueryOptions): Promise<QueryData> {
        const query = options?.query || this.context.getQuery();
        const queryId = query.getId();
        const modelId = query.getModel().getId();

        const response = await fetch(`/my-api/queries/${queryId}?model=${modelId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query.toJSONData() })
        });
        const data = await response.json();
        return data.query;
    }

    public async removeQuery(options?: RemoveQueryOptions): Promise<void> {
        const queryId = options?.queryId || this.context.getQuery().getId();
        const modelId = options?.modelId || this.context.getModel().getId();
        await fetch(`/my-api/queries/${queryId}?model=${modelId}`, { method: 'DELETE' });
    }
}

// Registration (before context.init() is called)
import { EqServiceProvider } from '@easyquery/core';

EqServiceProvider.getInstance()
    .registerQueryStorageResolver(context => new MyApiQueryStorage(context));
```

---

## Summary

| Concern | Server (.NET) | Client (JS) |
|---------|--------------|------------|
| Core interface | `IQueryStore` | `QueryStorage` |
| File-based default | `FileQueryStore` | — |
| Browser-local default | — | `BrowserQueryStorage` (`localStorage`) |
| Server-connected client | — | `EqServerQueryStorage` (Enterprise) |
| Registration | `options.UseQueryStore(resolver)` | `EqServiceProvider.registerQueryStorageResolver(resolver)` |
| Manual load | `EasyQueryManager.LoadQueryAsync()` | `context.loadQuery({ queryId })` |
| Manual save | `EasyQueryManager.SaveQueryToStoreAsync()` | `context.saveQuery()` |
| Auto-save on sync | `options.SaveQueryOnSync = true` | automatic when flag is set |
| Auto-save on new | `options.SaveNewQuery = true` | automatic when flag is set |
| Cache queries | `options.StoreQueryInCache = true` | automatic (session cache on server) |
