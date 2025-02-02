---
title: XRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class
---


Provides a container for array of [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class).
```csharp
public class Korzh.EasyQuery.WinForms.XRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XRow(`bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) class. | 
| XRow(`string` axmlText, `bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) class. | 
| XRow(`string` axmlText) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| elements | [XElementsStore](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelementsstore-class) | The list of row elements. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Active | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) is active. | 
| AllowShifting | `bool` | Gets or sets a value indicating whether the row can be shifted by Ctrl+ArrowLeft, Ctrl+ArrowRight keys. | 
| Elements | [XElementList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelementlist-class) | Gets the list of elements. | 
| Enabled | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) is enabled. | 
| ID | `string` | Gets or sets the row ID. | 
| Index | `int` | Gets the index of row in parent [Korzh.EasyQuery.WinForms.XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| Item | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Gets the [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) at the specified index. | 
| Level | `int` | Gets or sets the level of the row. The more level is, the more elements are shifted to the right. | 
| NativeWidth | `int` | Gets the native width of the row (right position of the last element) | 
| RowUpdating | `bool` | Gets a value indicating whether this `XRowControl` is updating. | 
| ShowCheckBox | `bool` | Gets or sets a value indicating whether a check box will be shown at the beginning of the row. | 
| Updating | `bool` | Gets a value indicating whether this `XRowControl` or its parent panel is updating. | 
| Visible | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.XRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) is visible. | 
| Width | `int` | Gets or sets the width of the row. | 
| XmlText | `string` | Gets or sets the XML text of row. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddTextElement(`string` text) | [TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) | Adds new [Korzh.EasyQuery.WinForms.TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) to the row. | 
| ApplyElementFormats([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Applies formats for one element. | 
| ApplyFormats() | `void` | Applies the formats used in parent object. This method is called when row is added into XPanel | 
| ArrangeRow() | `void` | Arranges the row in parent object. | 
| BeginUpdate() | `void` | Begins the update process. | 
| CloseEdits() | `void` | Brings all elements to initial state - hides any specific controls (Edit, Menu etc.) activated by user. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. | 
| CoreDetach() | `void` | Detaches this row from the parent panel.  This method can be overridden in the inherited classes | 
| CoreDetachElement([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Removes all references and event handlers for some element  This method is called on element removal | 
| CoreElementAltMenuClick([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sender, [ValueItem](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) item) | `void` | This method is called when [Korzh.EasyQuery.WinForms.XElement.AltClick](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) event is raised in some element of the current row. | 
| CoreElementBeforeDropDown([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sender) | `void` | This method is called at the beginning of [Korzh.EasyQuery.WinForms.XElement.DropDown](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method execution in some element of the current row. | 
| CoreElementValidateValue([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sender, [ValidateValueEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class) e) | `void` | This method is called when [Korzh.EasyQuery.WinForms.XElement.OnValidate(Korzh.EasyQuery.WinForms.ValidateValueEventArgs)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method is executed in some element of the current row. | 
| CreateElementByXmlNode(`XmlNode` node) | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Creates the new [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) by XML node. | 
| CreateElementByXmlText(`string` xml) | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Creates the new [Korzh.EasyQuery.WinForms.XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) by XML text. | 
| Dispose() | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| Dispose(`bool` disposing) | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| ElementAction(`object` sender, `string` actionName, `object` data) | `void` | Called when element performs the Action.  Just forwards call to [Korzh.EasyQuery.WinForms.XRow.Parent](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class). | 
| ElementAction(`object` sender, `string` actionName) | `void` | Called when element performs the Action.  Just forwards call to [Korzh.EasyQuery.WinForms.XRow.Parent](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class). | 
| ElementContentChanged([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some element has been changed | 
| ElementTextAdjusting([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `string` newValue, `string` text) | `string` | This method is called when we need to adjust element's text according to its value | 
| EndUpdate(`bool` updateElements) | `void` | Ends the update process. | 
| EndUpdate() | `void` | Ends the update process. | 
| GetSelectedElementIndex() | `int` | Gets the index of the selected element. | 
| OnEnableChange() | `void` | Reserved. Should raise EnableChange event. | 
| Refresh() | `void` | Refreshes this instance. | 
| SelectNextControl(`int` startFrom, `bool` forward, `bool` lap) | `void` | Move focus to the next element in the row. | 
| SelectNextControl(`bool` forward, `bool` lap) | `void` | Move focus to the next element in the row. |