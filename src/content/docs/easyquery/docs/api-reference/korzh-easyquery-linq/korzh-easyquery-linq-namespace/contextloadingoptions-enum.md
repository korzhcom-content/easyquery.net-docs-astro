---
title: ContextLoadingOptions enum
slug: easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/contextloadingoptions-enum
---


Represents different options used during loading model from context
```csharp
public enum Korzh.EasyQuery.Linq.ContextLoadingOptions
    : Enum

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Default | `0` | The default set of options | 
| JoinUsingPrimitiveTypes | `1` | Try to join `System.Type`s using primitive type properties as foreign keys (such as OrderID). Navigation properties are used by default | 
| ScanOnlyQueryable | `2` | Scan only properties that implement IQueryable interface. By default all IEnumerable are used | 
| ProcessInheritance | `4` | Include ancestor's properties | 
| LeaveNonLinqOperators | `8` | Leave in loaded model the operators which are not supported in LINQ queries. |