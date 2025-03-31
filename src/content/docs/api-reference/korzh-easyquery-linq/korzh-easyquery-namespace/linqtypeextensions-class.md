---
title: LinqTypeExtensions class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-namespace/linqtypeextensions-class
---

Contains different extension functions for working with refrection and types
```csharp
public static class Korzh.EasyQuery.LinqTypeExtensions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateType(<span style='color: blue'>this</span> `TypeBuilder` builder) | `Type` | Creates the type. | 
| GetConstructor(<span style='color: blue'>this</span> `Type` type, `Type[]` types) | `ConstructorInfo` | Searches for a public instance constructor whose parameters match the types in  the specified array. | 
| GetDisplayName(<span style='color: blue'>this</span> `PropertyInfo` pi) | `string` | Returns the display name of the property.  This function tries to get the name defined by Display or DisplayName attributes.  If any of these attributes is not defined - then the property name is returned. | 
| GetFields(<span style='color: blue'>this</span> `Type` type) | `FieldInfo[]` | Gets the list of fields for the specified type. | 
| GetGenericArguments(<span style='color: blue'>this</span> `Type` type) | `Type[]` | Gets the generic arguments (the list of types) for the specified type. | 
| GetInterfaces(<span style='color: blue'>this</span> `Type` type) | `IEnumerable`&lt;`Type`&gt; | Gets the list of interfaces for the specified type. | 
| GetMethod(<span style='color: blue'>this</span> `Type` type, `string` methodName) | `MethodInfo` | Searches for the public method with the specified name. | 
| GetMethod(<span style='color: blue'>this</span> `Type` type, `string` methodName, `Type[]` types) | `MethodInfo` | Searches for the public method with the specified name. | 
| GetProperties(<span style='color: blue'>this</span> `Type` type) | `PropertyInfo[]` | Gets the list of properties for the specified type. | 
| GetProperties(<span style='color: blue'>this</span> `Type` type, `BindingFlags` bindingFlags) | `PropertyInfo[]` | Gets the list of properties for the specified type. | 
| GetProperty(<span style='color: blue'>this</span> `Type` type, `string` name) | `PropertyInfo` | Gets the property info for the specified type and property name. | 
| GetTypeDisplayName(<span style='color: blue'>this</span> `Type` type) | `string` | Gets the display name of the type.  This function tries to get the name defined by Entity or EntityName attributes.  If any of these attributes is not defined - then the type name is returned. | 
| IsEnumerable(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is enumerable (supports `System.Collections.Generic.IEnumerable` interface. | 
| IsEnumerableOfSimpleType(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is an enumerable of some simple type . | 
| IsGenericEnumerable(<span style='color: blue'>this</span> `Type` type) | `bool` | Determines whether the specified type is a generic enumerable. | 
| IsQueryable(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type implements `System.Linq.IQueryable` interface. |