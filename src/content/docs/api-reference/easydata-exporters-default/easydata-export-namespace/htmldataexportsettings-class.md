---
title: HtmlDataExportSettings class
slug: api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class
---
Represents different settings used during exporting to HTML
```csharp
public class EasyData.Export.HtmlDataExportSettings
    : BasicDataExportSettings

```
Package: `EasyData.Exporters.Default` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.Default.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| HtmlDataExportSettings() | `void` | Initializes a new instance of the[EasyData.Export.HtmlDataExportSettings](/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class) class. | 
| HtmlDataExportSettings(`CultureInfo` culture) | `void` | Initializes a new instance of the[EasyData.Export.HtmlDataExportSettings](/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| FixHtmlTags | `bool` | Gets or sets a value indicating whether HTML tags (such as p, ol, ul, li, etc) must be converted to plain text during the export. | 
| FontFamily | `string` | Sets the font family. | 
| FontSize | `int` | Sets the size of the font. | 
| HeaderBgColor | `string` | Gets or sets the color of the header bg. | 
| HeaderFgColor | `string` | Gets or sets the color of the header fg. | 
| HeaderFontWeight | `string` | Gets or sets the header font weight. | 
| TableBgColor | `string` | the color of the table debug. | 
| TableBorderColor | `string` | sets the color of the table border. | 
| ThicknessOfBorder | `int` | sets the thickness of border. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [HtmlDataExportSettings](/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class) | Returns the default instance of [EasyData.Export.HtmlDataExportSettings](/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class). |