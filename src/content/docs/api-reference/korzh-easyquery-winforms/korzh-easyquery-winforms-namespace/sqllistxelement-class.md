---
title: SqlListXElement class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sqllistxelement-class
---

Represents special kind of LIST row element which gets list of available values from database.
```csharp
public class Korzh.EasyQuery.WinForms.SqlListXElement
    : ListXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlListXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SqlListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sqllistxelement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| SQL | `string` | Gets the text of SQL SELECT statement. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| CoreRefreshList() | `void` | Internal implementation of [Korzh.EasyQuery.WinForms.ListXElement.RefreshList](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) method.  It makes parent panel to raise SqlExecute event to fill the list. | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Called when the label is clicked. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML node. | 
| PopulateList() | `void` | Calls Action event named "SqlListRequest" to populate the list. | 
| SetSql(`string` newSql) | `void` | Sets the text of SQL SELECT statement. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Tag name that represents [Korzh.EasyQuery.WinForms.SqlListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sqllistxelement-class) element. |