---
title: IConnectionStringBuilderDlg interface
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/iconnectionstringbuilderdlg-interface
sidebar:
  order: 100
---

Defines  methods for ConnectionString Builder dialog
```csharp
public interface Korzh.EasyQuery.Db.IConnectionStringBuilderDlg

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionString | `string` | Gets the connection string. | 
| DBGateName | `string` | Gets the name of [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| RunDialog([DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) dbGate, `bool` changeSourceControls) | `bool` | Shows the dialog. |
