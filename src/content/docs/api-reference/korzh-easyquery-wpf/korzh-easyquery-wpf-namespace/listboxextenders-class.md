---
title: ListBoxExtenders class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/listboxextenders-class
---
This class contains a few useful extenders for the ListBox
```csharp
public class Korzh.EasyQuery.Wpf.ListBoxExtenders
    : DependencyObject

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListBoxExtenders() | `void` |  | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| AutoScrollToLastItemProperty | `DependencyProperty` | Handles scrolling to added items | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetAutoScrollToLasttItem(`DependencyObject` obj) | `bool` | Returns the value of the AutoScrollToCurrentItemProperty | 
| OnAutoScrollToLastItem(`ListBox` listBox, [XRowList](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xrowlist-class) rows) | `void` | Called when listbox is scrolled to last item. | 
| OnAutoScrollToLastItemChanged(`DependencyObject` s, `DependencyPropertyChangedEventArgs` e) | `void` | Called when [Korzh.EasyQuery.Wpf.ListBoxExtenders.OnAutoScrollToLastItem(System.Windows.Controls.ListBox,Korzh.EasyQuery.Wpf.XRowList)](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/listboxextenders-class) changes | 
| SetAutoScrollToLastItem(`DependencyObject` obj, `bool` value) | `void` | Sets the value of the AutoScrollToCurrentItemProperty |