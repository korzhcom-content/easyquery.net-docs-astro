---
title: TextStorage class
slug: api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class
---

Static class which stores all text resources used in assembly
```csharp
public class Korzh.Utils.TextStorage

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TextStorage(`ResourceManager` nativeResources = <span style='color: blue'>null</span>) | `void` | Initializes a new instance of the [Korzh.Utils.TextStorage](//easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Get(`string` id) | `string` | Gets the string by its ID | 
| LoadFromFile(`string` path) | `void` | Loads text resources from file. | 
| LoadFromFileForCulture(`string` baseFileName, `CultureInfo` cultureInfo = <span style='color: blue'>null</span>, `string` fileExt = properties) | `void` | Loads resources from .properties like file for indicated culture. | 
| LoadFromResources(`ResourceManager` resManager) | `void` | Loads texts from ResourceManager object. | 
| LoadFromStream(`Stream` input) | `void` | Loads this [Korzh.Utils.TextStorage](//easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) object from `System.IO.Stream` object. | 
| LoadFromTextReader(`TextReader` reader) | `void` | Loads this [Korzh.Utils.TextStorage](//easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) object from `System.IO.TextReader` object. | 
| Put(`string` key, `string` value) | `void` | Adds new resource item with specified key and value. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetCurrentCulture() | `CultureInfo` | Returns current culture | 
| GetCurrentUICulture() | `CultureInfo` | Returns current UI culture |