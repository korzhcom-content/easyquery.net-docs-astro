---
title: CustomSqlColumnDescriptor struct
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/customsqlcolumndescriptor-struct
---


Contains descriptor to create custom sql expression column
```csharp
public struct Korzh.EasyQuery.Db.CustomSqlColumnDescriptor
    : IColumnDescriptor

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomSqlColumnDescriptor(`string` sql) | `void` | Creates an instance of <see cref="T:Korzh.EasyQuery.ColumnDescriptor"></see> | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttrId | `string` | The attribute id. | 
| Caption | `string` | The caption. | 
| Expr | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | The expression | 
| FuncId | `string` | The aggregate function Id | 
| Sorting | [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | The sort direction. | 
| Sql | `string` | The SQL |