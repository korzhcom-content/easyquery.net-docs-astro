---
title: IEqAuthProvider interface
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Services namespace/ieqauthprovider-interface
---


Defines the functions necessary to check the authorization status of the current user  over EasyQuery actions
```csharp
public interface Korzh.EasyQuery.Services.IEqAuthProvider

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | IsAuthorizedAsync(`EasyQueryManager` eqManager, `String` action) | Determines whether the current user can get access to the the specified action. |