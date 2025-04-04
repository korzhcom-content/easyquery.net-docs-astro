---
title: QueryStatement class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/querystatement-class
sidebar:
  order: 100
---

Represents the result of query builder's work.
```csharp
public abstract class Korzh.EasyQuery.QueryStatement
    : IQueryStatement

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryStatement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryStatement](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querystatement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Params | [QueryParamList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | Gets the list of parameters used in generated SQL statement. | 
| Statement | `string` | Gets the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetStatement() | `string` | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 
| ToString() | `string` | Returns a `System.String` that represents this instance. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Empty | [QueryStatement](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querystatement-class) | Gets an empty query builder result. |
