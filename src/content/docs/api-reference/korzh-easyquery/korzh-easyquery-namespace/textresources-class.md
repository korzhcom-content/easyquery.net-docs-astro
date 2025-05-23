---
title: TextResources class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/textresources-class
sidebar:
  order: 100
---

Manages texts for all EasyQuery Controls visual objects
```csharp
public static class Korzh.EasyQuery.TextResources

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Get(`string` code) | `string` | Gets a resource string by its code. | 
| GetTexts(`string` storageID = <span style='color: blue'>null</span>) | [TextStorage](/easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets current [Korzh.Utils.TextStorage](/easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) object that contains textual resources for this assembly. | 
| LoadFromFile(`string` path, [TextStorage](/easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) storage = <span style='color: blue'>null</span>) | `void` | Loads the resources from .properties file into the default TextStorage object | 
| LoadFromFileForCulture(`string` baseFileName, `CultureInfo` cultureInfo = <span style='color: blue'>null</span>, `string` fileExt = properties) | `void` | Loads the resources from .properties file into the default TextStorage object. The name of the .properties file is based on the culture for current thread. | 
| LoadFromResources(`ResourceManager` resManager) | `void` | Loads texts from resources into the default TextStorage. | 
| LoadFromStream(`Stream` stream) | `void` | Loads resources from a stream into the default TextStorage object | 
| Put(`string` code, `string` value) | `void` | Sets the value of resource string by its code. | 
| ReloadNativeResources(`string` storageId = <span style='color: blue'>null</span>) | `void` | Reloads the resources for specified storage ID. If the ID is not indicated - load the resource for default TextStorage object |
