---
title: EasyQueryManagerLinq<T> class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class
sidebar:
  order: 100
---

Represents an implementation of [Korzh.EasyQuery.Services.EasyQueryManager](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyquerymanager-class)  which loads the model from some type and generates LINQ queries.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryManagerLinq<T>
    : EasyQueryManager

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Func<String, Object>` | ContextResolver | Gets or sets the context resolver - a function which returns some context object by the model ID. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IQueryable<TEntity>` | DynamicQuery(`IQueryable<TEntity>` source, `String` orderByProperty = <span style='color: blue'>null</span>, `Boolean` descending = False) |  | 
| `IEqResultSet` | ExecuteQueryCore(`JObject` options = <span style='color: blue'>null</span>) | The actual implemenation of ExecuteQuery function.  This method generates a LINQ query and executes over the context returned by the context resolver | 
| `IDataReader` | GetDataReader(`JObject` options = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Gets the data reader by query. This function is called from ExecuteQuery or ExportQueryResult. | 
| `IQueryBuilder` | GetQueryBuilderCore(`Query` query, `JObject` options) | Returns the query builder. In this particular kind of EasyQueryManager it will be an instance of LinqQueryBuilder. | 
| `IEqResultSet` | GetResultSetByQuery(`Query` query, `Object` context, `Type` resultType = <span style='color: blue'>null</span>, `JObject` options = <span style='color: blue'>null</span>) | Gets the result set by the query and some context (e.g. DbContext) object.  This method generates LINQ query, executes it over specified context and returns the result as DataSet. |
