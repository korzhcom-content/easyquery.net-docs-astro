---
title: DbModel class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class
---


Database-related implementation of [Korzh.EasyQuery.DataModel](/api-reference-5x/korzh-easyquery-namespace/datamodel-class) class.  In addition to the basic data it contains also list of database tables and the links between them.
```csharp
public class Korzh.EasyQuery.Db.DbModel
    : DataModel

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, String>` | EntitySetNameType |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbParameters` | DbParams | Gets the [Korzh.EasyQuery.Db.DbParameters](/api-reference-5x/korzh-easyquery-db-namespace/dbparameters-class) object that represents different options of database linked with current data model. | 
| `String` | EntityContainerName | Gets the name of the default entity container. This value is used for the models created from EDMX files (Entity Framework models) | 
| `ICollection<DbEntityLink>` | EntityLinks | Gets the entity links. | 
| `Boolean` | IsLoadedFromDbContext | Gets or sets a value indicating whether this instance is loaded from a DbContext object. | 
| `LinkStore` | Links | List of links between the model tables. | 
| `String` | PrimaryTableName | The name of the primary which will be used as a "root" table for this query (regardless it's used already in any column/condition or not) | 
| `Boolean` | StoreDbParams | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbModel.DbParams](/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class) will be store in data model definition file. | 
| `TableCategoryList` | TableCategories | Gets the list of table categories. | 
| `TableStore` | Tables | Gets list of data model tables. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DbEntityAttr` | AddEntityAttr(`Entity` entity, `String` expression, `String` caption = <span style='color: blue'>null</span>, `Boolean` isVirtual = False, `DataType` dataType = Int32, `Int32` size = 0, `Table[]` tables) | Adds a new attribute to the model. | 
| `void` | AssignEntityAttrID(`EntityAttr` attr) | Assigns the default ID for entity attribute. | 
| `void` | AutoLinking(`DbGate` dbGate) | This procedure finds the links between tables listed in the model (based on field names and types) and then add found links into the [Korzh.EasyQuery.Db.DbModel.Links](/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class) list. | 
| `List<Entity>` | CalcEntityPath(`Entity` entity1, `Entity` entity2) | Finds a path between two entities and return it to caller as list of Enityt objects.  Returns null if there is no any path between specified entities. | 
| `Path` | CalcPath(`Table` table1, `Table` table2) | CalcPath method finds a path between tables and return it to caller or  returns null if there is no any path between specified tables. | 
| `void` | Clear() | Clears this instance. | 
| `EntityAttr` | CreateEntityAttr(`Entity` parentEntity = <span style='color: blue'>null</span>, `Boolean` isVirtual = False) | Creates an entity attribute. Used for creating entity attributes while building the model | 
| `Operator` | CreateNullOperator() | Creates the 'null' operator - a special operator which is used when a real operator can't be found (e.g. wrong ID) | 
| `Operator` | CreateOperator() | Creates the operator. Used for creating objects while building the model | 
| `Operator` | CreateOperator(`String` id, `String` caption, `String` expr, `String` format) | Creates the operator. Used for creating objects while building the model | 
| `Query` | CreateQuery(`Query` parentQuery = <span style='color: blue'>null</span>) | Creates a Query object associated with this model | 
| `DbTable` | CreateTableAlias(`DbTable` fromTable, `String` aliasName, `Boolean` createEntity = True, `String` entityName = <span style='color: blue'>null</span>, `Func<TableLink, Boolean>` linkFilter = <span style='color: blue'>null</span>, `Func<DbEntityAttr, Boolean>` entityAttrFilter = <span style='color: blue'>null</span>) | Creates table alias from the table. | 
| `List<String>` | ExcludeFieldsFromExpr(`String` expr) | Excludes field references from some SQL expression. | 
| `void` | ExtractTablesByExpr(`String` expr, `TableList` tableList) | Extracts all tables used in some SQL expression (like Table1.FieldName1 + Table2.FieldName2) and add them into tableList. | 
| `void` | FillByDataTable(`DataTable` dataTable, `Boolean` createEntity) | Fills the [Korzh.EasyQuery.Db.DbModel](/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class) by database table represented by `System.Data.DataTable` object. | 
| `void` | FillByDbGate(`DbGate` dbGate, `DbConnectionLoaderOptions` options = <span style='color: blue'>null</span>) | Fills the model by database gate. | 
| `DbEntityLink` | FindLinkByEntities(`Entity` entity1, `Entity` entity2) | Finds the link by 2 entities. | 
| `EntityAttr` | GetDefaultUICAttribute() | Returns the first attribute in the Root entity with UseInConditions set to true.  This attribute is shown by default for new condition. | 
| `void` | InitModelLoading() | Inits the model loading. | 
| `void` | LoadFromConnection(`DbConnection` connection, `DbConnectionLoaderOptions` options = <span style='color: blue'>null</span>) | Populates model by information from database connection. | 
| `void` | LoadNode(`XmlReader` reader, `ModelReadWriteOptions` rwOptions) | Loads the root node of the model. Can be overriden for loading additional root nodes in [Korzh.EasyQuery.DataModel](/api-reference-5x/korzh-easyquery-namespace/datamodel-class)'s descendants | 
| `void` | LoadOneModelAtrributeFromXmlReader(`XmlReader` reader) | Loads one data model's attribute from the main XML node (DataModel) | 
| `void` | OnModelChanged() | Called after the model has been changed. | 
| `void` | OnModelLoaded() | Called after the model has been loaded from some file or string. | 
| `EqExpression` | PostProcessQueryExpr(`QueryExpr` queryExpr) | Post process QueryExpr during the loading (to support the old format of XML query files) | 
| `void` | ReadOneModelPropFromJson(`JsonReader` reader, `String` propName) | Reads one model property from JSON. | 
| `Task` | ReadOneModelPropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one model property from JSON (asynchronous way). | 
| `void` | ResetEntityContainer() |  | 
| `void` | SaveAttributes(`XmlWriter` writer, `ModelReadWriteOptions` options) | Saves the attributes of the model. Can be overriden for storing additional attributes | 
| `void` | SaveDbParamsNode(`XmlWriter` writer) | Saves the [Korzh.EasyQuery.Db.DbModel.DbParams](/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class) node. | 
| `void` | SaveLinksNode(`XmlWriter` writer) | Saves links using `System.Xml.XmlWriter` object. | 
| `void` | SaveNodes(`XmlWriter` writer, `ModelReadWriteOptions` options) | Saves the root nodes of the model. Can be overriden for storing additional nodes | 
| `void` | SaveTablesNode(`XmlWriter` writer) | Saves tables using `System.Xml.XmlWriter` object. | 
| `Boolean` | SetTableCategory(`Table` table, `String` categoryName) | Sets the category of the table. Creates a new category if the specified one does not exist yet. | 
| `void` | SplitTablesIntoAliases() | Splits tables into aliases | 
| `void` | WriteContentToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of DbMomdel to JSON. | 
| `Task` | WriteContentToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of DbMomdel to JSON (asynchronous way). |