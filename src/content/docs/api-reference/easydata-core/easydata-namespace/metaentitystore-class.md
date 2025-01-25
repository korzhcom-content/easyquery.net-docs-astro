---
title: MetaEntityStore class
slug: api-reference/easydata-core/easydata-namespace/metaentitystore-class
---
Represents storage of entities
```csharp
public class EasyData.MetaEntityStore
    : MetaEntityList

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MetaEntityStore([MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) parentEntity) | `void` | Initializes a new instance of the `EntityStore` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the model. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| OnEntityInsertion([MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) entity, `int` index) | `void` | Called on entity's insertion. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of entities from JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the list of entities to JSON (asynchronous way). |