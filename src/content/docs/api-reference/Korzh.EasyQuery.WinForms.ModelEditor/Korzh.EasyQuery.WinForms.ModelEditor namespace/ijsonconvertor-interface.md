---
title: IJsonConvertor interface
slug: api-reference/Korzh.EasyQuery.WinForms.ModelEditor/Korzh.EasyQuery.WinForms.ModelEditor namespace/ijsonconvertor-interface
---


Exposes a JSON serializer / deserializer
```csharp
public interface Korzh.EasyQuery.WinForms.ModelEditor.IJsonConvertor

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| DeserializeObject(`string` json) | `object` | Deserializes the object from JSON string. | 
| SerializeObject(`object` obj) | `string` | Serializes the object in JSON. |