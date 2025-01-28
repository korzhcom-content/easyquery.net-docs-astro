---
title: IConnectionStringBuilderDlg interface
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Db namespace/iconnectionstringbuilderdlg-interface
---


Defines  methods for ConnectionString Builder dialog
```csharp
public interface Korzh.EasyQuery.Db.IConnectionStringBuilderDlg

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ConnectionString | Gets the connection string. | 
| `String` | DBGateName | Gets the name of [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) object. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | RunDialog(`DbGate` dbGate, `Boolean` changeSourceControls) | Shows the dialog. |