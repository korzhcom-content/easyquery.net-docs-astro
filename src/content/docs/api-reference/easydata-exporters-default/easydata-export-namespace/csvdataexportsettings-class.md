---
title: CsvDataExportSettings class
slug: >-
  api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class
sidebar:
  order: 100
---

Represents csv format used during exporting operations
```csharp
public class EasyData.Export.CsvDataExportSettings
    : BasicDataExportSettings

```
Package: `EasyData.Exporters.Default` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.Default.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CsvDataExportSettings() | `void` | Initializes a new instance of the [EasyData.Export.CsvDataExportSettings](/easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class) class. | 
| CsvDataExportSettings(`string` locale) | `void` | Initializes a new instance of the [EasyData.Export.CsvDataExportSettings](/easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class) class. | 
| CsvDataExportSettings(`CultureInfo` culture) | `void` | Initializes a new instance of the [EasyData.Export.CsvDataExportSettings](/easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CommentCharacter | `string` | Sets the commanet characetr. | 
| QuoteAlways | `bool` | Gets or sets a value indicating whether we should always put quotes around field values.  If it's false - quotes will be added only if it's necessary. | 
| Separator | `string` | Sets the separator. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [CsvDataExportSettings](/easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class) | Returns the default instance of [EasyData.Export.CsvDataExportSettings](/easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class). |
