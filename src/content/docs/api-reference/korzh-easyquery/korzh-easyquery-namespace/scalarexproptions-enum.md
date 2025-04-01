---
title: ScalarExprOptions enum
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/scalarexproptions-enum
sidebar:
  order: 100
---

Different options used during processing of scalar values
```csharp
public enum Korzh.EasyQuery.ScalarExprOptions
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Empty | `0` | Empty set of options | 
| CaseInsensative | `1` | We must apply Lower (or similar) function to result value to make any string comparision case-insensative | 
| Parameterized | `2` | All values will be converted into parameters | 
| Quoting | `4` | We need to consider quoting | 
| Default | `4` | The default value | 
| ProcessScalarMacros | `8` | For each found macro value we should run ProcessScalarMacro procedure  to format it properly according to the current settings |
