---
title: QueryPanel.ParamRow class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-paramrow-class
sidebar:
  order: 100
---

Represents a row that correspond to some parameter ([Korzh.EasyQuery.QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) object).
```csharp
public class Korzh.EasyQuery.WinForms.QueryPanel.ParamRow
    : ConditionRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ParamRow([QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) parentPanel, [QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.QueryPanel.ParamRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Param | [QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) | Gets the [Korzh.EasyQuery.QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. | 
| CoreRefreshByCondition() | `void` | This method is called when connected condition is changed  and we need to refresh the row accordingly. | 
| CreateValueElement() | [XElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Creates the value element. | 
| ElementContentChanged([XElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | Elements the content changed. |
