---
title: DbQueryBuilder class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbquerybuilder-class
---


Lets you build SQL commands based on [Korzh.EasyQuery.Db.DbQuery](/api-reference-5x/korzh-easyquery-db-namespace/dbquery-class) object
```csharp
public abstract class Korzh.EasyQuery.Db.DbQueryBuilder
    : BaseQueryBuilder, IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | EscapeDef | contains escape symbol definition which will be added to the condition if necessary | 
| `SqlExtras` | Extras | Gets the [Korzh.EasyQuery.Db.SqlExtras](/api-reference-5x/korzh-easyquery-db-namespace/sqlextras-class) object which defines some extra clauses and options of the generated query. | 
| `DbQueryFormats` | Formats | Gets the [Korzh.EasyQuery.Db.DbQueryFormats](/api-reference-5x/korzh-easyquery-db-namespace/dbqueryformats-class) object in the parent query. | 
| `DbQuery` | Query | Gets the query object associated with the builder. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | AddWildSymbols(`Operator` op, `String` s) |  | 
| `QueryFormats` | CreateFormats() | Creates [Korzh.EasyQuery.Db.DbQueryFormats](/api-reference-5x/korzh-easyquery-db-namespace/dbqueryformats-class) object. |