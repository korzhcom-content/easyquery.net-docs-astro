---
title: SqlExecuteEventArgs class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sqlexecuteeventargs-class
sidebar:
  order: 100
---

Provides data for SqlExecute event.
```csharp
public class Korzh.EasyQuery.WinForms.SqlExecuteEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlExecuteEventArgs(`string` sql, [ValueItemList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) listItems) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SqlExecuteEventArgs](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sqlexecuteeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ListItems | [ValueItemList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets or sets the requested list of items. | 
| ResultXml | `string` | Sets the result of SQL execution in XML format. | 
| SQL | `string` | Gets the text of SQL SELECT statement. |
