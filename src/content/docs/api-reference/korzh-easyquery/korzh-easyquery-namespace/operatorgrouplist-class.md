---
title: OperatorGroupList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgrouplist-class
---
Represents list of operator groups
```csharp
public class Korzh.EasyQuery.OperatorGroupList
    : Collection<OperatorGroup>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperatorGroupList(`OperatorGroup[]` groups) | `void` | Initializes a new instance of the `OperatorGroupList` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByName(`string` groupName) | [OperatorGroup](api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Finds the OperatorGroup by its name. |