---
title: LookupValueListResolver class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/lookupvaluelistresolver-class
sidebar:
  order: 100
---

Represents a special case of IValueListResolver which returns the list of values for the lookup fields.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](///easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.LookupValueListResolver
    : IValueListResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<ListItem>` | GetListForContext(`Object` context, `String` attrId) | Gets the list for the context type. | 
| `Boolean` | TryGetValues(`ListValueEditor` editor, `IEnumerable`1&` result) | Gets the list of values by the value editor specified in the parameter. |
