---
title: IPagedList<T> interface
slug: api-reference-5x/korzh-easyquery-services-namespace/ipagedlist-t--interface
sidebar:
  order: 100
---

Implements both `IPaging` and `System.Collections.Generic.IEnumerable` interfaces.  It's used to return paged list of objects.
```csharp
public interface Korzh.EasyQuery.Services.IPagedList<T>
    : IEnumerable<T>, IEnumerable, IPaging

```
