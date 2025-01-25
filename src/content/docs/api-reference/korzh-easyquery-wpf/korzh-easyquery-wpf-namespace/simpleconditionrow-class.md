---
title: SimpleConditionRow class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simpleconditionrow-class
---
Represents simple condition in WHERE section in SQL statement (e.g. WHERE City='London')
```csharp
public class Korzh.EasyQuery.Wpf.SimpleConditionRow
    : XRow

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleConditionRow(`int` level, [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, [QueryPanel](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) panel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.SimpleConditionRow](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simpleconditionrow-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets or sets the condition. | 
| ConditionBackground | `Brush` | Gets or sets the condition. | 
| EditMode | [EditModeKind](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/editmodekind-enum) | Gets or sets the edit mode. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ValueRequest | `ValueRequestEventHandler` | Occurs when condition with custom editor is edited | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateElementByXmlNode(`XmlNode` node) | [XElement](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) | Creates the element by XML node. | 
| CreateElementByXmlText(`string` xml) | [XElement](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) | Creates the element by XML text. | 
| GetAttributeCaption([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `string` |  | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionBackgroundProperty | `DependencyProperty` |  | 
| ConditionProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.SimpleConditionRow.Condition](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simpleconditionrow-class) dependency property | 
| ValueRequestEvent | `RoutedEvent` | Identifies the [Korzh.EasyQuery.Wpf.SimpleConditionRow.ValueRequest](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simpleconditionrow-class) routed event |