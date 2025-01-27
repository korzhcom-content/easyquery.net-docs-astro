---
title: ObjectModelType class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/objectmodeltype-class
---


Represents a vertex of the entity graph defined in `Korzh.EasyQuery.Linq.Graph`.  Used in [Korzh.EasyQuery.DataModel.LoadFromContext(System.Type)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) method
```csharp
public class Korzh.EasyQuery.ObjectModelType
    : IEquatable<ObjectModelType>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ObjectModelType(`Type` type) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ObjectModelType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Type | `Type` | Gets or sets the type. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Equals([ObjectModelType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) other) | `bool` | Indicates whether the current object is equal to another object of the same type. | 
| Equals(`object` obj) | `bool` | Indicates whether the current object is equal to another object of the same type. | 
| GetHashCode() | `int` | Returns a hash code for this instance. |