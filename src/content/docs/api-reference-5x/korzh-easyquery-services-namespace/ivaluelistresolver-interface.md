---
title: IValueListResolver interface
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/ivaluelistresolver-interface
sidebar:
  order: 100
---

Represents a type used to get the list of values by some "list" value editor.
```csharp
public interface Korzh.EasyQuery.Services.IValueListResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | TryGetValues(`ListValueEditor` editor, `IEnumerable`1&` result) | Gets the list of values by the value editor specified in the parameter. |
