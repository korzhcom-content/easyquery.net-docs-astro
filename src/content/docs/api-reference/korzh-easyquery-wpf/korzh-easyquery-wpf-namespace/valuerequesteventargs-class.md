---
title: ValueRequestEventArgs class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valuerequesteventargs-class
---
Provides data for ValueRequest event.
```csharp
public class Korzh.EasyQuery.Wpf.ValueRequestEventArgs
    : RoutedEventArgs

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueRequestEventArgs([Condition](api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, `string` value, `string` text, `string` data, `RoutedEvent` routedEvent) | `void` | Initializes a new instance of the `ValueRequestEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets or sets the condition asssociated with current row in query panel | 
| Data | `string` | Gets the data associated with corresponding custom value editor. | 
| Text | `string` | Gets or sets the text which will be shown to user. | 
| Value | `string` | Gets or sets the value. |