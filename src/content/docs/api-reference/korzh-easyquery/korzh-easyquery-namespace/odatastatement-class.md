---
title: ODataStatement class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/odatastatement-class
---


Represents the result of ODataQueryBuilder's work.  Implements the [Korzh.EasyQuery.QueryStatement](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querystatement-class)
```csharp
public class Korzh.EasyQuery.ODataStatement
    : QueryStatement

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ODataStatement() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ODataQuery | `string` | Gets or sets the ODATA query. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetStatement() | `string` | Returns the ODATA query statement. |