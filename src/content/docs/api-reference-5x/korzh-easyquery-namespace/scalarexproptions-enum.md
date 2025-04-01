---
title: ScalarExprOptions enum
slug: api-reference-5x/korzh-easyquery-namespace/scalarexproptions-enum
sidebar:
  order: 100
---

Different options used during processing of scalar values
```csharp
public enum Korzh.EasyQuery.ScalarExprOptions
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Empty | Empty set of options | 
| `1` | CaseInsensative | We must apply Lower (or similar) function to result value to make any string comparision case-insensative | 
| `2` | Parameterized | All values will be converted into parameters | 
| `4` | Default | The default value | 
| `4` | Quoting | We need to consider quoting | 
| `8` | ProcessScalarMacros | For each found macro value we should run ProcessScalarMacro procedure  to format it properly according to the current settings |
