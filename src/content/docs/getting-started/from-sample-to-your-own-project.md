---
title: From a sample to your own project
slug: getting-started/from-sample-to-your-own-project
sidebar:
  order: 1
---

The quickest way to start with EasyQuery is to take the sample closest to your scenario, connect it to your database, and then move the working code to your own application.

This article explains the general approach:

1. [Choose a sample](#choose-a-sample) and run it.
2. [Connect the sample to your database](#connect-the-sample-to-your-database).
3. [Copy the EasyQuery code to your project](#copy-the-easyquery-code-to-your-project).
4. [Set your license key](#set-your-license-key).

:::note[Looking for exact file names?]
Every sample's README has an **Add EasyQuery to your project** section that lists the packages, the files to copy, and the code to change for that particular sample. This article covers what those steps have in common and when to use each option. Start here for the overview, then follow the README of your sample.
:::

## Choose a sample

The samples are published on [GitHub](https://github.com/easyquery), with one repository per platform. Each repository's README explains how to get the code and run it.

| Platform | Repository | Scenarios |
|---|---|---|
| ASP.NET Core with Razor Pages or MVC | [eq-samples-aspnetcore-razor-mvc](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc) | Advanced search, ad-hoc reporting, data filtering |
| ASP.NET Core with Angular | [eq-samples-aspnetcore-angular](https://github.com/easyquery/eq-samples-aspnetcore-angular) | Advanced search, ad-hoc reporting |
| ASP.NET Core with Blazor | [eq-samples-aspnetcore-blazor](https://github.com/easyquery/eq-samples-aspnetcore-blazor) | Advanced search, ad-hoc reporting |
| ASP.NET Core with React | [eq-samples-aspnetcore-react](https://github.com/easyquery/eq-samples-aspnetcore-react) | Advanced search |
| ASP.NET Core with Vue | [eq-samples-aspnetcore-vue](https://github.com/easyquery/eq-samples-aspnetcore-vue) | Advanced search |
| ASP.NET Core with Stencil | [eq-samples-aspnetcore-stencil](https://github.com/easyquery/eq-samples-aspnetcore-stencil) | Advanced search |
| ASP.NET MVC 5 | [eq-samples-aspnet4-mvc](https://github.com/easyquery/eq-samples-aspnet4-mvc) | Advanced search, ad-hoc reporting, data filtering |
| ASP.NET Web Forms | [eq-samples-aspnet4-webforms](https://github.com/easyquery/eq-samples-aspnet4-webforms) | Advanced search |
| Windows Forms | [eq-samples-winforms](https://github.com/easyquery/eq-samples-winforms) | Query builder |
| WPF | [eq-samples-wpf](https://github.com/easyquery/eq-samples-wpf) | Query builder |

## Connect the sample to your database

The samples work with a demo database based on Northwind, in SQLite or SQL Server. Before you move any code, connect the sample to your own database. This lets you try EasyQuery on your real data with very little work.

EasyQuery needs two things from your side: a connection to the database, and a [data model](/easyquery/docs/fundamentals/data-model) that describes the entities and attributes your users can query. If you are new to data models, read [How it works](/easyquery/docs/fundamentals/how-it-works) and [Working with data models in EasyQuery](/easyquery/docs/tutorials/working-with-data-model) first.

There are three ways to get a data model. Pick the one that suits your project:

| Data model source | Use it when | Example |
|---|---|---|
| [`DbContext`](#use-your-dbcontext) | Your project uses Entity Framework. This is what most samples do. | [Angular `AdvancedSearch`](https://github.com/easyquery/eq-samples-aspnetcore-angular/blob/main/AdvancedSearch/Program.cs) |
| [Database metadata](#load-the-model-from-database-metadata) | You don't use Entity Framework and want the model built from the database schema. | [MVC 5 `AdhocReportingMetaData`](https://github.com/easyquery/eq-samples-aspnet4-mvc/blob/main/AdhocReportingMetaData/Controllers/EasyQuery/EasyReportController.cs) |
| [Model file](#load-the-model-from-a-file) | You want full control over the model and edit it in Data Model Editor. | [Razor `AdvancedSearch`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/tree/main/Razor.AdvancedSearch) (see its README) |

All the options below are set in the EasyQuery configuration, which depends on the platform:

- **ASP.NET Core:** the `app.MapEasyQuery(options => ...)` call in `Program.cs` (`endpoints.MapEasyQuery(...)` in `Startup.cs` in the older samples). [`Razor.AdvancedSearch`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Razor.AdvancedSearch/Services/EasyQueryConfigurator.cs) keeps these settings in a separate `EasyQueryConfigurator` class.
- **ASP.NET 4 (MVC and Web Forms):** the `ConfigureEasyQueryOptions` method of the API controller.

The [data filtering](#data-filtering-samples) and [desktop](#desktop-samples) samples work differently and are described separately.

### Use your DbContext

Replace the sample's `DbContext` with your own class and change the connection string it uses. EasyQuery builds the data model from the context and takes the database connection from it.

For ASP.NET Core:

```csharp
builder.Services.AddDbContext<YourDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("YourDatabase")));

// ...

app.MapEasyQuery(options => {
    options.UseDbContext<YourDbContext>();
});
```

For ASP.NET 4:

```csharp
protected override void ConfigureEasyQueryOptions(EasyQueryOptions options)
{
    options.UseDbContext(new YourDbContext());
}
```

If your context derives from `IdentityDbContext`, use `UseDbContextWithoutIdentity` to keep the Identity tables out of the model, as [`Razor.AdHocReporting`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Razor.AdHocReporting/Program.cs) does. It requires the `Korzh.EasyQuery.EntityFrameworkCore.Identity` package.

### Load the model from database metadata

Set the connection, then tell EasyQuery to read the model from the database schema:

```csharp
options.ConnectionString = builder.Configuration.GetConnectionString("YourDatabase");
options.UseDbConnection<NpgsqlConnection>();
options.UseDbConnectionModelLoader();
```

This option also needs a *DB gate*, the class that reads the metadata of a particular database. Install its package and register it:

| Database | Gate class | NuGet package |
|---|---|---|
| SQL Server | `SqlServerGate` | `Korzh.EasyQuery.SqlServerGate` |
| PostgreSQL | `NpgSqlGate` | `Korzh.EasyQuery.NpgSqlGate` |
| MySQL | `MySqlGate` | `Korzh.EasyQuery.MySqlGate` |
| SQLite | `SqLiteGate` | `Korzh.EasyQuery.SqLiteGate` |
| Oracle | `OdpCoreGate` | `Korzh.EasyQuery.OdpCoreGate` |

In ASP.NET Core, register the gate when you add the EasyQuery services:

```csharp
builder.Services.AddEasyQuery()
    .UseSqlManager()
    .RegisterDbGate<NpgSqlGate>();
```

In ASP.NET 4, do it in `App_Start/WebApiConfig.cs`, as [the `AdvancedSearch` sample](https://github.com/easyquery/eq-samples-aspnet4-mvc/blob/main/AdvancedSearch/App_Start/WebApiConfig.cs) does:

```csharp
EasyQueryManagerSql.RegisterDbGate<NpgSqlGate>();
```

Many samples that use a `DbContext` also contain these lines as comments, so you can switch to this option by uncommenting them.

`UseDbConnectionModelLoader` and `UseDbContext` both accept an optional delegate that configures the loader. For example, you can hide some tables and fields, as [`AdhocReportingMetaData`](https://github.com/easyquery/eq-samples-aspnet4-mvc/blob/main/AdhocReportingMetaData/Controllers/EasyQuery/EasyReportController.cs) does:

```csharp
options.UseDbConnectionModelLoader(settings => {
    settings.AddTableFilter(table => !table.Name.StartsWith("sys"));
    settings.AddFieldFilter(field => !field.IsForeignKey);
});
```

### Load the model from a file

1. Create a data model in [Data Model Editor](/easyquery/docs/data-model-editor/about).
2. Save it as an XML or JSON file in the `App_Data` folder of your project, for example `App_Data/MyModel.xml`.
3. Make sure that the file is published with the project. In an ASP.NET 4 project, include the file in the project and set its **Build Action** to **Content**.
4. Add the loader and the connection to the EasyQuery configuration:

   ```csharp
   options.DefaultModelId = "MyModel";
   options.UseModelLoader(_ => new FileModelLoader("App_Data"));

   options.ConnectionString = builder.Configuration.GetConnectionString("YourDatabase");
   options.UseDbConnection<NpgsqlConnection>();
   ```

`FileModelLoader` looks for a file named after the model ID (`MyModel.json` or `MyModel.xml`) in the specified folder, so `DefaultModelId` must match the file name. In ASP.NET 4, pass the full path to the folder: `HostingEnvironment.MapPath("~/App_Data")`.

The model ID is also the name of the folder where `FileQueryStore` keeps saved queries (`App_Data/dm-<model ID>`). The queries that come with a sample refer to the sample's own entities, so they won't work with your model. Remove them.

### Data filtering samples

Data filtering needs no separate data model: EasyQuery takes it from the entity you filter. Replace the entity query in the `UseEntity` call. In [`Razor.DataFiltering`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Razor.DataFiltering/Program.cs), it looks like this:

```csharp
app.MapEasyQuery(options => {
    options.Endpoint = "/data-filtering";
    options.UseEntity(manager => manager.Services
        .GetRequiredService<YourDbContext>()
        .YourEntities
        .AsQueryable());
});
```

[`Mvc.DataFiltering`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Mvc.DataFiltering/Controllers/OrderController.cs) and the [MVC 5 `DataFiltering`](https://github.com/easyquery/eq-samples-aspnet4-mvc/tree/main/DataFiltering) sample keep this logic in `OrderController` instead.

### Desktop samples

The Windows Forms and WPF samples read the `DefaultConnection` connection string from `App.config`, so change it first. Then load the model where the form or page initializes EasyQuery: in [`EasyQueryForm.cs`](https://github.com/easyquery/eq-samples-winforms/blob/main/EqDemoWinFormsNet4/EasyQueryForm/EasyQueryForm.cs) for Windows Forms and in [`EasyQueryPage.xaml.cs`](https://github.com/easyquery/eq-samples-wpf/blob/main/EqDemoWpfNet4/EasyQueryPage.xaml.cs) for WPF. The samples use a `DbContext` and show the alternatives as comments (the file option appears only in the Windows Forms samples):

```csharp
// From a DbContext
EqManager.Model.LoadFromDbContext(ApplicationDbContext.Create());

// From a file
// EqManager.Model.LoadFromJsonFile("Your path");

// From database metadata
// DbGate.Register<SqlServerGate>();
// EqManager.Model.LoadFromConnection(ApplicationDbContext.Create().Database.Connection);
```

## Copy the EasyQuery code to your project

Once the sample works with your data, move the EasyQuery code to your application. The steps are the same everywhere:

1. Install the same `Korzh.EasyQuery.*` and `EasyData.*` packages that the sample uses. You'll find them in the sample's project file, and their versions in `Directory.Packages.props` at the root of the repository.
2. Add the server-side part (web projects only).
3. Copy the page, component, or form that holds the EasyQuery UI.

The sample's README lists the exact files. The sections below show what differs between platforms.

### ASP.NET Core

1. Install the packages. The main one is `Korzh.EasyQuery.AspNetCore`.
2. Copy the `builder.Services.AddEasyQuery()...` call that registers the EasyQuery services.
3. Copy the `app.MapEasyQuery(...)` call that adds the EasyQuery endpoint. If the sample has several of them, take only the one for your scenario.
4. Copy the UI:

| Front end | What to copy | Example |
|---|---|---|
| Razor Pages | The page and its code-behind | [`Pages/Index.cshtml`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Razor.AdHocReporting/Pages/Index.cshtml) |
| MVC | The view and the controller action that returns it | [`Views/Order/Orders.cshtml`](https://github.com/easyquery/eq-samples-aspnetcore-razor-mvc/blob/main/Mvc.DataFiltering/Views/Order/Orders.cshtml) |
| Angular | The EasyQuery component folder | [`src/app/easyquery`](https://github.com/easyquery/eq-samples-aspnetcore-angular/tree/main/AdvancedSearch/ClientApp/src/app/easyquery) |
| React | The EasyQuery component | [`src/components/EasyQuery.js`](https://github.com/easyquery/eq-samples-aspnetcore-react/blob/main/AdvancedSearch/ClientApp/src/components/EasyQuery.js) |
| Vue | The EasyQuery view | [`src/views/EasyQueryView.vue`](https://github.com/easyquery/eq-samples-aspnetcore-vue/blob/main/Vue3/AdvancedSearch.Client/src/views/EasyQueryView.vue) |
| Blazor | The `.razor` page and the EasyQuery scripts and styles from the host page | [`Pages/AdvancedSearch.razor`](https://github.com/easyquery/eq-samples-aspnetcore-blazor/blob/main/AdvancedSearch.BlazorServer/Pages/AdvancedSearch.razor) |

With a client-side framework, also install the `@easyquery/*` and `@easydata/*` npm packages that the sample's `package.json` lists.

### ASP.NET 4 (MVC and Web Forms)

1. Install the packages. The main one is `Korzh.EasyQuery.AspNet4`.
2. Set up Web API, if your project doesn't have it yet, as described in [Getting started for ASP.NET 4](/easyquery/docs/getting-started/asp-net-4-mvc-or-webforms).
3. Copy the API controller, for example [`AdvancedSearchController`](https://github.com/easyquery/eq-samples-aspnet4-mvc/blob/main/AdvancedSearch/Controllers/EasyQuery/AdvancedSearchController.cs), and change its namespace.
4. Copy the UI:
   - **MVC:** the view, such as [`Views/Home/Index.cshtml`](https://github.com/easyquery/eq-samples-aspnet4-mvc/blob/main/AdvancedSearch/Views/Home/Index.cshtml), and the controller action that returns it.
   - **Web Forms:** [`EasyQuery.aspx`](https://github.com/easyquery/eq-samples-aspnet4-webforms/blob/main/AdvancedSearch/EasyQuery.aspx) and its code-behind, [`EasyQuery.aspx.cs`](https://github.com/easyquery/eq-samples-aspnet4-webforms/blob/main/AdvancedSearch/EasyQuery.aspx.cs).

### Windows Forms and WPF

1. Install the packages. The main one is `Korzh.EasyQuery.WinForms` or `Korzh.EasyQuery.Wpf`.
2. Copy the UI:
   - **Windows Forms:** the [`EasyQueryForm`](https://github.com/easyquery/eq-samples-winforms/tree/main/EqDemoWinFormsNet4/EasyQueryForm) folder, which holds the form with its `.Designer.cs` and `.resx` files.
   - **WPF:** [`EasyQueryPage.xaml`](https://github.com/easyquery/eq-samples-wpf/blob/main/EqDemoWpfNet4/EasyQueryPage.xaml) and its code-behind, `EasyQueryPage.xaml.cs`.

## Set your license key

Your project needs an EasyQuery license key. See the **License key** section in the sample's README for where to put it, and [Product key](/easyquery/docs/getting-started/product-key) for more details.

## Next steps

- [Working with data models in EasyQuery](/easyquery/docs/tutorials/working-with-data-model) describes the data model options in detail.
- [How it works](/easyquery/docs/fundamentals/how-it-works) explains how the parts of EasyQuery fit together.
