---
title: TextStorageMap class
slug: api-reference-5x/korzh-utils-namespace/textstoragemap-class
sidebar:
  order: 100
---

Stores a map of [Korzh.Utils.TextStorage](/easyquery/docs/api-reference-5x/korzh-utils-namespace/textstorage-class) instanced.
```csharp
public class Korzh.Utils.TextStorageMap
    : Dictionary<String, TextStorage>, IDictionary<String, TextStorage>, ICollection<KeyValuePair<String, TextStorage>>, IEnumerable<KeyValuePair<String, TextStorage>>, IEnumerable, IDictionary, ICollection, IReadOnlyDictionary<String, TextStorage>, IReadOnlyCollection<KeyValuePair<String, TextStorage>>, ISerializable, IDeserializationCallback

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `TextStorage` | GetStorage(`String` storageId = <span style='color: blue'>null</span>) | Gets the current storage. | 
| `void` | ReloadNativeResources(`String` storageId = <span style='color: blue'>null</span>) | Reloads the specified storage by its ID. |
