---
title: BasicDataExportSettings class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/basicdataexportsettings-class
---


Represents basic (common) formats for data exporting operations
```csharp
public class Korzh.EasyQuery.Services.BasicDataExportSettings
    : IDataExportSettings

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DateFormat | Gets or sets the format of date values. | 
| `Boolean` | ShowColumnNames | Gets or sets a value indicating whether column names should be included into export result. | 
| `String` | TimeFormat | Gets or sets the format of time values. | 
| `Int32` | TimezoneOffset | Timezone offset (in minutes) for all dates used in the query.  If 0 - no offset is applied | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `BasicDataExportSettings` | Default | Returns the default instance of [Korzh.EasyQuery.Services.BasicDataExportSettings](/api-reference-5x/korzh-easyquery-services-namespace/basicdataexportsettings-class). |