---
title: DbModelExtensions class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodelextensions-class
sidebar:
  order: 100
---

Contains several DbModel extensions
```csharp
public static class Korzh.EasyQuery.Db.DbModelExtensions

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FillByDataTable(<span style='color: blue'>this</span> [DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `DataTable` dataTable, `bool` createEntity) | `void` | Fills the [Korzh.EasyQuery.Db.DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) by database table represented by `System.Data.DataTable` object. | 
| FillByDbGate(<span style='color: blue'>this</span> [DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbGate](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) dbGate, [DbConnectionModelLoaderOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) options = <span style='color: blue'>null</span>) | `void` | Fills the model by database gate. | 
| LoadFromConnection(<span style='color: blue'>this</span> [DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `DbConnection` connection, [DbConnectionModelLoaderOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) options = <span style='color: blue'>null</span>) | `void` | Populates model by information from database connection. |
