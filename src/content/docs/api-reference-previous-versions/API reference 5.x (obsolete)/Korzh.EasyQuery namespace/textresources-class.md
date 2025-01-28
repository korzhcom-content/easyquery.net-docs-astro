---
title: TextResources class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/textresources-class
---


Manages texts for all EasyQuery Controls visual objects
```csharp
public static class Korzh.EasyQuery.TextResources

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Get(`String` code) | Gets a resource string by its code. | 
| `TextStorage` | GetTexts(`String` storageID = <span style='color: blue'>null</span>) | Gets current [Korzh.Utils.TextStorage](/api-reference-5x/korzh-utils-namespace/textstorage-class) object that contains textual resources for this assembly. | 
| `void` | LoadFromFile(`String` path, `TextStorage` storage = <span style='color: blue'>null</span>) | Loads the resources from .properties file into the default TextStorage object | 
| `void` | LoadFromFileForCulture(`String` baseFileName, `CultureInfo` cultureInfo = <span style='color: blue'>null</span>, `String` fileExt = properties) | Loads the resources from .properties file into the default TextStorage object. The name of the .properties file is based on the culture for current thread. | 
| `void` | LoadFromResources(`ResourceManager` resManager) | Loads texts from resources into the default TextStorage. | 
| `void` | LoadFromStream(`Stream` stream) | Loads resources from a stream into the default TextStorage object | 
| `void` | Put(`String` code, `String` value) | Sets the value of resource string by its code. | 
| `void` | ReloadNativeResources(`String` storageId = <span style='color: blue'>null</span>) | Reloads the resources for specified storage ID. If the ID is not indicated - load the resource for default TextStorage object |