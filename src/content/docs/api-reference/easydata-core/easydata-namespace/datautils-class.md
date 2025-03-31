---
title: DataUtils class
slug: api-reference/easydata-core/easydata-namespace/datautils-class
---

```csharp
public class EasyData.DataUtils

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DataUtils() | `void` |  | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| InternalDateFormat | `string` | Gets the internal date format (yyyy-MM-dd). | 
| InternalTimeFormat | `string` | Gets the internal time format (HH:mm:ss). | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ComposeKey(`string` parent, `string` child) | `string` |  | 
| DateTimeToInternalFormat(`DateTime` dt, [DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `string` | Converts DateTime value to its string representation in internal format (yyyy-MM-dd). | 
| DateTimeToUserFormat(`DateTime` dt, [DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `string` | Converts DateTime value to its string representation in current system format. | 
| GetDataTypeBySystemType(`Type` systemType) | [DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the type of the data type by system type. | 
| GetDateTimeInternalFormat([DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, `bool` shortTime = False) | `string` | Gets the format used for internal textual representation of date/time values.  EasyQuery uses "yyyy-MM-dd" format. | 
| GetInternalFormatProvider() | `IFormatProvider` | Gets the internal format provider.  This provider defines the format used to store date/time and numeric values internally and it saved queries | 
| InternalFormatToDateTime(`string` val, [DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `DateTime` | Convert string representation in internal format to DateTime value. | 
| MakePlural(`string` name) | `string` | Change single to plural | 
| PrettifyName(`string` name) | `string` |  |