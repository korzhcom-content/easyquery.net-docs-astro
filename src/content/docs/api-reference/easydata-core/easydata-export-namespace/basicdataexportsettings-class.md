---
title: BasicDataExportSettings class
slug: api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class
---
Represents basic (common) formats for data exporting operations
```csharp
public class EasyData.Export.BasicDataExportSettings
    : IDataExportSettings

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| BasicDataExportSettings(`CultureInfo` culture) | `void` | Initializes a new instance of the [EasyData.Export.BasicDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class) class. | 
| BasicDataExportSettings() | `void` | Initializes a new instance of the [EasyData.Export.BasicDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class) class. | 
| BasicDataExportSettings(`string` locale) | `void` | Initializes a new instance of the [EasyData.Export.BasicDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| BeforeRowAdded | `Func`&lt;[EasyDataRow](/api-reference/easydata-core/easydata-namespace/easydatarow-class), `Func`&lt;[EasyDataRow](/api-reference/easydata-core/easydata-namespace/easydatarow-class), `Task`&gt;, `Task`&gt; |  | 
| ColumnFilter | `Func`&lt;[EasyDataCol](/api-reference/easydata-core/easydata-namespace/easydatacol-class), `bool`&gt; | Allows to filter columns during export | 
| Culture | `CultureInfo` | The culture | 
| Description | `string` | The description | 
| IncludeGrandTotals | `bool` |  | 
| IncludeSubTotals | `bool` |  | 
| PreserveFormatting | `bool` | Gets or sets value indicating whether the exporter shoud preserve the formatting in the original value | 
| RowFilter | `Func`&lt;[EasyDataRow](/api-reference/easydata-core/easydata-namespace/easydatarow-class), `bool`&gt; | Filter rows during export | 
| ShowColumnNames | `bool` | Gets or sets a value indicating whether column names should be included into export result. | 
| ShowDatasetInfo | `bool` | Gets or sets value indicating wether title and description will be shown | 
| Title | `string` | The title | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [BasicDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class) | Returns the default instance of [EasyData.Export.BasicDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/basicdataexportsettings-class). |