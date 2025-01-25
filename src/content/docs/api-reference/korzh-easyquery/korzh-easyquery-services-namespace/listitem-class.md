---
title: ListItem class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class
---
Represents one item in lists returned as response for GetValueList request
```csharp
public class Korzh.EasyQuery.Services.ListItem

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListItem(`string` id, `string` text, `IEnumerable`&lt;[ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt; items) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class) class. | 
| ListItem(`string` id, `string` text) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class) class. | 
| ListItem(`string` idAndText) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| id | `string` | Gets or sets the identifier. | 
| items | `IEnumerable`&lt;[ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt; | Gets or sets the list of sub-items for the current item. | 
| text | `string` | Gets or sets the text. |