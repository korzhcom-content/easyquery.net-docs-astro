---
title: EasyQueryApiController class
slug: >-
  api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/easyqueryapicontroller-class
sidebar:
  order: 100
---

The base WebAPI controller for all other EasyQuery controllers implementations.  Implements the `System.Web.Http.ApiController`
```csharp
public abstract class Korzh.EasyQuery.AspNet.EasyQueryApiController
    : ApiController

```
Package: `Korzh.EasyQuery.AspNet4` (targets: `net461`)

Assembly: `Korzh.EasyQuery.AspNet4.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryApiController() | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EasyQueryApiController](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/easyqueryapicontroller-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Manager | [EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Creates and return a EasyQueryManager object  according to the settings specified in [Korzh.EasyQuery.AspNet.EasyQueryApiController.ConfigureEasyQueryOptions(Korzh.EasyQuery.Services.EasyQueryOptions)](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/easyqueryapicontroller-class) method. | 
| Options | [EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) | Creates and gets the options for EasyQueryManager  (the ones that are configured in [Korzh.EasyQuery.AspNet.EasyQueryApiController.ConfigureEasyQueryOptions(Korzh.EasyQuery.Services.EasyQueryOptions)](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/easyqueryapicontroller-class) method). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ConfigureEasyQueryOptions([EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | This method should be overriden in the derived classes  to configure the options of EasyQueryManager used in this controller. | 
| CreateEasyQueryManager([EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | [EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Creates an instance of [Korzh.EasyQuery.Services.EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)  that is used to handle all controller's actions. | 
| Dispose(`bool` disposing) | `void` | Releases the unmanaged resources that are used by the object and, optinally, releases the managed resources | 
| EqError(`string` message) | [EqErrorHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqerrorhttpactionresult-class) | Creates and returns an instance of [Korzh.EasyQuery.AspNet.EqErrorHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqerrorhttpactionresult-class) class for the current request and with the specified error message. | 
| EqOk() | [EqOkHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) | Creates and returns an instance of [Korzh.EasyQuery.AspNet.EqOkHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) class for the current request | 
| EqOk(`object` data) | [EqOkHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) | Creates and returns an instance of [Korzh.EasyQuery.AspNet.EqOkHttpActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) class for the current request | 
| ExportResultAsync(`string` modelId, `string` queryId, `string` formatType) | `Task`&lt;`HttpResponseMessage`&gt; | Handles the ExportResult request.  This action builds the query passed in the request's body, get the result set in the specified format  and sends it back in a response with an <c>attachment</c> Content-Disposition (so it's downloaded and saved locally) | 
| ExportResultAsync(`string` modelId, `string` formatType) | `Task`&lt;`HttpResponseMessage`&gt; | Handles the ExportResult request.  This action builds the query passed in the request's body, get the result set in the specified format  and sends it back in a response with an <c>attachment</c> Content-Disposition (so it's downloaded and saved locally) | 
| FetchDataAsync(`string` modelId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "FetchData" request.  This handler receives a query JSON in the request's body, builds a query (an SQL or LINQ),  executes it and return the result set (again in JSON format). | 
| GetLicenseKey() | `IHttpActionResult` | Handles the "GetLicenseKey" request. Returns the JS key defined at [Korzh.EasyQuery.AspNet.JSLicense.Key](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/jslicense-class). | 
| GetModelAsync(`string` modelId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "GetModel" request. Returns the data model represenation (in JSON format) by its ID. | 
| GetQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "GetQuery" request.  Returns the query represenation (in JSON) by its ID and the ID of the corresponding data model. | 
| GetQueryFileAsync(`string` modelId, `string` format) | `Task`&lt;`HttpResponseMessage`&gt; | Handles GetQueryFile request.  Returns a query in a response with an <c>attachment</c> Content-Disposition (so it's downloaded and saved locally) | 
| GetQueryListAsync(`string` modelId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "GetQueryList" request and returns the list of saved queries for a particular model. | 
| GetValueListAsync(`string` modelId, `string` editorId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "GetValueList" request.  Returs the list of values for a particular value editor. | 
| NewQueryAsync(`string` modelId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "NewQuery" request and returns a JSON representation of a new new empty query for a particular data model. | 
| RemoveQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "RemoveQuery" request and remove the query with the specified ID from the storage. | 
| SaveQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "SaveQuery" request for specified model and query.  The JSON representation of the query should be passed in the request's body. | 
| SyncQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`IHttpActionResult`&gt; | Handles the "SyncQuery" request.  This action gets a JSON representation of the query in request's body and  passes it SyncQuery method of EasyQueryManager.  The manager can save the query and/or build it and return SQL statement (depending on options) | 
| UpdateModelFormatVersionJson([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Sets an old format of JSON representation of the model  for the requests from EQ.JS 5.x or earlier. | 
| UploadQueryFileAsync(`string` modelId) | `Task`&lt;`IHttpActionResult`&gt; | Handles UploadQueryFile request.  The query file is sent in the request's body with a <c>multipart/form-data</c> Content-Type. |
