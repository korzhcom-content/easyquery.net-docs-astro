---
title: ScalarExprOptions enum
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/scalarexproptions-enum
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