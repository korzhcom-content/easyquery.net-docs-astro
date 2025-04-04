---
title: OperatorGroup class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class
sidebar:
  order: 100
---

Represents a group of operators
```csharp
public class Korzh.EasyQuery.OperatorGroup

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperatorGroup(`string` groupName, `DataType[]` appliedTypes) | `void` | Initializes a new instance of the `OperatorGroup` class. | 
| OperatorGroup(`string` groupName, [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) appliedTypes) | `void` | Initializes a new instance of the `OperatorGroup` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AppliedTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | Gets the list of applied types for this operator. | 
| Name | `string` | Gets or sets the name of the group. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. |
