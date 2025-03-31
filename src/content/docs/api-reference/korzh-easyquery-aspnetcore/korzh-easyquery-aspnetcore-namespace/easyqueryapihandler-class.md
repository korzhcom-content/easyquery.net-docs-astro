---
title: EasyQueryApiHandler class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyqueryapihandler-class
---

This class contains the handlers for all kind of HTTP requests to EasyQuery API (like GetModel, GetQuery, etc).
```csharp
public class Korzh.EasyQuery.AspNetCore.EasyQueryApiHandler

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryApiHandler([EasyQueryManager](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) manager, `HttpContext` httpContext) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EasyQueryApiHandler](//easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyqueryapihandler-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| HttpContext | `HttpContext` | The current HttpContext | 
| Manager | [EasyQueryManager](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | An instance of EasyQueryManager that incapsulates all business logic of EasyQuery API | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetFileExtentionByContentType(`string` contentType) | `string` | Gets the file extention by the content type. | 
| GetJSVersion() | `Version` | Gets the version of EasyQuery.JS library that has sent the request. | 
| GetQueryFileExt(`string` fileFormat) | `string` | Gets the extension of the query file for specified file format (json or xml). | 
| GetValidFileName(`string` fileName) | `string` | Gets the valid file name based on the string value passed in the parameter. | 
| HandleErrorResponseAsync(`int` statusCode, `string` message) | `Task` | Handles exceptions that might occur inside any other EasyQuery API request handler.  If the writing to the response content has not started it returns a response with 400 code and the error message. | 
| HandleExceptionAsync(`Exception` ex) | `Task` | Handles exceptions that might occur inside any other EasyQuery API request handler.  If the writing to the response content has not started it returns a response with 400 code and the error message. | 
| HandleExportResultAsync(`string` modelId, `string` formatType) | `Task` | Handles the ExportResult requests. | 
| HandleFetchDataAsync(`string` modelId) | `Task` | Handles the "FetchData" request.  This handler receives a query JSON in the request's body, builds a query (SQL or LINQ),  executes it and return the result set (again in JSON format). | 
| HandleGetModelAsync(`string` modelId) | `Task` | Handles the "GetModel" request as an asynchronous operation. | 
| HandleGetQueryAsync(`string` modelId, `string` queryId) | `Task` | Handles the "GetQuery" request and writes the response | 
| HandleGetQueryFileAsync(`string` modelId, `string` fileFormat) | `Task` | Handles GetQueryFile request. | 
| HandleGetQueryListAsync(`string` modelId) | `Task` | Handles the "GetQueryList" request and returns the list of saved queries for a particular model. | 
| HandleGetValueListAsync(`string` modelId, `string` editorId) | `Task` | Handles the "GetValueList" request.  Returs the list of values for a particular value editor. | 
| HandleNewQueryAsync(`string` modelId) | `Task` | Handles the "NewQuery" request and returns a JSON representation of a new new empty query for a particular data model. | 
| HandleRemoveQueryAsync(`string` modelId, `string` queryId) | `Task` | Handles the "RemoveQuery" request and remove the query with the specified ID from the storage. | 
| HandleSaveQueryAsync(`string` modelId, `string` queryId) | `Task` | Handles the "SaveQuery" request for specified model and query.  The JSON representation of the query should be passed in the request's body. | 
| HandleSyncQueryAsync(`string` modelId, `string` queryId) | `Task` | Handles the "SyncQuery" request.  This action gets a JSON representation of the query in request's body and  passes it SyncQuery method of EasyQueryManager.  The manager can save the query and/or build it and return SQL statement (depending on options) | 
| HandleUploadQueryFileAsync(`string` modelId) | `Task` | Handles UploadQueryFile request. | 
| LoadQueryFromFormFileAsync(`IFormFile` file) | `Task` | Loads query from a form file. | 
| WriteExecuteQueryResponseAsync(`JsonWriter` jsonWriter, [IEqResultSet](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface) resultSet) | `Task` | Writes the response for ExecuteQuery request to JsonWriter.  Can be overrided in derived classes to add extra data to the response. | 
| WriteExportedDataAsync(`Stream` responseStream, `string` formatType) | `Task` | Writes exported data to the response. | 
| WriteGetModelResponseAsync(`JsonWriter` jsonWriter, [DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `Task` | Writes the model's content to the JsonWriter.  Can be overriden in the derived classes to write some extra data to the response for GetModel request . | 
| WriteGetQueryResponseAsync(`JsonWriter` jsonWriter, [Query](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `Task` | Being overriden in the derived classes this method allows to write some extra data to the response for GetQuery request . | 
| WriteQueryStreamAsync(`HttpResponseStreamWriter` responseWriter, `string` fileFormat) | `Task` | Write query into the response stream. | 
| WriteSyncQueryResponseAsync(`JsonWriter` jsonWriter, `bool` isAuthorized, `bool` querySaved) | `Task` | Writes the response for SyncQuery request to JsonWriter.  Can be overrided in derived classes to add extra data to the respons |