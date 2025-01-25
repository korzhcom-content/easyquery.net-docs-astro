---
title: IQueryBuilder interface
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface
---
Interface IQueryBuilder - represents general-purpose query builder
```csharp
public interface Korzh.EasyQuery.IQueryBuilder

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Options | [QueryBuilderOptions](api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) | Gets or sets the builder's options. | 
| Query | [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the query this builder is defined for | 
| Result | [IQueryStatement](api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) | The query builder result. | 
| StatementType | `Type` | Gets the the result type. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Gets the query statement.  It could be some SQL statement or and an IQueryable object created by LINQ query builder. |