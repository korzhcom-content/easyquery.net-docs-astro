---
title: AggrFunctionDescriptor struct
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunctiondescriptor-struct
sidebar:
  order: 100
---

Defines a structure that "describes" an aggregate function
```csharp
public struct Korzh.EasyQuery.AggrFunctionDescriptor

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AppliedTo | `DataType[]` | Gets or sets the list of data types this function can be applied to. | 
| Caption | `string` | Gets or sets the function's caption. | 
| Expr | `string` | Gets or sets the function's expression (usually a piece of SQL with {exprN} variables as parameters. | 
| Format | `string` | Gets or sets the function's display format.  It defines how the function will be represented in UI | 
| Id | `string` | Gets or sets the function ID (SUM, COUNT, etc). |
