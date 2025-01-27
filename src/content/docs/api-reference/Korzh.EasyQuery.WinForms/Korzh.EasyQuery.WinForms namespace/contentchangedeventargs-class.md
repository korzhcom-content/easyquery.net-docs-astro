---
title: ContentChangedEventArgs class
slug: api-reference/Korzh.EasyQuery.WinForms/Korzh.EasyQuery.WinForms namespace/contentchangedeventargs-class
---


Provides data for different content changing events in XElement descendants.
```csharp
public class Korzh.EasyQuery.WinForms.ContentChangedEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ContentChangedEventArgs(`bool` valueChanged, `bool` textChanged) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ContentChangedEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/contentchangedeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TextChanged | `bool` | Gets or sets a value indicating whether element's text was changed. | 
| ValueChanged | `bool` | Gets or sets a value indicating whether element's value was changed. |