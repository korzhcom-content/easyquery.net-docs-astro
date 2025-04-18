---
title: OperatorList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class
sidebar:
  order: 100
---

Represents list of operators.
```csharp
public class Korzh.EasyQuery.OperatorList
    : Collection<Operator>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperatorList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddByIDs([DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` ids) | `void` | Adds opereators by theirs IDs stored in comma-delimited string. | 
| CopyFrom([OperatorList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class) operators) | `void` | Copies operators from another list. | 
| FindById(`string` opid) | [Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Finds operator by its ID. | 
| FindByID(`string` opid) | [Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Finds operator by its ID. | 
| IndexById(`string` opid) | `int` | Find operator's index by ID. | 
| RemoveByIDs([DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` ids) | `void` | Removes opereators by theirs IDs stored in comma-delimited string. |
