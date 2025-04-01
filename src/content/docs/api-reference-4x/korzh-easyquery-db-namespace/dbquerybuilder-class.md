---
title: DbQueryBuilder class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbquerybuilder-class
sidebar:
  order: 100
---

Lets you build SQL commands based on [Korzh.EasyQuery.Db.DbQuery](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbquery-class) object
```csharp
public abstract class Korzh.EasyQuery.Db.DbQueryBuilder
    : BaseQueryBuilder, IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | EscapeDef | contains escape symbol definition which will be added to the condition if necessary | 
| `SqlExtraClauses` | ExtraClauses | Gets the [Korzh.EasyQuery.Db.SqlExtraClauses](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/sqlextraclauses-class) object which defines some extra clauses of generated query. | 
| `DbQueryFormats` | Formats | Gets the [Korzh.EasyQuery.Db.DbQueryFormats](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object in the parent query. | 
| `DbQuery` | Query | Gets the query object associated with the builder. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | AddWildSymbols(`Operator` op, `String` s) |  | 
| `QueryFormats` | CreateQueryFormats() | Creates [Korzh.EasyQuery.Db.DbQueryFormats](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object. |
