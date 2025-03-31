---
title: DbEntityAttrExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbentityattrexpr-class
---

An [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) descendant which represents an attribute.
```csharp
public class Korzh.EasyQuery.Db.DbEntityAttrExpr
    : EntityAttrExpr, ISqlExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbEntityAttr` | Attribute | Gets or sets the attribute. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets the type of the expression. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `String` | Text | Gets the expression text. For this type it returns entity name + attribute caption. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.DbEntityAttrExpr.STypeName](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbentityattrexpr-class) property. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) descendants. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the SQL expression of the [Korzh.EasyQuery.EntityAttrExpr](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/entityattrexpr-class) object. | 
| `void` | GetUsedTables(`TableList` tables) | Add the tables used in this expression in the list. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) object from XML. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves the [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) object to XML writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |