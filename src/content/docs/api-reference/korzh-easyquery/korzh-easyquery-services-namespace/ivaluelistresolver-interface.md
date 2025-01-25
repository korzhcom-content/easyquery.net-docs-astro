---
title: IValueListResolver interface
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface
---
Represents a type used to get the list of values by some "list" value editor.
```csharp
public interface Korzh.EasyQuery.Services.IValueListResolver

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| TryGetValues([ListRequestOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options, `IEnumerable`1&` result) | `bool` | Gets the list of values by the value editor specified in the parameter. |