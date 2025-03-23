---
title: ConstValueList class
slug: api-reference/easydata-core/easydata-namespace/constvaluelist-class
---


Represents list of availalbe values.  Each item contain the value itself and some caption representing this value.
```csharp
public class EasyData.ConstValueList
    : Collection<ConstValueItem>

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConstValueList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add(`string` id, `string` text) | `int` | Adds new item with the specified value and caption into the list. |