---
title: DataTypeList class
slug: api-reference/easydata-core/easydata-namespace/datatypelist-class
sidebar:
  order: 100
---

Represents a list of DataType values.
```csharp
public class EasyData.DataTypeList
    : Collection<DataType>

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DataTypeList(`DataType[]` typeList) | `void` | Initializes a new instance of the `DataTypeList` class. | 
| DataTypeList(`string` listStr) | `void` | Initializes a new instance of the `DataTypeList` class. | 
| DataTypeList() | `void` | Initializes a new instance of the `DataTypeList` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CommaText | `string` | Gets or sets the text representation of type list delimited with the comma. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddRange(`IEnumerable`&lt;[DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum)&gt; types) | `void` | Adds the type stored in an IEnumerable to the end of the list. | 
| InsertItem(`int` index, [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| InsertRange(`int` index, `IEnumerable`&lt;[DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum)&gt; types) | `void` | Inserts the types stored in an IEnumerable object into the list starting from specified index. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| BoolDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents the most common data types | 
| CommonDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents the most common data types | 
| FloatDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all float data types | 
| IntegerDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all integer-like data types (numeric and boolean) | 
| RangeDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all ranged data types (numeric and boolean) | 
| StringDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all string data types (numeric and boolean) | 
| TimeDataTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all string data types (numeric and boolean) |
