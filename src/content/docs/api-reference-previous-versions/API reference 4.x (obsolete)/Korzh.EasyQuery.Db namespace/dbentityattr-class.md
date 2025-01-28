---
title: DbEntityAttr class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Db namespace/dbentityattr-class
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
| `Boolean` | IsAggregate | Gets or sets a value indicating whether this attribute represents some aggregate column. | 
| `Boolean` | Quote | Gets or sets a value indicating whether corresponding field name should be quoted in result SQL statement. | 
| `TableList` | Tables | Gets the list of the tables used in this attribute. | 
| `Boolean` | UseAlias | Gets or sets a value indicating whether it's necessary to use alias for columns based on this attribute. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddParamsTo(`QueryParamList` prms) | Adds the parameters associated with some entity attribute into the list of query parameters (see <see cref="!:Korzh.EasyQuery.Query.Params" />. | 
| `Boolean` | CompareSqlName(`String` sqlName) | Returns true if SqlName passed in parameter equals to SqlName used for this property. Otherwise returns false. | 
| `void` | CopyFrom(`EntityAttr` attr) | Copies all attribute's properties from another entity attribute | 
| `String` | GetDataAttrFullExpr() | Gets a string that represents full expression of EntityAttr instance. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression which represents the attribute. | 
| `String` | GetSqlName(`DbQueryFormats` formats, `Boolean` includeTableName = True) | Gets the full SQL name which represents the attribute. | 
| `Boolean` | HasParams() | Determines whether this attribute has query parameters. | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the sub-nodes of entity attribute's node. | 
| `void` | OnModelAssignment() | Called when attribute is inserted into model. | 
| `void` | ProcessVirtualExpr() | Scans attribute's expression for new parameters, tables, etc | 
| `void` | SaveToJsonDict(`JsonDict` dict) | Saves attribute properties to Dictionary object (used for serialization to JSON). | 
| `void` | SaveXmlAttributes(`XmlWriter` writer) | Saves the attributes to XML writer. |