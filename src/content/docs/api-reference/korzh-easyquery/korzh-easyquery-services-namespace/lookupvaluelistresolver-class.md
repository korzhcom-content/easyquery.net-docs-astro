---
title: LookupValueListResolver class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/lookupvaluelistresolver-class
---
Represents a special case of IValueListResolver which returns the list of values for the lookup fields.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.LookupValueListResolver
    : IValueListResolver

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LookupValueListResolver(`Func`&lt;`string`, `object`&gt; contextResolver) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.LookupValueListResolver](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/lookupvaluelistresolver-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetListForContext(`object` context, `string` attrId) | `IEnumerable`&lt;[ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt; | Gets the list for the context type. | 
| TryGetValues([ListRequestOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options, `IEnumerable`1&` result) | `bool` | Gets the list of values by the value editor specified in the parameter. |