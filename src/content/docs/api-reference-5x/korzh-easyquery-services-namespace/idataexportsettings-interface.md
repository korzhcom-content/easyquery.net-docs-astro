---
title: IDataExportSettings interface
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/idataexportsettings-interface
sidebar:
  order: 100
---

Represents some settings used during exporting operations
```csharp
public interface Korzh.EasyQuery.Services.IDataExportSettings

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DateFormat | Gets or sets the format of date values. | 
| `Boolean` | ShowColumnNames | Gets or sets a value indicating whether column names should be included into export result. | 
| `String` | TimeFormat | Gets or sets the format of time values. | 
| `Int32` | TimezoneOffset | Timezone offset (in minutes) for all dates used in the query.  If 0 - no offset is applied |
