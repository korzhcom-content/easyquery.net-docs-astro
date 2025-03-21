---
title: QueryBuilderResult class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/querybuilderresult-class
---


Represents the result of query builder work.
```csharp
public abstract class Korzh.EasyQuery.QueryBuilderResult

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryParamList` | Params | Gets the list of parameters used in generated SQL statement. | 
| `String` | Statement | Gets the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetStatement() | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 
| `String` | ToString() | Returns a `System.String` that represents this instance. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | Empty |  |