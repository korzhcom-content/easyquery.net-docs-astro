---
title: CustomValueListResolver class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/customvaluelistresolver-class
sidebar:
  order: 100
---

Class CustomValueListResolver.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.CustomValueListResolver
    : IValueListResolver

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomValueListResolver(`Func`&lt;[ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class), `IEnumerable`&lt;[ListItem](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt;&gt; customResolver) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.CustomValueListResolver](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/customvaluelistresolver-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| TryGetValues([ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options, `IEnumerable`1&` list) | `bool` | Gets the list of values for some ListValueEditor.  A return value indicates whether the operation succeeded. |
