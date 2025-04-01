---
title: IDataExportSettings interface
slug: >-
  api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface
sidebar:
  order: 100
---

Represents some settings used during exporting operations
```csharp
public interface EasyData.Export.IDataExportSettings

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| BeforeRowAdded | `Func`&lt;[EasyDataRow](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class), `Func`&lt;[EasyDataRow](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class), `Task`&gt;, `Task`&gt; |  | 
| ColumnFilter | `Func`&lt;[EasyDataCol](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class), `bool`&gt; | Filter columns during export | 
| Culture | `CultureInfo` | The culture. | 
| Description | `string` | The description | 
| IncludeGrandTotals | `bool` |  | 
| IncludeSubTotals | `bool` |  | 
| PreserveFormatting | `bool` | Gets or sets value indicating whether the exporter shoud preserve the formatting in the original value | 
| RowFilter | `Func`&lt;[EasyDataRow](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class), `bool`&gt; | Filter rows during export | 
| ShowColumnNames | `bool` | Gets or sets a value indicating whether column names should be included into export result. | 
| ShowDatasetInfo | `bool` | Gets or sets value indicating whether title and description will be shown | 
| Title | `string` | The title |
