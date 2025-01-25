---
title: QueryPanel.ParamRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-paramrow-class
---
Represents a row that correspond to some parameter ([Korzh.EasyQuery.QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) object).
```csharp
public class Korzh.EasyQuery.WinForms.QueryPanel.ParamRow
    : ConditionRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ParamRow([QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) parentPanel, [QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.QueryPanel.ParamRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Param | [QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) | Gets the [Korzh.EasyQuery.QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. | 
| CoreRefreshByCondition() | `void` | This method is called when connected condition is changed  and we need to refresh the row accordingly. | 
| CreateValueElement() | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Creates the value element. | 
| ElementContentChanged([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | Elements the content changed. |