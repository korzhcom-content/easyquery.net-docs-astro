---
title: PageNavigatorTagHelper class
slug: >-
  api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/pagenavigatortaghelper-class
sidebar:
  order: 100
---

Represents a tag helper which allows to render page navigator for filtering scenario.  Implements the `Microsoft.AspNetCore.Razor.TagHelpers.TagHelper`
```csharp
public class Korzh.EasyQuery.AspNetCore.PageNavigatorTagHelper
    : TagHelper

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| PageNavigatorTagHelper() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Paging | [IPaging](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ipaging-interface) | Gets or sets the paging options. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Process(`TagHelperContext` context, `TagHelperOutput` output) | `void` | Synchronously executes the `Microsoft.AspNetCore.Razor.TagHelpers.TagHelper` with the given `` and  ``. |
