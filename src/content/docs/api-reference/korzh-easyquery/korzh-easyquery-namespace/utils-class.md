---
title: Utils class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/utils-class
---
Represents different type conversion functions and other useful procedures
```csharp
public static class Korzh.EasyQuery.Utils

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| MacroRegex | `Regex` | The Regex object which matches a macro value. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ComposeKey(`string` parent, `string` child) | `string` | Composes the key (for attributes, entities, etc).  Returns "parent.key" if both parent and key are not empty/null | 
| ContainsNonAscii(`string` s) | `bool` | Checks string for inclusion of non-ASCII symbols. | 
| DataKindByName(`string` kindName) | [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the DataKind value by its text representation. | 
| FormatDateTimeValue(`string` val, `string` format, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, `int` timezoneOffset = 0) | `string` | Converts the date/time passed in internal format  used in EasyQuery library (yyyy-MM-dd HH:mm:ss by default)  to some other date/time format | 
| GenerateId(`string` prefix) | `string` | Generates Id with prefix. | 
| GetCurrentCulture() | `CultureInfo` | Returns current culture | 
| GetCurrentUICulture() | `CultureInfo` | Returns current UI culture | 
| GetElementContentAsString(`XmlReader` reader) | `string` | Reads the content of current XML element (as string) | 
| GetEnumValues(`Type` oEnumType) | `IList`&lt;`int`&gt; | Gets all values of the enum. | 
| GetSpecialDateByName(`string` name, `bool` utc) | `DateTime` | Gets the actual date value by its macro name (like "Today", "FirstDayOfMonth", etc). | 
| GetSpecialDateByNameEx(`string` name, `bool` utc, `DataType&` dt, `String&` text) | `DateTime` | Gets the actual date value by its macro name (like "Today", "FirstDayOfMonth", etc). | 
| GetSpecialDateValue([SpecialDateTime](/api-reference/korzh-easyquery/korzh-easyquery-namespace/specialdatetime-enum) sdt, `bool` utc) | `DateTime` | Gets the value of some special date (like Today or FirstDayOfYear) by its enum definition. | 
| GetSpecialDateValueEx([SpecialDateTime](/api-reference/korzh-easyquery/korzh-easyquery-namespace/specialdatetime-enum) sdt, `bool` utc, `DataType&` dt, `String&` text) | `DateTime` | Gets the value of some special date (like Today or FirstDayOfYear) by its enum definition. | 
| GetSystemTypeByDataType([DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type) | `Type` | Gets the system type by data type. | 
| GetSystemTypeByDataType([DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dtype, `Type` defaultType) | `Type` | Gets the system type by data type. | 
| HasTheSameTypeGroup(<span style='color: blue'>this</span> [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type1, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type2) | `bool` | Returns true if type1 has the same type group (e.g. integer types) as type2. | 
| IsConvertedTo(<span style='color: blue'>this</span> [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type1, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type2) | `bool` | Returns true if type1 can be converted to type2. | 
| IsSpecialDateTimeMacro(`string` macroId) | `bool` | Determines whether the string passed in parameter represents a special date/time identifier (like "Today", "FirstDayOfMonth", etc) | 
| IsStrNullOrEmpty(`string` s) | `bool` | Determines whether specified string is null or empty. | 
| MatchMacro(`string` s, `String&` macroId) | `bool` | Matches the macro in the input string.  Returns the name of the macro in "out" parameter if the match was successful | 
| MoveToAttribute(`XmlReader` reader, `string` attrName) | `bool` | Moves current position of XmlReader into specified attribute. | 
| OldFormatToDateTime(`string` val) | `DateTime` | Convert string representation in old format to DateTime value. | 
| SafeParseBool(`string` value, `bool` defValue = False) | `bool` | Converts the string representation of a boolean value.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| SafeParseInt(`string` s, `int` defValue = 0) | `int` | Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| StrToIdentifier(`string` s) | `string` | Converts any string to an identifier (changes all symbols like '.' ';' '?' etc to '_') | 
| TextEq(`string` s1, `string` s2) | `bool` | Provides case-insensitive string comparision | 
| TryGetSpecialDate(`string` macroId, `bool` useUtcTime, `DateTime&` dateVal, `DataType&` dt, `String&` text) | `bool` | Gets the actual date value by its macro name (like "Today", "FirstDayOfMonth", etc).  This function returns false if the macro name is not recoginized. |