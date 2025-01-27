---
title: IColumnDescriptor interface
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/icolumndescriptor-interface
---


Contains descriptor for creating column.
```csharp
public interface Korzh.EasyQuery.IColumnDescriptor

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttrId | `string` | The attribute id. | 
| Caption | `string` | The caption. | 
| Expr | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | The expression | 
| FuncId | `string` | The aggregate function Id | 
| Sorting | [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | The sort direction. |