---
title: Attaching extra data to a query on the client-side
slug: easyquery/docs/tutorials/attaching-extra-data-to-query-client-side
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

Now to process this additional request data you can create your own implementation of EasyQueryManager and override its `ExecuteQueryCore` method.

Here is an example:

```
public class EasyQueryManagerSqlWithFilter : EasyQueryManagerSql
{
    public EasyQueryManagerSqlWithFilter(EasyQueryOptions options, IServiceProvider services) : base(options, services) 
	{
    }

    protected override Task<IEqResultSet> FetchDataCoreAsync(CancellationToken ct)
    {
	    if (ClientData.TryGetValue("filter", out var filter) {
			Query.ExtraConditions.AddSimpleCondition("Orders.OrderDate", "Equals", filter.ToString());
		}

        return base.FetchDataCoreAsync(ct);
    }
}
```

Here we just reconfigure our current query and add in it an additional condition group with a bunch of conditions like `SomeColumns contains 'filter text'`

Finally, you need to register your manager class on EasyQuery middleware initialization:

```
app.UseEasyQuery(options => {
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