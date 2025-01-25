---
title: EasyQueryManagerLinq<T> class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class
---
Represents an implementation of [Korzh.EasyQuery.Services.EasyQueryManager](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)  which loads the model from some type and generates LINQ queries.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryManagerLinq<T>
    : EasyQueryManager

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryManagerLinq() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerLinq`1](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class) class. | 
| EasyQueryManagerLinq([EasyQueryOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerLinq`1](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class) class. | 
| EasyQueryManagerLinq([EasyQueryOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerLinq`1](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ContextResolver | `Func`&lt;`string`, `object`&gt; | Gets or sets the context resolver - a function which returns some context object by the model ID. | 
| QueryBuilder | [LinqQueryBuilder](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqquerybuilder-class) | Returns QueryBuilder associated with current Query | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateQueryBuilderCore() | [IQueryBuilder](api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) | Returns the query builder. In this particular kind of EasyQueryManager it will be an instance of LinqQueryBuilder. | 
| CreateResultSet([ResultSetOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) options = <span style='color: blue'>null</span>) | [EasyObjectResultSet](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyobjectresultset-class) | Creates result set based on format | 
| DynamicQuery(`IQueryable`&lt;`TEntity`&gt; source, `string` orderByProperty = <span style='color: blue'>null</span>, `bool` descending = False) | `IQueryable`&lt;`TEntity`&gt; |  | 
| FetchDataCoreAsync() | `Task`&lt;[IEqResultSet](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | The actual implemenation of [Korzh.EasyQuery.Services.EasyQueryManagerLinq`1.GetResultSetAsync(System.Object,Korzh.EasyQuery.Services.ResultSetOptions)](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyquerymanagerlinq-t--class) function.  This method generates a LINQ query and executes over the context returned by the context resolver | 
| GetResultSetAsync(`object` context, [ResultSetOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) options = <span style='color: blue'>null</span>) | `Task`&lt;[IEqResultSet](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | Gets the result set by the query and some context (e.g. DbContext) object.  This method generates LINQ query, executes it over specified context and returns the result as DataSet. |