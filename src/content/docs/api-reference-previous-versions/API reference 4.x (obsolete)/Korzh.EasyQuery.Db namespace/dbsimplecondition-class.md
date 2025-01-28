---
title: DbSimpleCondition class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Db namespace/dbsimplecondition-class
---


Represents simple condition in [Korzh.EasyQuery.Db.DbQuery](/api-reference-4x/korzh-easyquery-db-namespace/dbquery-class)
```csharp
public class Korzh.EasyQuery.Db.DbSimpleCondition
    : SimpleCondition, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | TypeName | Gets the name of the condition type.  The same as STypeName but works for one particular instance of SimpleCondition class. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EqExpression` | CreateValueExprByOperand(`Operand` opnd) | Creates the value expression by operand | 
| `Boolean` | GetHaving() | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL. | 
| `void` | GetUsedTables(`TableList` usedTables) | Returns list of tables used in condition. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the condition type used for saving to XML. |