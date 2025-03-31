---
title: EmptyQueryBuilderResult class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/emptyquerybuilderresult-class
---

Represents a trivial implementation of QueryBuilderResult abstract class which always returns empty statement
```csharp
public class Korzh.EasyQuery.EmptyQueryBuilderResult
    : QueryStatement

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EmptyQueryBuilderResult() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetStatement() | `string` | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). |