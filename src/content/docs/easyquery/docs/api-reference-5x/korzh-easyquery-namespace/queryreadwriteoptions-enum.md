---
title: QueryReadWriteOptions enum
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryreadwriteoptions-enum
---


Represents different options used during query loading or saving
```csharp
public enum Korzh.EasyQuery.QueryReadWriteOptions
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `1` | Conditions | Only conditions will be loaded/saved | 
| `2` | Columns | Only columns will be loaded/saved | 
| `4` | Description | Only query description will be loaded/saved | 
| `7` | Content | Conditions and columns and query description will be loaded/saved | 
| `8` | Options | Only query options will be loaded/saved | 
| `16` | Formats | Only query formats will be loaded/saved | 
| `32` | ClientSide | Using this option means that we are going to create query's representation for the client-side scripts.  Warning: Don't inlcude this option directly, it's for internal use only. Use ClientSideContent instead | 
| `39` | ClientSideContent | Represents the default set of options for serializing a JSON representation of the query for the client-side (without all DB-related info) | 
| `4095` | All | All query parts will be loaded/saved |