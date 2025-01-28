---
title: QueryBuilderResult class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/querybuilderresult-class
---


Represents the result of query builder's work.
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
| `QueryBuilderResult` | Empty | Gets an empty query builder result. |