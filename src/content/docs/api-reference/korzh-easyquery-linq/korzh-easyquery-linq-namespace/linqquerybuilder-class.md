---
title: LinqQueryBuilder class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqquerybuilder-class
---
Builds Linq expressions
```csharp
public class Korzh.EasyQuery.Linq.LinqQueryBuilder
    : IQueryBuilder

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LinqQueryBuilder([Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` | This constructor overload allows only Build generic method to be used in building queries because no context is specified and required for it | 
| LinqQueryBuilder(`object` context, [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` | This constructor overload allows only Build generic method to be used in building queries because no context is specified and required for it | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CanBuild | `bool` | Determines whether there is enough information to build the query | 
| Options | [QueryBuilderOptions](api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) | Gets or sets the builder's options. | 
| Query | [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the query this builder is defined for | 
| Result | [LinqStatement](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqstatement-class) | Gets the result object | 
| SelectDistinct | `bool` | Gets or sets a value indicating whether the result set must not contain duplicates. | 
| Skip | `int` | Gets or sets the number of items that will be skipped from result set. | 
| StatementType | `Type` | Type of result set | 
| Take | `int` | Gets or sets the number of items that will be taken from result set. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Builds the query. | 
| Build() | `BuilderResult`&lt;`T`&gt; | Builds the query. | 
| BuildIEnumerable(`object` context) | `IEnumerable` | Builds IEnumerable expression for use in Linq2Objects scenarios, in other cases consider using Build() method for building IQueryable expression | 
| ToString() | `string` | Returns a `System.String` that represents this instance. |