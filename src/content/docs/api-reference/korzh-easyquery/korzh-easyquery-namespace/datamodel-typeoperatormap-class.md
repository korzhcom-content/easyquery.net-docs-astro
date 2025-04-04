---
title: DataModel.TypeOperatorMap class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-typeoperatormap-class
sidebar:
  order: 100
---

Represents a map between the types and operators.
```csharp
public class Korzh.EasyQuery.DataModel.TypeOperatorMap
    : Collection<TypeOperatorEntry>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TypeOperatorMap() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByType([DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) type) | [DataModel.TypeOperatorEntry](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-typeoperatorentry-class) | Returns the first entry that contains specified type in its Types list. | 
| IndexByType([DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) type) | `int` | Returns index of the first entry that contains specified type in its Types list. |
