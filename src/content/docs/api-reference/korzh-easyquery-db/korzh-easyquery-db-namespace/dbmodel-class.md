---
title: DbModel class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class
sidebar:
  order: 100
---

Database-related implementation of [Korzh.EasyQuery.DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) class.  In addition to the basic data it contains also list of database tables and the links between them.
```csharp
public class Korzh.EasyQuery.Db.DbModel
    : DataModel

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbModel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DbParams | [DbParameters](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) | Gets the [Korzh.EasyQuery.Db.DbParameters](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) object that represents different options of database linked with current data model. | 
| IsEmpty | `bool` | Gets a value indicating wether model is empty; | 
| Links | [TableLinkStore](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinkstore-class) | List of links between the model tables. | 
| PrimaryTableName | `string` | The name of the primary which will be used as a "root" table for this query (regardless it's used already in any column/condition or not) | 
| StoreDbParams | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbModel.DbParams](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) will be store in data model definition file. | 
| TableCategories | [TableCategoryList](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategorylist-class) | Gets the list of table categories. | 
| Tables | [TableStore](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablestore-class) | Gets list of data model tables. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEntityAttr([DbEntityAttrDescriptor](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattrdescriptor-class) desc) | [DbEntityAttr](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) | Adds a new attribute to the model. | 
| AssignEntityAttrID([MetaEntityAttr](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) attr) | `void` | Assigns the default ID for entity attribute. | 
| Clear() | `void` | Clears this instance. | 
| CreateEntityAttr([DbEntityAttrDescriptor](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattrdescriptor-class) desc) | [DbEntityAttr](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) | Creates the entity attribute. Used for creating entity attributes while building the model | 
| CreateEntityAttrCore([MetaEntity](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) entity, [EntityAttrKind](///easyquery/docs/api-reference/easydata-core/easydata-namespace/entityattrkind-enum) kind) | [MetaEntityAttr](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| CreateNullOperator() | [Operator](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the 'null' operator - a special operator which is used when a real operator can't be found (e.g. wrong ID) | 
| CreateOperator() | [Operator](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the operator. Used for creating objects while building the model | 
| CreateOperator(`string` id, `string` caption, `string` expr, `string` format) | [Operator](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the operator. Used for creating objects while building the model | 
| CreateQuery([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery = <span style='color: blue'>null</span>) | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates a Query object associated with this model | 
| CreateTableAlias([DbTable](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtable-class) fromTable, `string` aliasName, `bool` createEntity = True, `string` entityName = <span style='color: blue'>null</span>, `Func`&lt;[TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class), `bool`&gt; linkFilter = <span style='color: blue'>null</span>, `Func`&lt;[DbEntityAttr](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class), `bool`&gt; entityAttrFilter = <span style='color: blue'>null</span>) | [DbTable](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtable-class) | Creates table alias from the table. | 
| OnModelChanged() | `void` | Called after the model has been changed. | 
| OnModelLoaded() | `void` | Called after the model has been loaded from some file or string. | 
| ReadOneModelPropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one model property from JSON (asynchronous way). | 
| SetTableCategory([Table](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table, `string` categoryName) | `bool` | Sets the category of the table. Creates a new category if the specified one does not exist yet. | 
| UpdateTableCategories() | `void` | Updates the categories in tables (usually after the loading). | 
| WriteContentToJsonAsync(`JsonWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of DbMomdel to JSON (asynchronous way). |
