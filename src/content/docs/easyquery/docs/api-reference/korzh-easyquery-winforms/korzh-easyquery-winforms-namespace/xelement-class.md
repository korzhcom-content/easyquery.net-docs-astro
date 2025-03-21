---
title: XElement class
slug: easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class
---


The basic abstract class for elements of a row in [Korzh.EasyQuery.WinForms.XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class).
```csharp
public abstract class Korzh.EasyQuery.WinForms.XElement
    : IDisposable

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AllowList | `bool` | Gets or sets a value indicating whether this row element allows list values. | 
| CanFocus | `bool` | Gets a value indicating whether the element can receive focus. | 
| CanSelect | `bool` | Gets a value indicating whether the element can be selected. | 
| CData | `object` | Gets or sets the custom data associated with element. | 
| Data | `object` | Gets or sets the object associated with element. | 
| Dropped | `bool` | Gets a value indicating whether this [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) is dropped. | 
| ElementControl | `Control` | Gets the control that implement element's interaction with end user. | 
| EmptyValueText | `string` | Gets or sets the text should be displayed if [Korzh.EasyQuery.WinForms.XElement.Value](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) is empty. | 
| Font | `Font` | Gets or sets the font. | 
| NeedTextAdjustingOnApplyFormats | `bool` | Gets or sets a value indicating whether element needs text adjusting when [Korzh.EasyQuery.WinForms.XElement.ApplyFormats](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method is called  Default is true. | 
| NeedValidate | `bool` | Gets the value of date values. | 
| NumericValueFormat | `string` | Gets or sets the format of numeric values. | 
| ParentPanel | [XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | Gets the parent [Korzh.EasyQuery.WinForms.XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) object. | 
| ParentRow | [XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) | Gets the row the element belongs to. | 
| ReadOnly | `bool` | Gets or sets a value indicating whether the element is read-only. | 
| ReadOnlyColor | `Color` | Gets or sets the color of the element in "read only" state. | 
| SubType | `string` | Defines the subtype for some elements. | 
| Text | `string` | Gets or sets the text displayed by element. | 
| TextColor | `Color` | Gets or sets the color of the element's text | 
| Value | `string` | Gets or sets the value that corresponds to current element state. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| AltClick | `EventHandler` | Occurs when Ctrl key is held when [Korzh.EasyQuery.WinForms.XElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) is clicked | 
| ContentChanged | `ContentChangedEventHandler` | Occurs when the content of XElement is changed | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Activate() | `void` | Activates this element. | 
| ApplyFormats() | `void` | Applies the formats. This method is called from [Korzh.EasyQuery.WinForms.XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) object when all element parents are set | 
| Arrange(`int` bottomLine, `int` rowHeight) | `void` | Arranges the [Korzh.EasyQuery.WinForms.XElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) on base panel. | 
| CalcNewText(`string` newValue) | `string` | Gets the new text from edit control | 
| CalcNewValue() | `string` | Gets the new value from edit control | 
| CloseEdit(`bool` accept) | `void` | Closes the edit if element is in edit state. | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| CoreLaunch() | `void` | Is called when both [Korzh.EasyQuery.WinForms.XElement.ParentRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) and [Korzh.EasyQuery.WinForms.XElement.ParentPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) for this element are established. | 
| CoreSetContent(`string` value, `string` text) | `void` | Sets the content of element (both its value and text).  Can be overridden in inherited classes. | 
| CreateElementControl() | `Control` | Creates the [Korzh.EasyQuery.WinForms.XElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class). | 
| Detach() | `void` | Zeros some references to let element be destroyed. | 
| Dispose() | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| Dispose(`bool` disposing) | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| DropDown() | `void` | Shows an additional control (Edit, Menu, etc) to change element's value | 
| ElementControlClickHandler(`object` sender, `EventArgs` e) | `void` | Called when user clicks on element control. | 
| ElementControlFontChangedHandler(`object` sender, `EventArgs` e) | `void` | Called when element control font is changed. | 
| ElementControlGotFocusHandler(`object` sender, `EventArgs` e) | `void` | Called when element control got focus. | 
| ElementControlLostFocusHandler(`object` sender, `EventArgs` e) | `void` | Called when element control lost focus. | 
| ElementControlSizeChangedHandler(`object` sender, `EventArgs` e) | `void` | Called when element control size is changed. | 
| Focus() | `bool` | Sets input focus to the element. | 
| GetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method calls [Korzh.EasyQuery.WinForms.XElement.CoreGetTextAdjustedByValue(System.String)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method of the current object and then pass processing to the parent row. | 
| HideControl() | `void` | Hides the control that allows to edit the value. | 
| Invalidate() | `void` | Invalidates the element. | 
| OnAltClick(`EventArgs` e) | `void` | Raises the [Korzh.EasyQuery.WinForms.XElement.AltClick](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) event. | 
| OnBeforeDropDown() | `void` | Calls ElementBeforeDropDown method of the parent row. | 
| OnContentChanged(`bool` valueChanged, `bool` textChanged) | `void` | Called when element's content (text, value or both) is changed. | 
| OnValidate([ValidateValueEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class) e) | `void` | Is called before element is rolled up. | 
| ParseXmlNode(`XmlNode` node) | `void` | Abstract method to be overridden by descendants.  Parses the XML-description of element. | 
| ReAdjustTextByValue() | `void` | Make [Korzh.EasyQuery.WinForms.XElement.Text](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) property empty and call [Korzh.EasyQuery.WinForms.XElement.AdjustTextByValue](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method | 
| RollUp(`bool` accept) | `void` | Brings element to initial state - hides any specific controls (Edit, Menu etc.) activated by user. | 
| Select() | `void` | Activates the element. | 
| SetContent(`string` value, `string` text) | `void` | Sets the content of element (both its value and text). | 
| SetContentSilent(`string` value, `string` text) | `void` | Sets the content of element silently (without nofifying parent row). | 
| SetText(`string` newText) | `void` | Sets the text of element. | 
| SetValue(`string` newValue) | `bool` | Function to set the value. Can be overridden if needed. Is called from Value property "set" part. | 
| ShowControl() | `void` | Shows the control that allows to edit the value. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ChangeFontSize(`Font` font, `Single` fontSize) | `Font` | Changes the size of the font. | 
| Create(`string` tagName) | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Creates the row element instance of specified type. | 
| MeasureDisplayStringWidth(`Graphics` graphics, `string` text, `Font` font) | `int` | Measures the width of the display string. | 
| Register([ICreator](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-icreator-interface) creator) | `bool` | Registers new type of row element. |