---
title: SqlExtras class
slug: api-reference-5x/korzh-easyquery-db-namespace/sqlextras-class
sidebar:
  order: 100
---

Represents different extra clauses of SELECT query.
```csharp
public class Korzh.EasyQuery.Db.SqlExtras

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsParamMode | Gets or sets a value indicating whether we should replace all values in conditions with parameters during SQL generation. | 
| `Boolean` | LazyJoins | Gets or sets a value indicating whether "lazy outer joins" scheme is used.  If it is <c>true</c>[Korzh.EasyQuery.Db.SqlQueryBuilder](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/sqlquerybuilder-class) will "delay" outer joins and apply them only when all inner joins have been made.  Such behaviour will allow to get more records in result set. | 
| `String` | LimitClause | Gets or sets the content of LIMIT clause in result SQL statement | 
| `QueryParamList` | Parameters |  | 
| `Boolean` | SelectDistinct | Gets or sets a value indicating whether SELECT clause must contain DISTINCT option. | 
| `String` | SelectTop | Gets or sets the content of TOP command in SELECT clause. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`SqlExtras` ecc) |  | 
| `void` | LoadOptionsFromXmlReader(`XmlReader` reader) |  | 
| `void` | ReadFromJson(`JsonReader` reader) | Read the SQL extras from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Read the SQL extras from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` nodeName) |  | 
| `void` | SetClauseByName(`String` propName, `Object` propValue) | Sets one property according to its name and value. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the content of SqlExtras object to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the content of SqlExtras object to JSON (asynchronous way). |
