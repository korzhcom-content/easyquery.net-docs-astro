---
title: ValidateValueEventArgs class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class
---
Provides data for ValidateElementValue event.
```csharp
public class Korzh.EasyQuery.WinForms.ValidateValueEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValidateValueEventArgs([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sourceElement, `string` value, `bool` accept) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValidateValueEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Accept | `bool` | Gets or sets a value indicating whether the [Korzh.EasyQuery.WinForms.ValidateValueEventArgs.Value](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class) is accepted. | 
| SourceElement | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Gets the source element which initiates the validation. | 
| Value | `string` | Gets or sets the value. |