---
title: TextStorage class
slug: api-reference-5x/korzh-utils-namespace/textstorage-class
sidebar:
  order: 100
---

Static class which stores all text resources used in assembly
```csharp
public class Korzh.Utils.TextStorage

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Get(`String` id) | Gets the string by its ID | 
| `void` | LoadFromFile(`String` path) | Loads text resources from file. | 
| `void` | LoadFromFileForCulture(`String` baseFileName, `CultureInfo` cultureInfo = <span style='color: blue'>null</span>, `String` fileExt = properties) | Loads resources from .properties like file for indicated culture. | 
| `void` | LoadFromResources(`ResourceManager` resManager) | Loads texts from ResourceManager object. | 
| `void` | LoadFromStream(`Stream` input) | Loads this [Korzh.Utils.TextStorage](///easyquery/docs/api-reference-5x/korzh-utils-namespace/textstorage-class) object from `System.IO.Stream` object. | 
| `void` | LoadFromTextReader(`TextReader` reader) | Loads this [Korzh.Utils.TextStorage](///easyquery/docs/api-reference-5x/korzh-utils-namespace/textstorage-class) object from `System.IO.TextReader` object. | 
| `void` | Put(`String` key, `String` value) | Adds new resource item with specified key and value. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `CultureInfo` | GetCurrentCulture() | Returns current culture | 
| `CultureInfo` | GetCurrentUICulture() | Returns current UI culture |
