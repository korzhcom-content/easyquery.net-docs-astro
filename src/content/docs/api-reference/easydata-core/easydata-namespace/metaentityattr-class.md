---
title: MetaEntityAttr class
slug: api-reference/easydata-core/easydata-namespace/metaentityattr-class
sidebar:
  order: 100
---

Represents one entity attribute of data model.
```csharp
public class EasyData.MetaEntityAttr
    : IComparable<MetaEntityAttr>

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| expr | `string` | Attribute expression | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Caption | `string` | Gets or sets the attribute's caption. | 
| ColumnName | `string` | Gets or sets the name of the column associated with property (in EntityFramework context definition). | 
| DataAttr | [MetaEntityAttr](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| DataType | [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the type of data represented by attribute. | 
| DefaultEditor | [ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets or sets the default value editor. | 
| Description | `string` | Gets or sets the description of entity attribute. | 
| DisplayFormat | `string` | The display format for the attribute. | 
| Entity | [MetaEntity](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) | Gets or sets the entity. | 
| Expr | `string` | Gets or sets the attribute expression. | 
| FullExpr | `string` | Gets the full expression of entity attribute. | 
| Id | `string` | Gets or sets the ID. | 
| Index | `int` | Gets or sets the index of EntityAttr | 
| IsEditable | `bool` | Gets ot sets a value indicating wether Attribute is editable | 
| IsForeignKey | `bool` | Gets ot sets a value indicating wether Attribute is a foreign key | 
| IsNullable | `bool` | Gets or sets a value indicating whether this attribute is nullable. | 
| IsPrimaryKey | `bool` | Gets ot sets a value indicating wether Attribute is a primary key | 
| IsVirtual | `bool` | Indicates if this attribute is a virtual (calculate) one. | 
| IsVisible | `bool` | Gets ot sets a value indicating wether Attribute is visible | 
| Kind | [EntityAttrKind](/easyquery/docs/api-reference/easydata-core/easydata-namespace/entityattrkind-enum) |  | 
| LookupAttr | [MetaEntityAttr](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Gets the lookup attribute. | 
| LookupDataAttribute | [MetaEntityAttr](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Gets or sets the data attribute in the lookup entity (where the actual values will be saved to). | 
| LookupEntity | [MetaEntity](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) |  | 
| Model | [MetaData](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the model. | 
| PropInfo | `PropertyInfo` | Gets or sets the property information. | 
| PropName | `string` | Gets or sets the name of the property. | 
| ShowInLookup | `bool` | Gets or sets a value indicating wether Attribute is shown in LookUp editor | 
| ShowOnCreate | `bool` | Gets ot sets a value indicating wether Attribute is visible during the creation | 
| ShowOnEdit | `bool` | Gets ot sets a value indicating wether Attribute is visible during the edit | 
| ShowOnView | `bool` | Gets ot sets a value indicating wether Attribute is visible in a view mode (in grid) | 
| Size | `int` | Gets or sets the size of data represented by attribute. | 
| UserData | `object` | Gets or sets the user data object assosiated with attribute. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CheckModel() | `void` | Checks the Model property and raises an exception if it's null. | 
| CompareWithExpr(`string` expr) | `bool` | Compares attribute's expression with the one passed in the parameter. | 
| CopyFrom([MetaEntityAttr](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) attr) | `void` | Copies all attribute's properties from another entity attribute | 
| GetDataAttrFullExpr() | `string` | Gets full expression of the entity attribute. | 
| GetFullCaption(`string` separator =  ) | `string` | Gets the full name of the attribute (including the name of the parent entity). | 
| GetValueEditor(`Nullable`&lt;[DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum)&gt; type = <span style='color: blue'>null</span>) | [ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) |  | 
| OnModelAssignment() | `void` | Called when model is assigned. | 
| ProcessVirtualExpr() | `void` | Scans attribute's expression for new parameters, tables, etc | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the attribute content from JSON (asynchronous way). | 
| ReadPropertyFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one attribute's property from JSON (asynchronous way). | 
| SetDefaultEditorWithoutChecking([ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` | Sets default editor without adding it to model. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Writes attribute properties to JSON (asynchronous way). |
