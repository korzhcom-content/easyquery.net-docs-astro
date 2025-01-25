---
title: MacButton class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class
---
The class that defines the flat MacOs-like button.
```csharp
public class Korzh.EasyQuery.WinForms.MacButton
    : Button

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MacButton() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.MacButton](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ActiveBodyColor | `Color` | Gets or sets the color of the button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stIn](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ActiveBorderColor | `Color` | Gets or sets the color of the border when the button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stIn](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| BorderWidth | `int` | Gets or sets the width of the border. | 
| ClickBodyColor | `Color` | Gets or sets the color of the button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stClick](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ClickBorderColor | `Color` | Gets or sets the color of the border when the button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stClick](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| InactiveBodyColor | `Color` | Gets or sets the color of the button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stNotIn](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| InactiveBorderColor | `Color` | Gets or sets the color of the border when the button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stNotIn](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| MacStyle | `bool` | Gets or sets a value indicating whether [standard button]. | 
| Rounded | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.MacButton](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) is displayed as ellipse in contrast to rectangle. | 
| RoundRadius | `int` | Gets or sets the round radius. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnClick(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnClick(System.EventArgs)` method.  event. | 
| OnDragEnter(`DragEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnDragEnter(System.Windows.Forms.DragEventArgs)` method. | 
| OnDragLeave(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnDragLeave(System.EventArgs)` method. | 
| OnMouseDown(`MouseEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnMouseDown(System.Windows.Forms.MouseEventArgs)` method. | 
| OnMouseEnter(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnMouseEnter(System.EventArgs)` method. | 
| OnMouseLeave(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnMouseLeave(System.EventArgs)` method. | 
| OnMouseUp(`MouseEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnMouseUp(System.Windows.Forms.MouseEventArgs)` method. | 
| OnPaint(`PaintEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnPaint(System.Windows.Forms.PaintEventArgs)` method. | 
| OnPaintBackground(`PaintEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnPaintBackground(System.Windows.Forms.PaintEventArgs)` method. | 
| OnResize(`EventArgs` e) | `void` | Raises the `System.Windows.Forms.Control.Resize` event. |