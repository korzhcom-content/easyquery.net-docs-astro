---
title: DataTypeList class
slug: easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class
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
| AddRange(`IEnumerable`&lt;[DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum)&gt; types) | `void` | Adds the type stored in an IEnumerable to the end of the list. | 
| InsertItem(`int` index, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| InsertRange(`int` index, `IEnumerable`&lt;[DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum)&gt; types) | `void` | Inserts the types stored in an IEnumerable object into the list starting from specified index. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| BoolDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents the most common data types | 
| CommonDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents the most common data types | 
| FloatDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all float data types | 
| IntegerDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all integer-like data types (numeric and boolean) | 
| RangeDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all ranged data types (numeric and boolean) | 
| StringDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all string data types (numeric and boolean) | 
| TimeDataTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | The list which represents all string data types (numeric and boolean) |