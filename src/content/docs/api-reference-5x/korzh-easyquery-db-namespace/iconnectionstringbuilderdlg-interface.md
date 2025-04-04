---
title: IConnectionStringBuilderDlg interface
slug: >-
  api-reference-5x/korzh-easyquery-db-namespace/iconnectionstringbuilderdlg-interface
sidebar:
  order: 100
---

Defines  methods for ConnectionString Builder dialog
```csharp
public interface Korzh.EasyQuery.Db.IConnectionStringBuilderDlg

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ConnectionString | Gets the connection string. | 
| `String` | DBGateName | Gets the name of [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) object. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | RunDialog(`DbGate` dbGate, `Boolean` changeSourceControls) | Shows the dialog. |
