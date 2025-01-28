---
title: ExportOptions class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Services namespace/exportoptions-class
---


Represents different options for exporting operations
```csharp
public class Korzh.EasyQuery.Services.ExportOptions

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ContentType | Gets or sets the type of the content. | 
| `String` | ExportType | Gets or sets the type of the export. | 
| `String` | FileName | Gets or sets the name of the file which we will export our result to. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads exporting options from IDictionary object. Used for deserializaiton from JSON. |