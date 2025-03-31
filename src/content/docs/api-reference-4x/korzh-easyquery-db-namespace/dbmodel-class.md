---
title: DbModel class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class
---

Database-related implementation of [Korzh.EasyQuery.DataModel](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/datamodel-class) class.  In addition to the basic data it contains also list of database tables and the links between them.
```csharp
public class Korzh.EasyQuery.Db.DbModel
    : DataModel

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, String>` | EntitySetNameType |  | 
| `LinkStore` | Links | List of [Korzh.EasyQuery.Db.DbModel](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) links between tables. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbParameters` | DbParams | Gets the [Korzh.EasyQuery.Db.DbParameters](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbparameters-class) object that represents different options of database linked with current data model. | 
| `String` | EntityContainerName | Gets the name of the default entity container. This value is used for the models created from EDMX files (Entity Framework models) | 
| `ICollection<DbEntityLink>` | EntityLinks | Gets the entity links. | 
| `Boolean` | IsLoadedFromDbContext | Gets or sets a value indicating whether this instance is loaded from a DbContext object. | 
| `String` | PrimaryTableName | The name of the primary which will be used as a "root" table for this query (regardless it's used already in any column/condition or not) | 
| `Boolean` | StoreDbParams | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbModel.DbParams](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) will be store in data model definition file. | 
| `TableCategoryList` | TableCategories | Gets the list of table categories. | 
| `TableList` | Tables | Gets list of data model tables. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignEntityAttrID(`EntityAttr` attr) | Assigns the default ID for entity attribute. | 
| `void` | AutoLinking(`DbGate` dbGate) | This procedure finds the links between tables listed in the model (based on field names and types) and then add found links into the [Korzh.EasyQuery.Db.DbModel.Links](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) list. | 
| `List<DbEntity>` | CalcEntityPath(`DbEntity` entity1, `DbEntity` entity2) | Finds a path between two entities and return it to caller as list of Enityt objects.  Returns null if there is no any path between specified entities. | 
| `Path` | CalcPath(`Table` table1, `Table` table2) | CalcPath method finds a path between tables and return it to caller or  returns null if there is no any path between specified tables. | 
| `void` | Clear() | Clears this instance. | 
| `Entity` | CreateEntity() | Creates the entity. | 
| `EntityAttr` | CreateEntityAttr() | Creates the entity attribute. Used for creating entity attributes while building the model | 
| `EntityAttr` | CreateNullAttribute() | Creates the null attribute. | 
| `Operator` | CreateNullOperator() | Creates the 'null' operator - a special operator which is used when a real operator can't be found (e.g. wrong ID) | 
| `Operator` | CreateOperator() | Creates the operator. Used for creating objects while building the model | 
| `Operator` | CreateOperator(`String` id, `String` caption, `String` expr, `String` format) | Creates the operator. Used for creating objects while building the model | 
| `Entity` | CreateRootEntity() | Creates the root entity.  This method can be overriden in descendant classes to retrun the object of appropriate class (e.g. DbEntity). | 
| `List<String>` | ExcludeFieldsFromExpr(`String` expr) | Excludes field references from some SQL expression. | 
| `void` | ExtractTablesByExpr(`String` expr, `TableList` tableList) | Extracts all tables used in some SQL expression (like Table1.FieldName1 + Table2.FieldName2) and add them into tableList. | 
| `void` | FillByDataTable(`DataTable` dataTable, `Boolean` createEntity) | Fills the [Korzh.EasyQuery.Db.DbModel](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) by database table represented by `System.Data.DataTable` object. | 
| `void` | FillByDbGate(`DbGate` dbGate, `FillModelOptions` options) | Fills the model by database gate. | 
| `void` | FillByDbGate(`DbGate` dbGate, `List<String>` includeTables, `FillModelOptions` options) | Fills the model by database gate. | 
| `DbEntityLink` | FindLinkByEntities(`DbEntity` entity1, `Entity` entity2) | Finds the link by 2 entities. | 
| `EntityAttr` | GetDefaultUICAttribute() | Returns the first attribute in the Root entity with UseInConditions set to true.  This attribute is shown by default for new condition. | 
| `void` | InitModelLoading() | Inits the model loading. | 
| `void` | LoadFromConnection(`DbConnection` connection, `FillModelOptions` options) | Populates model by information from database connection. | 
| `void` | LoadFromDbml(`String` dbmlFile) | Loads the model from DBML file (Entity Framework model format). | 
| `void` | LoadFromEdmx(`XDocument` doc) | Loads model from EDMX document. | 
| `void` | LoadFromEdmx(`String` edmxFile) | Loads model from EDMX document. | 
| `void` | LoadNode(`XmlReader` reader, `RWOptions` rwOptions) | Loads the root node of the model. Can be overriden for loading additional root nodes in [Korzh.EasyQuery.DataModel](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/datamodel-class)'s descendants | 
| `void` | LoadOneModelAtrributeFromXmlReader(`XmlReader` reader) | Loads one data model's attribute from the main XML node (DataModel) | 
| `void` | OnModelChanged() | Called after the model has been changed. | 
| `void` | OnModelLoaded() | Called after the model has been loaded from some file or string. | 
| `void` | ResetEntityContainer() |  | 
| `void` | SaveAttributes(`XmlWriter` writer, `RWOptions` options) | Saves the attributes of the model. Can be overriden for storing additional attributes | 
| `void` | SaveDbParamsNode(`XmlWriter` writer) | Saves the [Korzh.EasyQuery.Db.DbModel.DbParams](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) node. | 
| `void` | SaveLinksNode(`XmlWriter` writer) | Saves links using `System.Xml.XmlWriter` object. | 
| `void` | SaveNodes(`XmlWriter` writer, `RWOptions` options) | Saves the root nodes of the model. Can be overriden for storing additional nodes | 
| `void` | SaveTablesNode(`XmlWriter` writer) | Saves tables using `System.Xml.XmlWriter` object. | 
| `Boolean` | SetTableCategory(`Table` table, `String` categoryName) | Sets the category of the table. Creates a new category if the specified one does not exist yet. |