---
title: DbConnectionModelLoader class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/dbconnectionmodelloader-class
---
Represents a IModelLoader implementation which allows to load the model directly from a connection (using DB meta data)
```csharp
public class Korzh.EasyQuery.Services.DbConnectionModelLoader
    : IModelLoader

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbConnectionModelLoader(`DbConnection` connection) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DbConnectionModelLoader](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) class. | 
| DbConnectionModelLoader(`DbConnection` connection, [DbConnectionModelLoaderOptions](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DbConnectionModelLoader](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadModelAsync([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model from the connection passed in the loader's constructor.  NB: The model ID is not actually taking into account. |