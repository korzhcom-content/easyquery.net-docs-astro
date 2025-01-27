---
title: ValueEditorEntry class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/valueeditorentry-class
---


Represents map between operators and value editors.
```csharp
public class Korzh.EasyQuery.ValueEditorEntry

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueEditorEntry() | `void` | Initializes a new instance of the [Korzh.EasyQuery.ValueEditorEntry](/api-reference/korzh-easyquery/korzh-easyquery-namespace/valueeditorentry-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Operators | [OperatorList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class) | Gets the list of operators the value editor can be used with. | 
| Type | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the data type the value editor can be used with. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Editor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets or sets the value editor. |