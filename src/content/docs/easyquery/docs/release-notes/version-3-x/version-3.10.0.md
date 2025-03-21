---
title: Version 3.10.0 release notes
slug: easyquery/docs/release-notes/version-3-x/version-3.10.0
---


## Breaking changes

Version 3.10.0 of EasyQuery changes the default behavior of EasyQuery server-side components. We changed it (a little) to make EasyQuery components completely stateless.

Now, you will need to change the following in your code:

### 1. GetQuery action

`GetQuery` function of EqServiceProviderDb now takes both Model ID and Query ID parameters, so you need change either the action method and the `GetQuery` call in that action

```
public ActionResult GetQuery(string queryId) {
    var query = eqService.GetQuery(queryId);
    return Json(query.SaveToDictionary());
}
```
to

```
public ActionResult GetQuery(string modelId, string queryId) {
    var query = eqService.GetQuery(modelId, queryId);
    return Json(query.SaveToDictionary());
}
```
### 2. eqService.GetQuery() calls

Before the version 3.10.0, `GetQuery()` call (without any parameter) meant that you were going to load the default query which was stored in Session. Obviously, this will not work if StoreQueryInSession is turned off. 

So, now you should use `GetQueryFromSession` method instead, and it will throw an exception if the session is turned off.

```
public void ExportToFileExcel() {
    Response.Clear();

    var query = eqService.GetQuery();

    .   .   .   .   .   .
}
```
to 

```
public void ExportToFileExcel() {
    Response.Clear();

    var query = eqService.GetQueryFromSession();

    .   .   .   .   .   .
}
```

### 3. eqService.DefaultModelName property

`DefaultModelName` is obsolete now. 

So, now instead of 

```
eqService.DefaultModelName = "NWindSQL";
```

please use:

```
eqService.DefaultModelId = "NWindSQL";
```
### 4. EqServiceProviderDb.GetDefaultQuery

This method can be used to return the default (usually empty) query for some model.
It can be used in `NewQuery` action method or in similar cases.

### 5. NewQuery action method

As in previous cases, we need to add `modelId` parameter into this action and, additionally, replace `GetQuery` call by the new `GetDefaultQuery`

Here how this method should look like now:

```c#        
public ActionResult NewQuery(string modelId, string queryName) {
    var query = eqService.GetDefaultQuery(modelId);
      .    .    .    .    .    .
    return Json(query.SaveToDictionary());
}
```

### 6. Chart provider

The new version allows using different chart libraries (not only Google Charts) to render charts on query results.

So, in addition to usual chart script inclusion like:

```
    <script src="~/Scripts/easychart.js" type="text/javascript"></script>
```

you will also need to include one more “chart provider integration” script. For example:

```
    <script src="~/Scripts/easychart.chartjs.js" type="text/javascript"></script>
```
or

```
    <script src="~/Scripts/easychart.google.js" type="text/javascript"></script>
```