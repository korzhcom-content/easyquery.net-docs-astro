---
title: DbEntityAttr class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class
---
Base attribute of SQL entity
```csharp
public class Korzh.EasyQuery.Db.DbEntityAttr
    : EntityAttr

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| EntityPropName | `string` | Get or sets property name associated with the attribute (for models loaded from .edmx files) | 
| IsQuoted | `bool` | Gets or sets a value indicating whether corresponding field name should be quoted in result SQL statement. | 
| Tables | [TableList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) | Gets the list of the tables used in this attribute. | 
| UseAlias | `bool` | Gets or sets a value indicating whether it's necessary to use alias for columns based on this attribute. | 
| UseCustomFuncInOrderBy | `bool` | Gets or sets value indicating wether custom func shoulb be used in order by expression | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddParamsTo([QueryParamList](api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) prms) | `void` | Adds the parameters associated with some entity attribute into the list of query parameters (see [Korzh.EasyQuery.QueryParamList](api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class). | 
| CompareWithExpr(`string` expr) | `bool` | Compares attribute's expression with the one passed in the parameter. | 
| CopyFrom([EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Copies all attribute's properties from another entity attribute | 
| GetDataAttrFullExpr() | `string` | Gets a string that represents full expression of EntityAttr instance. | 
| GetSqlExpr([SqlFormats](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression which represents the attribute. Calls <see cref="M:Korzh.EasyQuery.Db.DbEntityAttr.GetSqlExprWithoutCustomFunc(Korzh.EasyQuery.Db.SqlFormats)"></see> | 
| GetSqlExprWithoutCustomFunc([SqlFormats](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression which represents the attribute ignoring <see cref="P:Korzh.EasyQuery.EntityAttr.CustomFunc"></see> property | 
| GetSqlName([SqlFormats](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats, `bool` includeTableName = True) | `string` | Gets the full SQL name which represents the attribute. | 
| HasParams() | `bool` | Determines whether this attribute has query parameters. | 
| OnModelAssignment() | `void` | Called when attribute is inserted into model. | 
| ProcessVirtualExpr() | `void` | Scans attribute's expression for new parameters, tables, etc | 
| ReadPropertyFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one attribute's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes attribute's properties to JSON (asynchronous way). |