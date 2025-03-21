---
title: SqlExtraClauses class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/sqlextraclauses-class
---


Represents different extra clauses of SELECT query.
```csharp
public class Korzh.EasyQuery.Db.SqlExtraClauses

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LazyJoins | Gets or sets a value indicating whether "lazy outer joins" scheme is used.  If it is <c>true</c>[Korzh.EasyQuery.Db.SqlQueryBuilder](/api-reference-4x/korzh-easyquery-db-namespace/sqlquerybuilder-class) will "delay" outer joins and apply them only when all inner joins have been made.  Such behaviour will allow to get more records in result set. | 
| `String` | LimitClause | Gets or sets the content of LIMIT clause in result SQL statement | 
| `Boolean` | SelectDistinct | Gets or sets a value indicating whether SELECT clause must contain DISTINCT option. | 
| `String` | SelectTop | Gets or sets the content of TOP command in SELECT clause. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`SqlExtraClauses` ecc) |  | 
| `void` | LoadFromJsonDict(`JsonDict` clauseDict) | Loads DbOptions from the IDictionary&lt;string, object&gt; object.  Used for deserialization from JSON | 
| `void` | LoadOptionsFromXmlReader(`XmlReader` reader) |  | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` nodeName) |  | 
| `void` | SetClauseByName(`String` propName, `Object` propValue) | Sets one property according to its name and value. |