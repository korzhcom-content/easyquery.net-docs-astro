---
title: ModelReadWriteOptions enum
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/modelreadwriteoptions-enum
---


Represents different options used during data model loading or saving
```csharp
public enum Korzh.EasyQuery.ModelReadWriteOptions
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `1` | DbInfo | Tables, links and other DB specific info will be saved/loaded | 
| `2` | Operators | Include operators when saving or loading the model | 
| `4` | Editors | The value editors will be saved/loaded | 
| `8` | Entities | The entities and their attributes will be saved/loaded | 
| `16` | AggrFunctions | If set - we need to save or load the list of aggregate functions | 
| `32` | Description | The model's description will be saved/loaded | 
| `64` | DefQueryPath | The path to the default query path will be saved/loaded | 
| `128` | DMEOptions | Data Model Editor options will be saved together with the data model | 
| `256` | DbParams | DB connection settings will be saved | 
| `512` | CustomInfo | Whether we need to save or load the model's custom info | 
| `1024` | ClientSide | Using this option means that we are going to create data model's representation for the client-side code.  Warning: Don't inlcude this option directly, it's for internal use only. Use ClientSideContent instead | 
| `1086` | ClientSideContent | Represents the default set of options for serializing a JSON representation of the model for the client-side (without all DB-related info) | 
| `4095` | All | All data model parts will be loaded/saved | 
| `4096` | KeepCurrent | If this option is set - then the previous model will not be cleared before the loading of the new one |