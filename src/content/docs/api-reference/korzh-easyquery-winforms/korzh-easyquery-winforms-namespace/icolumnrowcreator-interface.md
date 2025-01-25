---
title: IColumnRowCreator interface
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/icolumnrowcreator-interface
---
Represents special interface used for definition of new (custom) types of row
```csharp
public interface Korzh.EasyQuery.WinForms.IColumnRowCreator

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create([ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) panel, [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `bool` useCheckBox) | [ColumnRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) | Creates an instance of [Korzh.EasyQuery.WinForms.ColumnRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class). | 
| GetCaption([ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) panel) | `string` | Returns the caption for button menu. |