---
title: SortOrderChangedEventArgs class
slug: api-reference-5x/korzh-easyquery-namespace/sortorderchangedeventargs-class
---


Provides data for [Korzh.EasyQuery.Query.SortOrderChanged](/api-reference-5x/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.SortOrderChangedEventArgs
    : EventArgs

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Column` | Column | Gets or sets the column which was changed. Can be null in case of Total change | 
| `Int32` | Info | Gets or sets the addtional information of changed column.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed column | 
| `Boolean` | SyncColSortOrder | Gets or sets a value indicating whether the order of columns must be synchronized with their sorting order. | 
| `ChangeType` | What | Gets or sets the attribute that shows what exactly was changed. | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `SortOrderChangedEventHandler` | SortOrderChanged | Occurs when the list of sorted columns was changed. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InnerSortOrderChanged(`SortOrderChangedEventArgs` e) |  | 
| `void` | OnSortOrderChanged(`SortOrderChangedEventArgs` e) | Raises the `SortOrderChanged` event. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `SortOrderChangedEventArgs` | Default | Gets the default ConditionsChangedEventArgs object. |