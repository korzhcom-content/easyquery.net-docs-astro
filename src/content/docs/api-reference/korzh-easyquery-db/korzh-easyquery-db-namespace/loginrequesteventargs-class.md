---
title: LoginRequestEventArgs class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/loginrequesteventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Db.DbGate.LoginRequest](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) event
```csharp
public class Korzh.EasyQuery.Db.LoginRequestEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LoginRequestEventArgs(`string` userID, `string` password) | `void` | Initializes a new instance of the `LoginRequestEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Password | `string` | Gets or sets the "Password" parameter. | 
| UserID | `string` | Gets or sets the "User ID" parameter. |
