---
title: EmptyQueryBuilderResult class
slug: api-reference-5x/korzh-easyquery-namespace/emptyquerybuilderresult-class
---


Represents a trivial implementation of QueryBuilderResult abstract class which always returns empty statement
```csharp
public class Korzh.EasyQuery.EmptyQueryBuilderResult
    : QueryBuilderResult

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetStatement() | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). |