---
title: Store queries in a database
slug: how-to/store-queries-in-a-database
---


## Objective

We have some web-application with authorized access to some parts of it. Our users creates their own queries (with the help of EasyQuery components of course) and they would like to store those queries and load them back. The query storage is not shared - so each user can access only the queries created by them.

## Solution

Starting from version 5.0 EasyQuery introduces the concept of the "query store" - an object which is responsible for saving and loading queries to/from some storage. The interface of the query store is defined in `IQueryStore` C# interface. EasyQuery library also includes a default implementation of `IQueryStore`: `FileQueryStore` class which allows you to store queries on the file system.

For the purposes of our task we will need to create another implementation `IQueryStore` which stores the queries to some DB and takes into the account the currentlu logged user. We suppose here that we work with our DB via EntityFramework Core and we have some special DbSet in our DbContext to store information about our queries.

### Step 1: Model class

So, first we need to define our model class

```
public class QueryRec
{
	public string Id { get;set; }
	
	public string Name { get; set; }
	
    public string Description { get; set; }

    public string ModelId { get; set; }

    public string UserId { get; set; }

    public string QueryJson { get; set; }
}
```


The new property in  DbConext:

```
public class MyDbContext: DbContext
{
    .    .    .    .    .    .
	public DbSet<QueryRec> Queries { get;set; }
}
```


### Step 2: New query store: DbQueryStore

Our next step - to define the query store implemetation which saves the queries to our new table.

 We just need to implement the basic operations:
 
 - `GetAllQueriesAsync` - get the list of available queries for some model and the current user
 - `LoadQueryAsync` - load one query by ID
 - `AddQueryAsync ` - add a new query
 - `SaveQueryAsync` - save an existing query (or add a new one if the query with such ID does not exist yet)
 - `RemoveQueryAsync` - remove some query from the storage.


The code for the new class is quite straightforward and self-explanatory:

```
public class DbQueryStore : IQueryStore
{
    private IHttpContextAccessor _httpContextAccessor;
    private MyDbContext _dbContext;

    public DbQueryStore(IServiceProvider services)
    {
        _httpContextAccessor = services.GetRequiredService<IHttpContextAccessor>();
        _dbContext = services.GetRequiredService<MyDbContext>();
    }

    private string GetUserId()
    {
        var user = _httpContextAccessor?.HttpContext?.User;
        if (user == null) {
            throw new NullReferenceException("Can't get HttpContextAccessor or the current user");
        }
        return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    }

    public async Task<bool> AddQueryAsync(Query query)
    {
        var userId = GetUserId();

        if (string.IsNullOrEmpty(query.ID)) {
            query.ID = Guid.NewGuid().ToString();
        }

        var queryRec = new QueryRec {
            Id = query.ID,
            Name = query.Name,
            Description = query.Description,
            ModelId = query.Model.ID,
            QueryJson = await query.SaveToJsonStringAsync(),
            UserId = GetUserId()
        };

        await _dbContext.Queries.AddAsync(queryRec);
        await _dbContext.SaveChangesAsync();
        return true;

    }

    public Task<IEnumerable<QueryListItem>> GetAllQueriesAsync(string modelId)
    {
        return Task.FromResult(ApplyUserGuard(_dbContext.Queries)
                                .Where(qr => qr.ModelId == modelId)
                                .Select(qr => new QueryListItem(qr.Id, qr.Name, qr.Description))
                                .AsEnumerable());
    }


    public async Task<bool> LoadQueryAsync(Query query, string queryId)
    {
        var queryItem = await ApplyUserGuard(_dbContext.Queries).FirstOrDefaultAsync(qr => qr.Id == queryId);
        if (queryItem != null) {
            await query.LoadFromJsonStringAsync(queryItem.QueryJson);
            query.ID = queryItem.Id;

            return true;
        }

        return false;
    }

    public async Task<bool> RemoveQueryAsync(string modelId, string queryId)
    {
        var queryRec = await ApplyUserGuard(_dbContext.Queries).FirstOrDefaultAsync(qr => qr.Id == queryId);
        if (queryRec != null) {
            _dbContext.Remove(queryRec);
            await _dbContext.SaveChangesAsync();

            return true;
        }

        return false;
    }

    public async Task<bool> SaveQueryAsync(Query query, bool createIfNotExists = true)
    {
        var queryRec = await ApplyUserGuard(_dbContext.Queries).FirstOrDefaultAsync(qr => qr.Id == query.ID);
        if (queryRec != null) {
            queryRec.Name = query.Name;
            queryRec.Description = query.Description;
            queryRec.ModelId = query.Model.ID;
            queryRec.QueryJson = await query.SaveToJsonStringAsync();

            _dbContext.Update(queryRec);
            await _dbContext.SaveChangesAsync();

            return true;
        }
        else if (createIfNotExists) {
            return await AddQueryAsync(query);
        }

        return false;
    }

    private IQueryable<QueryRec> ApplyUserGuard(IQueryable<QueryRec> filter)
    {
        var userId = GetUserId();
        return filter.Where(qi => qi.UserId == userId);
    }
}
```

2 notes about the implemenation listed above:

 - In the constructor we resolve our DbContext - to store our queries to the DB and a HTTP context accessor - get information about the current user.
 - `ApplyUserGuard` method just adds a condition that filters the result set by user ID. We apply this method to each request to `Queries` DB set.


### Step 3: Register the new query store in middleware's settings

The final step is to set our new `DbQueryStore` class as the query storage for our middleware:

```
app.UseEasyQuery(options => {
    .    .    .    .    .
    options.UseQueryStore(services => new DbQueryStore(services));
});
```

That's all. Now all save/load commands sent from the client-side will be processed by our new "query store".