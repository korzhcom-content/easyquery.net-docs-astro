---
title: DataTypeList class
slug: api-reference-4x/korzh-easyquery-namespace/datatypelist-class
---


Represents a list of DataType values.
```csharp
public class Korzh.EasyQuery.DataTypeList
    : Collection<DataType>, IList<DataType>, ICollection<DataType>, IEnumerable<DataType>, IEnumerable, IList, ICollection, IReadOnlyList<DataType>, IReadOnlyCollection<DataType>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | CommaText | Gets or sets the text representation of type list delimited with the comma. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRange(`IEnumerable<DataType>` types) | Adds the type stored in an IEnumerable to the end of the list. | 
| `void` | InsertItem(`Int32` index, `DataType` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | InsertRange(`Int32` index, `IEnumerable<DataType>` types) | Inserts the types stored in an IEnumerable object into the list starting from specified index. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `DataTypeList` | BoolDataTypes | The list which represents the most common data types | 
| `DataTypeList` | CommonDataTypes | The list which represents the most common data types | 
| `DataTypeList` | IntegerDataTypes | The list which represents all integer-like data types (numeric and boolean) | 
| `DataTypeList` | RangeDataTypes | The list which represents all ranged data types (numeric and boolean) | 
| `DataTypeList` | StringDataTypes | The list which represents all string data types (numeric and boolean) | 
| `DataTypeList` | TimeDataTypes | The list which represents all string data types (numeric and boolean) |