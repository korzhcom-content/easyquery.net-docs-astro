---
title: ValueEditorStore class
slug: api-reference/easydata-core/easydata-namespace/valueeditorstore-class
---
Represents the list of value editors which belongs to some DataModel object.  Implements the [EasyData.ValueEditorList](api-reference/easydata-core/easydata-namespace/valueeditorlist-class)
```csharp
public class EasyData.ValueEditorStore
    : ValueEditorList

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueEditorStore([MetaData](api-reference/easydata-core/easydata-namespace/metadata-class) model) | `void` | Initializes a new instance of the [EasyData.ValueEditorStore](api-reference/easydata-core/easydata-namespace/valueeditorstore-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [MetaData](api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the model. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ClearItems() | `void` | Removes all elements from the <see cref="T:System.Collections.ObjectModel.Collection`1"></see>. | 
| InsertItem(`int` index, [ValueEditor](api-reference/easydata-core/easydata-namespace/valueeditor-class) item) | `void` | Inserts an element into the <see cref="T:System.Collections.ObjectModel.Collection`1"></see> at the specified index. | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the <see cref="T:System.Collections.ObjectModel.Collection`1"></see>. |