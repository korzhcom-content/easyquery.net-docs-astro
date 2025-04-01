---
title: TextStorageMap class
slug: api-reference/korzh-easyquery/korzh-utils-namespace/textstoragemap-class
sidebar:
  order: 100
---

Stores a map of [Korzh.Utils.TextStorage](///easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) instanced.
```csharp
public class Korzh.Utils.TextStorageMap
    : Dictionary<string, TextStorage>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TextStorageMap(`string` resourceName, `Assembly` assembly = <span style='color: blue'>null</span>) | `void` | Initializes a new instance of the [Korzh.Utils.TextStorageMap](///easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstoragemap-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetStorage(`string` storageId = <span style='color: blue'>null</span>) | [TextStorage](///easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets the current storage. | 
| ReloadNativeResources(`string` storageId = <span style='color: blue'>null</span>) | `void` | Reloads the specified storage by its ID. |
