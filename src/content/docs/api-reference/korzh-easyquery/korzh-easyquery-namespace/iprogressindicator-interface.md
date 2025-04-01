---
title: IProgressIndicator interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/iprogressindicator-interface
sidebar:
  order: 100
---

This interface is used to assign progress indicator for different time-consuming operations
```csharp
public interface Korzh.EasyQuery.IProgressIndicator

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| SetMinMax(`int` min, `int` max) | `void` | Sets the minimum and maximum values of progress indicator. | 
| SetPosition(`int` pos) | `void` | Moves the progress indicator to the specified position. |
