---
title: EqSessionCachingService class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Services namespace/eqsessioncachingservice-class
---


Represents an implemenation of [Korzh.EasyQuery.Services.IEqCachingService](/api-reference-5x/korzh-easyquery-services-namespace/ieqcachingservice-interface)  which uses Session for storing cached objects.
```csharp
public class Korzh.EasyQuery.Services.EqSessionCachingService
    : IEqCachingService

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetValue(`String` key) | Gets the value from the cache. | 
| `void` | PutValue(`String` key, `String` value) | Puts the value to the cache |