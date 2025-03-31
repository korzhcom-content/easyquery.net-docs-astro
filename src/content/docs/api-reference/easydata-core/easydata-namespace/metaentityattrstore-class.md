---
title: MetaEntityAttrStore class
slug: api-reference/easydata-core/easydata-namespace/metaentityattrstore-class
---

Represents entity attributes storage associated with a particular entity.
```csharp
public class EasyData.MetaEntityAttrStore
    : MetaEntityAttrList

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MetaEntityAttrStore([MetaEntity](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) entity) | `void` | Initializes a new instance of the `EntityAttrStore` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [MetaData](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the DataModel object this entity attribute belongs to | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [MetaEntityAttr](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| OnEntityAttrInsertion([MetaEntityAttr](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) entityAttr, `int` index) | `void` | Called when some attribute is inserted to the list. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` |  | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` |  |