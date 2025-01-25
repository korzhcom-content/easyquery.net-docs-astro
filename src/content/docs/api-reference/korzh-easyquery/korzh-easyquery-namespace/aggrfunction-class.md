---
title: AggrFunction class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class
---
Represents aggregate function
```csharp
public class Korzh.EasyQuery.AggrFunction

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AppliedTo | `DataType[]` | Gets or sets the list of types this function ca be applied to. | 
| Caption | `string` | Gets or sets the caption of aggregate function. | 
| DisplayFormat | `string` | Gets or sets the display format of aggregate function. | 
| Enabled | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.AggrFunction](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class) is enabled. | 
| Id | `string` | Gets the function ID (e.g. SUM or COUNT DISTINCT) | 
| IsDefault | `bool` | Gets a value indicating whether this function is default. | 
| MainText | `string` | Gets the main part of function's DisplayFormat (this text will be shown as link in query columns panel) | 
| ParamCount | `int` | Gets the number of parameters which are taken by the aggregate function. | 
| SqlExpr | `string` | Gets the function expression used in SQL expressions (e.g. SUM({arg}) or COUNT(DISTINCT {arg}) ) |