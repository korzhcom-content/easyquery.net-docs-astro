---
title: AutoLinker class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/autolinker-class
---


```csharp
public class Korzh.EasyQuery.Db.AutoLinker

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| AutoLinker([DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) dbGate) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ProgressIndicator | [IProgressIndicator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/iprogressindicator-interface) | Gets or sets the progress indicator object.  This property is used to show progress for some time consuming operations performed inside the model | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Link() | `void` | This procedure finds the links between tables listed in the model (based on field names and types) and then add found links into the <see cref="!:Links" /> list. |