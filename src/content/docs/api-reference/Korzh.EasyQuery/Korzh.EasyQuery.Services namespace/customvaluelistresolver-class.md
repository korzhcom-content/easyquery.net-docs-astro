---
title: CustomValueListResolver class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery.Services namespace/customvaluelistresolver-class
---


Class CustomValueListResolver.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.CustomValueListResolver
    : IValueListResolver

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomValueListResolver(`Func`&lt;[ListRequestOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class), `IEnumerable`&lt;[ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt;&gt; customResolver) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.CustomValueListResolver](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/customvaluelistresolver-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| TryGetValues([ListRequestOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options, `IEnumerable`1&` list) | `bool` | Gets the list of values for some ListValueEditor.  A return value indicates whether the operation succeeded. |