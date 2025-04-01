---
title: DbEntityAttr class
slug: api-reference-5x/korzh-easyquery-db-namespace/dbentityattr-class
sidebar:
  order: 100
---

Base attribute of SQL entity
```csharp
public class Korzh.EasyQuery.Db.DbEntityAttr
    : EntityAttr, IComparable<EntityAttr>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | EntityPropName | Get or sets property name associated with the attribute (for models loaded from .edmx files) | 
| `Boolean` | IsQuoted | Gets or sets a value indicating whether corresponding field name should be quoted in result SQL statement. | 
| `TableList` | Tables | Gets the list of the tables used in this attribute. | 
| `Boolean` | UseAlias | Gets or sets a value indicating whether it's necessary to use alias for columns based on this attribute. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddParamsTo(`QueryParamList` prms) | Adds the parameters associated with some entity attribute into the list of query parameters (see [Korzh.EasyQuery.QueryParamList](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryparamlist-class). | 
| `Boolean` | CompareWithExpr(`String` expr) | Compares attribute's expression with the one passed in the parameter. | 
| `void` | CopyFrom(`EntityAttr` attr) | Copies all attribute's properties from another entity attribute | 
| `String` | GetDataAttrFullExpr() | Gets a string that represents full expression of EntityAttr instance. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression which represents the attribute. | 
| `String` | GetSqlName(`DbQueryFormats` formats, `Boolean` includeTableName = True) | Gets the full SQL name which represents the attribute. | 
| `Boolean` | HasParams() | Determines whether this attribute has query parameters. | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the sub-nodes of entity attribute's node. | 
| `void` | OnModelAssignment() | Called when attribute is inserted into model. | 
| `void` | ProcessVirtualExpr() | Scans attribute's expression for new parameters, tables, etc | 
| `void` | ReadPropertyFromJson(`JsonReader` reader, `String` propName) | Reads one attribute's property from JSON. | 
| `Task` | ReadPropertyFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one attribute's property from JSON (asynchronous way). | 
| `void` | SaveXmlAttributes(`XmlWriter` writer) | Saves the attributes to XML writer. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes attribute's properties to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes attribute's properties to JSON (asynchronous way). |
