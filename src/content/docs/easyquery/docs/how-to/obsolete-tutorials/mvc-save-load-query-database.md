---
title: How to save/load queries to/from database
slug: easyquery/docs/how-to/obsolete-tutorials/mvc-save-load-query-database
---


By default, EasyQueryController saves/loads queries as XML files in App_Data folder. You can easily change this default behavior and save/load queries to any other storage (for example a database).

All you need to do - is add your handlers for QueryLoader and QuerySaver procedures in EasyQueryController constructor: 

```c#
public EasyQueryController() {
  eqService = new EqServiceProviderDb();
 
  eqService.QueryLoader = (query, queryName) => {
  string queryXml = "Get query content from database here"; 
  query.LoadFromString(queryXml);
  };
 
  eqService.QuerySaver = (query, queryName) => {
  string queryXml = query.SaveToString();
  //save queryXml content into database here
  };
 
  . . . . . . . . .
}
```

On the client side, you just call `EQ.client.loadQuery` function when you need to send "GetQuery" request (which is passed to `QueryLoader` on the server side" and `EQ.client.saveQuery` to call "SaveQuery" request (passed to `QuerySaver` handler).

```js
EQ.client.loadQuery({
    queryId: "MyQueryID",
    success: function (data) {
         //show some notification on success
     },
     error: {
         //show some alert on error
     }
});
```

```js
EQ.client.saveQuery({
	"queryName": "Some new query name",
	"success": function (data) {
            //saved successfully
	},
	error: {
            //error during saving
        }
});
```