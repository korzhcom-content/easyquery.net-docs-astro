---
title: ColumnDescriptor struct
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/columndescriptor-struct
sidebar:
  order: 100
---

Contains descriptor for creating column.
```csharp
public struct Korzh.EasyQuery.ColumnDescriptor
    : IColumnDescriptor

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnDescriptor([EqExpression](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Creates an instance of <see cref="T:Korzh.EasyQuery.ColumnDescriptor"></see> | 
| ColumnDescriptor(`string` attrId, `string` funcId = <span style='color: blue'>null</span>) | `void` | Creates an instance of <see cref="T:Korzh.EasyQuery.ColumnDescriptor"></see> | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttrId | `string` | The attribute id. | 
| Caption | `string` | The caption. | 
| Expr | [EqExpression](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | The expression | 
| FuncId | `string` | The aggregate function Id | 
| Sorting | [SortDirection](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | The sort direction. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Empty | [ColumnDescriptor](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/columndescriptor-struct) | Gets the default empty column descriptor |
