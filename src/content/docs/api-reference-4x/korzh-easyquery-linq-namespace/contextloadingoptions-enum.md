---
title: ContextLoadingOptions enum
slug: api-reference-4x/korzh-easyquery-linq-namespace/contextloadingoptions-enum
sidebar:
  order: 100
---
# ContextLoadingOptions enum

Represents different options used during loading model from context
```csharp
public enum Korzh.EasyQuery.Linq.ContextLoadingOptions
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Default | The default set of options | 
| `1` | JoinUsingPrimitiveTypes | Try to join `System.Type`s using primitive type properties as foreign keys (such as OrderID). Navigation properties are used by default | 
| `2` | ScanOnlyQueryable | Scan only properties that implement IQueryable interface. By default all IEnumerable are used | 
| `4` | ProcessInheritance | Include ancestor's properties | 
| `8` | LeaveNonLinqOperators | Leave in loaded model the operators which are not supported in LINQ queries. |
