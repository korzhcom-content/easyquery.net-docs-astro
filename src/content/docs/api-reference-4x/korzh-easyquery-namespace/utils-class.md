---
title: Utils class
slug: api-reference-4x/korzh-easyquery-namespace/utils-class
sidebar:
  order: 100
---

Represents different type conversion functions and other useful procedures
```csharp
public static class Korzh.EasyQuery.Utils

```

### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Regex` | MacroRegex |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | InternalDateFormat | Gets the internal date format (yyyy-MM-dd). | 
| `String` | InternalTimeFormat | Gets the internal time format (HH:mm:ss). | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | AreCompatibleTypes(`DataType` type1, `DataType` type2) | Returns true if type1 can be converted to type2. | 
| `String` | ComposeKey(`String` parent, `String` child) | Composes the key (for attributes, entities, etc).  Returns "parent.key" if both parent and key are not empty/null | 
| `Boolean` | ContainsNonAscii(`String` s) | Checks string for inclusion of non-ASCII symbols. | 
| `DataKind` | DataKindByName(`String` kindName) | Gets the DataKind value by its text representation. | 
| `DataType` | DataTypeByName(`String` typeName) | Returns DataType value by its string representation | 
| `String` | DateTimeToInternalFormat(`DateTime` dt, `DataType` dataType) | Converts DateTime value to its string representation in internal format (yyyy-MM-dd). | 
| `String` | DateTimeToUserFormat(`DateTime` dt, `DataType` dataType) | Converts DateTime value to its string representation in current system format. | 
| `String` | FormatDateTimeValue(`String` val, `String` format, `DataType` dataType, `Int32` timezoneOffset = 0) | Formats the date time value. | 
| `CultureInfo` | GetCurrentCulture() | Returns current culture | 
| `CultureInfo` | GetCurrentUICulture() | Returns current UI culture | 
| `DataType` | GetDataTypeBySystemType(`Type` systemType) | Gets the type of the data type by system type. | 
| `String` | GetDateTimeInternalFormat(`DataType` dataType, `Boolean` shortTime = False) | Gets the format used for internal textual representation of date/time values.  EasyQuery uses "yyyy-MM-dd" format. | 
| `String` | GetElementContentAsString(`XmlReader` reader) | Reads the content of current XML element (as string) | 
| `IList<Int32>` | GetEnumValues(`Type` oEnumType) | Gets all values of the enum. | 
| `IFormatProvider` | GetInternalFormatProvider() | Gets the internal format provider.  This provider defines the format used to store date/time and numeric values internally and it saved queries | 
| `DateTime` | GetSpecialDateByName(`String` name, `Boolean` utc) |  | 
| `DateTime` | GetSpecialDateByNameEx(`String` name, `Boolean` utc, `DataType&` dt) |  | 
| `DateTime` | GetSpecialDateValue(`SpecialDateTime` sdt, `Boolean` utc) |  | 
| `DateTime` | GetSpecialDateValueEx(`SpecialDateTime` sdt, `Boolean` utc, `DataType&` dt) |  | 
| `Type` | GetSystemTypeByDataType(`DataType` type) | Gets the system type by data type. | 
| `Type` | GetSystemTypeByDataType(`DataType` dtype, `Type` defaultType) | Gets the system type by data type. | 
| `DateTime` | InternalFormatToDateTime(`String` val, `DataType` dataType) | Convert string representation in internal format to DateTime value. | 
| `Boolean` | IsStrNullOrEmpty(`String` s) | Determines whether specified string is null or empty. | 
| `Boolean` | MatchMacro(`String` s, `String&` macroName) |  | 
| `Boolean` | MoveToAttribute(`XmlReader` reader, `String` attrName) | Moves current position of XmlReader into specified attribute. | 
| `DateTime` | OldFormatToDateTime(`String` val) | Convert string representation in old format to DateTime value. | 
| `Boolean` | SafeParseBool(`String` value, `Boolean` defValue = False) | Converts the string representation of a boolean value.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| `Int32` | SafeParseInt(`String` s, `Int32` defValue = 0) | Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| `String` | StrToIdentifier(`String` s) | Converts any string to an identifier (changes all symbols like '.' ';' '?' etc to '_') | 
| `Boolean` | TextEq(`String` s1, `String` s2) | Provides case-insensitive string comparision | 
| `Boolean` | TryGetSpecialDate(`String` macroName, `Boolean` useUtcTime, `DateTime&` dateVal, `DataType&` dt) |  |
