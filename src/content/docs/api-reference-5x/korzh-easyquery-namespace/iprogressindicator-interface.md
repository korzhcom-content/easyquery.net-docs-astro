---
title: IProgressIndicator interface
slug: api-reference-5x/korzh-easyquery-namespace/iprogressindicator-interface
sidebar:
  order: 100
---

This interface is used to assign progress indicator for different time-consuming operations
```csharp
public interface Korzh.EasyQuery.IProgressIndicator

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | SetMinMax(`Int32` min, `Int32` max) | Sets the minimum and maximum values of progress indicator. | 
| `void` | SetPosition(`Int32` pos) | Moves the progress indicator to the specified position. |
