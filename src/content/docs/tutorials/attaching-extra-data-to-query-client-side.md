---
title: 'Attaching extra data to a query on the client-side '
slug: tutorials/attaching-extra-data-to-query-client-side
sidebar:
  order: 7
---

## Problem

Sometimes it's necessary to attach some extra data to each query (based on some user's input on the client-side) and then use that extra data on query execution.

For example, user might want to specify a date (or a period of time) as an additional filter to the any query.

Or it's it might be necessary to set a text filter, so the result set must include only the rows that contain that text.

EasyQuery totally allows to implement such scenarios with minimal efforts.

## Solution

### Define beforeExecuteQuery handler on the client-side

To add some extra data you can use `beforeExecuteQuery` event handler which can be defined on view initialization:

```

var viewOptions = {
    .     .     .     .
	handlers: {
		beforeFetchData = (context, requestData) => {
		    requestData.data = requestData.data || {};
			var filterInput = document.getElementById('dataFilter');
			requestData.data.filter = filterInput.value;
		};
	}
};

var view = new AdvancedSearchView();

.    .    .    .
```


Now if you check in Developer Tools (on Network tab), each  `.../execute` request now includes ad additional `data` object in the request payload.

### Define custom EasyQueryManager on the server-side

Now to process this additional request data you can create your own implementation of EasyQueryManager and override its `TuneBuilder` method. It's called right before the SQL statement is built, when the whole request (including the `data` object) has already been read.

Here is an example:

```csharp
public class EasyQueryManagerSqlWithFilter : EasyQueryManagerSql
{
    public EasyQueryManagerSqlWithFilter(EasyQueryOptions options, IServiceProvider services) : base(options, services) 
    {
    }

    protected override void TuneBuilder(IQueryBuilder builder)
    {
        if (ClientData.TryGetValue("filter", out var filter)) {
            Query.ExtraConditions.AddSimpleCondition("Orders.OrderDate", "Equal", filter.ToString());
        }

        base.TuneBuilder(builder);
    }
}
```

Here we just add an extra condition to the current query, so the result set is filtered by the value the user entered on the client.

:::caution
Don't change the query in `FetchDataCoreAsync`: by the time it's called, the SQL statement is already built, so the changes never reach the database. If the condition doesn't depend on the client data (for example, a filter by the current user), use a query tuner instead — see [How to add an extra condition to your query](/easyquery/docs/how-to/add-extra-condition).
:::

Finally, you need to register your manager class on EasyQuery middleware initialization:

```
app.MapEasyQuery(options => {
    .    .    .    .
	options.UseManager<EasyQueryManagerSqlWithFilter>();
});
```


NB: Please note that you can read the `ClientData` property in any method of your custom manager. For example, here is how you can choose the connection string depending on the parameter defined on the client:

```
public class EasyQueryManagerSqlWithFilter : EasyQueryManagerSql
{
    .     .     .     .
    protected override DbConnection GetConnectionCore()
    {
        var dbConnection = base.GetConnectionCore();
        if (ClientData.TryGetValue("connection", out var conType)) {
		    if (conType.ToString() == "Type1") {
                dbConnection.ConnectionString = "One connection string";
			}
			else {
                dbConnection.ConnectionString = "Another connection string";
			}
        }
        return dbConnection;
    }
}
```
