---
title: SqlExtras class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class
---
Represents different extra clauses of SELECT query.
```csharp
public class Korzh.EasyQuery.Db.SqlExtras

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlExtras() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| LazyJoins | `bool` | Gets or sets a value indicating whether "lazy outer joins" scheme is used.  If it is <c>true</c>[Korzh.EasyQuery.Db.SqlQueryBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) will "delay" outer joins and apply them only when all inner joins have been made.  Such behaviour will allow to get more records in result set. | 
| LimitClause | `string` | Gets or sets the content of LIMIT clause in result SQL statement | 
| SelectDistinct | `bool` | Gets or sets a value indicating whether SELECT clause must contain DISTINCT option. | 
| SelectTop | `string` | Gets or sets the content of TOP command in SELECT clause. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Read the SQL extras from JSON (asynchronous way). | 
| SetClauseByName(`string` propName, `object` propValue) | `void` | Sets one property according to its name and value. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the content of SqlExtras object to JSON (asynchronous way). |