---
title: ListRequestEventArgs class
slug: api-reference/Korzh.EasyQuery.Wpf/Korzh.EasyQuery.Wpf namespace/listrequesteventargs-class
---


Provides data for ListRequest event.
```csharp
public class Korzh.EasyQuery.Wpf.ListRequestEventArgs
    : RoutedEventArgs

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListRequestEventArgs(`string` listName, `string` data, [ValueItemList](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitemlist-class) listItems, [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, `RoutedEvent` routedEvent) | `void` | Initializes a new instance of the `ListRequestEventArgs` class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `string` | Gets the data associated with this object. | 
| ListItems | [ValueItemList](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitemlist-class) | Gets or sets the requested list of items. | 
| ListName | `string` | Gets the name of the list. | 
| SQL | `string` | Gets the text of SQL SELECT statement. |