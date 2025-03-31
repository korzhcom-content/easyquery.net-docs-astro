---
title: Changelog
slug: release-notes/changelog
---

> The JS version changelog is available by [this link](//easyquery/docs/easyquery/docs/).

<div id="changelog-start"></div>



<div id="eq-net/7.3.3" data-released="2024-04-14"></div>

## Version 7.3.3

<div class="aist-article-updated"><span>2024-04-14</span></div>


<div id="eq-net/7.3.1" data-released="2024-03-04"></div>

## Version 7.3.1

<div class="aist-article-updated"><span>2024-03-04</span></div>


<div id="eq-net/7.3.0" data-released="2024-02-26"></div>

## Version 7.3.0

<div class="aist-article-updated"><span>2024-02-26</span></div>


<div id="eq-net/7.2.5" data-released="2024-01-09"></div>

## Version 7.2.5-rc03

<div class="aist-article-updated"><span>2024-01-09</span></div>


- __[New]__: .NET 8.0 support    

- __[Fix]__:  "Just sorted" columns were not added to the GROUP BY clause    

- __[Fix]__: Aggregates calculation for non-numeric data    

- __[Fix]__: The problem with "Index out of range" exception on exporting aggregated data    

- __[Fix]__: The problem with DBNull values processing on exporting aggregated data    

- __[Fix]__: Index was out of range problem on aggregation    

<div id="eq-net/7.2.4" data-released="2023-11-15"></div>

## Version 7.2.4

<div class="aist-article-updated"><span>2023-11-15</span></div>


- __[New]__: Add Globals to AspNet4 and AspNetCore packages    

- __[New]__: AddBOM option in CsvDataExportSettings and HtmlDataExportSettings    

- __[Upd]__: Query builder is executed before the PreFetch call now    

- __[Upd]__: Add RowLimit property to ExportSeetings    

- __[Fix]__: Wrong column number in the ORDER BY if there are disabled columns in the query    

- __[Fix]__: SqlQueryBuilder threw an exception on queries with constant columns    

- __[Fix]__: BuildQuery method in LinqQueryBuilder    

- __[Fix]__: Query parameters generation in sub-queries    

- __[Fix]__: Different order on the webpage and in the exported result set    

- __[Fix]__: Auto conversion of the old special date/time value editors to new ones    

- __[Fix]__: Wrong behavior on operand's editor loading from JSON model files    

- __[Fix]__: LINQ query builder didn't process DateTimeOffset fields correctly    

- __[Fix]__: Wrong value of dates in non-UTC timezones in result sets    

<div id="eq-net/7.2.3" data-released="2023-03-15"></div>

## Version 7.2.3

<div class="aist-article-updated"><span>2023-03-15</span></div>


- __[New]__: Add UseUtcTime to EasyQueryOptions    

- __[New]__: RemoveThis method in Condition class    

- __[New]__: TimezoneOffset property in QueryBuilderOptions    

- __[New]__: Condition.Find method    

- __[New]__: IsModified property in Query class    

- __[New]__: QueryChanged event in Query class    

- __[New]__: New method: Query.ChangeColumnAttr(column, attrId)    

- __[New]__: NextNDays, NextNMonths, NextNYears, NextNHours operators    

- __[New]__: WriteExtraContentAsync method in EasyQueryApiHandler    

- __[New]__: Add AuxData property to EasyQueryManager    

- __[New]__: Add UseOuterJoins option to DbContextModelExtractorOptions    

- __[New]__: A possibility to add a "const = const" condition    

- __[Upd]__: DbConnectionModelLoader constructor now takes a connection resolver in the first parameter instead of actual connection object    

- __[Upd]__: DME auto-select newly added table    

- __[Upd]__: Add extra information to the response payload if an error occur on EasyQuery API request processing    

- __[Fix]__: NullReferenceException on DbContext model loading    

- __[Fix]__: Unhandled exception on URL click in the New Model dialog    

- __[Fix]__: Proper Null values processing in GetDbColumnName function    

- __[Fix]__: ColumnsPanel rendered a new column twice in WinForms edition    

- __[Fix]__: Wrong behavior of old "special dates" value editors    

- __[Fix]__: Problem with loading special dates operators    

- __[Fix]__: Query.AddCollumn method didn't process LookupAttr properly    

- __[Fix]__: SpecDateValues editor (from old versions) was not processed correctly    

- __[Fix]__: IsNullable was not set propery in the DbContextModelLoader    

- __[Fix]__: DbCommandTuner was never called    

- __[Fix]__: NullRefereceException for some value lists in data-filtering scenario    

- __[Fix]__: EqListValueEditor attribute - listName and Id params processing    

<div id="eq-net/7.2.2" data-released="2022-07-06"></div>

## Version 7.2.2

<div class="aist-article-updated"><span>2022-07-06</span></div>

- __[New]__: A possibility to add a "const = const" condition

- __[Upd]__: Add Attribute ID field to DME

- __[Upd]__: Update to EasyData 1.4.7

- __[Fix]__: EqListValueEditor attribute - listName and Id params processing

- __[Fix]__: Problem with decimal (currency) fields in Sqlite

- __[Fix]__: NullRefereceException for some value lists in data-filtering scenario


<div id="eq-net/7.2.1" data-released="2022-02-24"></div>

## Version 7.2.1

<div class="aist-article-updated"><span>2022-02-24</span></div>


- __[New]__: LastNHours, LastNDays, LastNMonths operators    

- __[New]__: UseNameColumnsInLookups option in DbConnectionModelLoaderOptions    

- __[New]__: IEasyQueryConfigurator interface. It allows to move EasyQuery middleware setup in a separate "Configurator" class    

- __[New]__: DbModel.DbParams.ShowDbNameForTables option    

- __[New]__: WPF ColumnsPanel now allows to use drag-n-drop to change columns order    

- __[New]__: Read EasyQuery.lck file to get the license key    

- __[Upd]__: Add Table Priority field to DME    

- __[Upd]__: Add IsNull/IsNotNull operators for all key fields to support LEFT JOIN queries    

- __[Upd]__: Sorted columns order is syncronized by default with the order of query columns    

- __[Fix]__: Process IsNullable on data model creation in DME    

- __[Fix]__: KeyNotFoundException on exporting datasets with COUNT aggregation on non-numeric fields    

<div id="eq-net/7.2.0" data-released="2022-01-31"></div>

## Version 7.2.0

<div class="aist-article-updated"><span>2022-01-31</span></div>


- __[New]__: Now we can use AddDays, AddMonths, and AddYears functions in attribute expressions    

- __[New]__: `modelId` and `extra` properties in QueryListItem    

- __[New]__: DateBeforeSpecial and DateAfterSpecial default operators in data models    

- __[New]__: Add `format` parameter to data export tuner    

- __[New]__: Add .NET 6.0 target for some EasyQuery packages    

- __[New]__: IsObligatory property in TableLink    

- __[Upd]__: Make Settings and GetQueryFolderPath methods in FileQueryStore protected    

- __[Upd]__: string[] is used for RazorUI.Globals.ExportFormats instead of comma-separated string    

- __[Upd]__: Add Table Priority field to DME    

- __[Fix]__: WPF QueryPanel in the SubQuery dialog now copies all the settings from the parent query panel    

- __[Fix]__: Exception on export when we have zero group columns in aggregation settings    

- __[Fix]__: EasyQueryManager couldn't get a connection from a DbContext for SQLite    



<div id="eq-net/7.1.2" data-released="2021-10-15"></div>

## Version 7.1.2

<div class="aist-article-updated"><span>2021-10-15</span></div>


- __[New]__: AutoOuterJoins option: converts inner joins to outer ones automatically when necessary    

- __[Upd]__: A possibility to modify table's properties (name, schema, db) in DME    

- __[Fix]__: Wrong cast for the record count query that returns more than Int64    

- __[Fix]__: Wrong data type for aggregate columns    

- __[Fix]__: Hide MIN and MAX aggregate functions for boolean columns    

- __[Fix]__: NullReference exception on building SQL with custom columns    

- __[Fix]__: Replace full table paths with aliases in Custom SQL fields    

- __[Fix]__: Incorrect SQL when a custom column expression contains fields from different tables    

<div id="eq-net/7.1.1" data-released="2021-09-01"></div>

## Version 7.1.1

<div class="aist-article-updated"><span>2021-09-01</span></div>


- __[New]__: AggregationSettings.CaseSensitiveGroups option    

- __[Upd]__: Most of the method in SqlQueryBuilder class are protected virtual now    

- __[Upd]__: The latest version of [EasyData library](https://github.com/KorzhCom/EasyData) (1.3.4) is used now

- __[Fix]__: Issue with saving query in ASP.NET 4

- __[Fix]__: An error on virtual attribute expression processing

- __[Fix]__: `TimeZoneOffset` was not processed properly for LINQ queries

- __[Fix]__: Few fixes for aggregation logic introduced in 7.1.0

- __[Fix]__: Auto-generated parameterі were not cleared on `BuildSQL` / `BuildParamSQL` calls in `SqlQueryBuilder`  

 

<div id="eq-net/7.1.0" data-released="2021-07-27"></div>

## Version 7.1.0

<div class="aist-article-updated"><span>2021-07-27</span></div>


- __[New]__: `AddDbTable` method of `TableStore`    

- __[New]__: MergeEntities method in the DataModel class    

- __[Upd]__: DebugMode option    

- __[Upd]__: Add possibility to default format for type    

- __[Upd]__: Add `EnableAggrSelectInSubQuery` option for QueryPanel in WPF edition    

- __[Upd]__: Improve `AddLink` method of TableLinkStore to accept DbTable as parameters    

- __[Upd]__: Improve enum support    

- __[Upd]__: Support bool formatting.    

- __[Upd]__: INFO loging in EasyQueryManager and EasyQueryApiHandler    

- __[Upd]__: Make async operations cancelable via CancellationToken. ASP.NET Core middleware and ASP.NET Web API controller now support canceling operations on aborting the request    

- __[Fix]__: Incorrect rendering of the Operators / General tab in DME    

- __[Fix]__: Add a column alias in Count SQL (some DBs throw an error without it)    

- __[Fix]__: Wrong path search algorithm on SQL generation    

- __[Fix]__: Wrong behavior in DbModel.CreateTableAlias if createEntity == true    

- __[Fix]__: Wrong boolean literals for PostgreSQL    

- __[Fix]__: Bug with exception when add custom column to result set    

- __[Fix]__: TablePathFinder could add a surplus table sometime    


<div id="eq-net/7.0.11" data-released="2021-06-16"></div>

## Version 7.0.11

<div class="aist-article-updated"><span>2021-06-16</span></div>


- __[Fix]__: Null reference exception on loading model from a DbContext when a type per hierarchy (TPH) approach is used in EF6.

<div id="eq-net/7.0.10" data-released="2021-06-16"></div>

## Version 7.0.10

<div class="aist-article-updated"><span>2021-06-16</span></div>

- __[Fix]__: An error in the situation when the numbers of query columns and result set colums don't match.

<div id="eq-net/7.0.9" data-released="2021-05-28"></div>

## Version 7.0.9

<div class="aist-article-updated"><span>2021-05-28</span></div>

- __[Upd]__: Editing applied types for aggregate functions

- __[Fix]__: Issue with enum properties

- __[Fix]__: CROSS APPLY joins


<div id="eq-net/7.0.8" data-released="2021-05-21"></div>

## Version 7.0.8

<div class="aist-article-updated"><span>2021-05-21</span></div>


- __[Upd]__: Pass IEqResultSet into AfterColumnsAdded of ResultSetOptions    


<div id="eq-net/7.0.7" data-released="2021-04-22"></div>

## Version 7.0.7

<div class="aist-article-updated"><span>2021-04-22</span></div>


- __[Fix]__: Alias search index validation in table-list to prevent index out of range exception    

<div id="eq-net/7.0.6" data-released="2021-04-09"></div>

## Version 7.0.6

<div class="aist-article-updated"><span>2021-04-09</span></div>

- __[Upd]__:  Performance on loading table fields was improved for such DbGates: SqlServerGate, NpgSqlGate, MySqlGate, OdpCoreGate

- __[Upd]__: Prevent adding MetaEntity or MetaEntityAttr to the DataModel

- __[Upd]__: DataModel loading performance from JSON was improved

- __[Fix]__: CreateValueEditor in ModelEditorForm    

- __[Fix]__: Filling DbName for table in SqlServerGate

<div id="eq-net/7.0.5" data-released="2021-03-31"></div>

## Version 7.0.5

<div class="aist-article-updated"><span>2021-03-31</span></div>


- __[Fix]__: `DbGate` is disposable now and uses passed connection to LoadFromConnection `DbModel` extension instead of creating a new one.    


<div id="eq-net/7.0.4" data-released="2021-03-29"></div>

## Version 7.0.4

<div class="aist-article-updated"><span>2021-03-29</span></div>

- __[Upd]__: New signatures for DbEntityAttrDescriptor constructors
- __[Upd]__: Support totals during export
- __[Fix]__: Problem with AddConditions button in WinForms edition
- __[Fix]__: Setting display format during LoadFromEntityType.


<div id="eq-net/7.0.2" data-released="2021-03-23"></div>

## Version 7.0.2

<div class="aist-article-updated"><span>2021-03-23</span></div>


- __[New]__: Add `UseSchemas(schemas)` method to `DbConnectionModelLoaderOptions`.    
 
- __[Fix]__: Legacy paging behaviour    

- __[Fix]__: Wrong SQL error for Oracle DBs    

- __[Fix]__: Problem with method not found for NpgSql 5.0.x version in NpgSqlGate    

<div id="eq-net/7.0.1" data-released="2021-03-12"></div>

## Version 7.0.1

<div class="aist-article-updated"><span>2021-03-12</span></div>


- __[Fix]__: The list of entities was incorrectly filtered after opening Edit Sub-Query dialog    

- __[Fix]__: Wrong type of result columns when COUNT aggregate function is used    

- __[Fix]__: Remove surplus PreFetch on exporting    

- __[Fix]__: GetRecordCountAsync behaviour when there is no selected column in query    

- __[Fix]__: Null reference exception in GetOperand    

- __[Fix]__: Wrong behavior of Condition.Clone for conditions with sub-queries    

<div id="eq-net/7.0.0" data-released="2021-02-26"></div>

## Version 7.0.0

<div class="aist-article-updated"><span>2021-02-26</span></div>


- __[New]__: PDF and Excel exporters    

- __[New]__: DisplatFormat for EntityAttr    

- __[New]__: `eq-page-navigator` tag helper in ASP.NET Core    

- __[New]__: DataModel.Validate function that throws an exception if something is wrong with the model    

- __[New]__: AppliedTo property in AggrFunction - defines the list of types this aggregate function can be applied to    

- __[New]__: AutoResolveModelOnQueryLoad option in EasyQueryOptions    

- __[New]__: MapEasyQuery extension method    

- __[New]__: `SortAlphabetically` option when loading model from DbContext    

- __[New]__: Add policy support for DefaulteqauthProvider in ASP.NET Core    

- __[New]__: New CreateEntityAttr and AddEntityAttr methods of model that take descriptor    

- __[New]__: `AddColumn` method in Query to create column by descriptor    

- __[New]__: AddLink and UpdateLink methods in TableLinkStore    

- __[Upd]__: Rename `Column` -> `QueryColumn` and its events

- __[Upd]__: RazorUI options `ExportFormats`. Allows define formats to be used on client-side as comma-separated list    

- __[Upd]__: Pass columns in BeforeAddRow function. CreateRow is now virtual    

- __[Upd]__: Change LicenseKey endpoint logic. Add support for ASP.NET 4    

- __[Upd]__: Korzh.EasyQuery.WinForms.ModelEditor now supports .NET Core 3.1 and .NET 5    

- __[Upd]__: Make FileQueryStore more flexible for inheritance    

- __[Upd]__: Use `Microsoft.Data.SqlClient` package for SqlServerGate    

- __[Upd]__: DbContextModelLoader uses the same SqlFormats as defined in EasyQueryOptions    

- __[Upd]__: AlwaysQuote sql format to determine wether all tables and columns should be always quoted in SQL    

- __[Upd]__: Add missed resource strings for date/time operators    

- __[Upd]__: Refactor EasyQueryManager lifecycle in ASP.NET 4.x  Controller.    

- __[Upd]__: Chart setting for Razor pages. Use ResultFacetsPanel for AdhocReporting if JS Version is 6.1.x or higher    

- __[Upd]__: Remove `QueryFormats` and `DbQueryFormats`. `SqlFormats` introduced.    

- __[Upd]__: Optimize fetching data. Refactor with async methods    

- __[Upd]__: Removed `DbColumn` class.    

- __[Upd]__: `DbQuery` constructor throws error if model is not  `DbModel`    

- __[Upd]__: Auto additg editor to the model on assigning for attribute or operand.  Add special function to set editor without such logic    

- __[Upd]__: AddSimpleCondition overload with `EntityAttr` and `Operator` parameters    

- __[Upd]__: Rename `MsSqlGate` -> `SqlServerGate` package    

- __[Upd]__: `TableLinkList.FindByTables` overload to take table aliases as parameters    

- __[Fix]__: Reading schema and db name of table in NpgSqlGate    

- __[Fix]__: Add Transaction to SQL keywords list for auto-qouting    
  

<div id="eq-kernel/5.4.7" data-released="2021-01-27"></div>

## Version 5.4.7 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2021-01-27</span></div>


- __[Fix]__: Save LimitClause and SelectTop query options to XML and JSON    

- __[Fix]__: Data model operators saving/loading to/from JSON    

<div id="eq-kernel/5.4.6" data-released="2021-01-19"></div>

## Version 5.4.6 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2021-01-19</span></div>


- __[Fix]__: Wrong processing of "formats" request parameter in EasyQueryManagerSql    

- __[Fix]__: "IsAggregate" was not set properly for Custom SQL expressions    

- __[Fix]__: NullReference exception in case of "no path between 2 tables" situation    

- __[Fix]__: NullReference exception on queries with InJoin conditions    

<div id="eq-kernel/5.4.5" data-released="2021-01-09"></div>

## Version 5.4.5 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2021-01-09</span></div>


- __[Upd]__: Chart setting for Razor pages. Use ResultFacetsPanel for AdhocReporting if JS Version is 6.1.x or higher    

- __[Fix]__: Support for views in EF Core 5.0    

<div id="eq-kernel/5.4.4" data-released="2020-12-01"></div>

## Version 5.4.4 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-12-01</span></div>


- __[New]__: Add PreserveFormatting in IDataExportSettings    

- __[New]__: Condition.Clone method    

- __[Upd]__: Add `ShowDatasetInfo` options to DataExportSettings. Add `GetDefaultSettings`  to default exporters    

- __[Fix]__: Support TPH in Entity Framework Core.    

- __[Fix]__: Ignored navigation properties were still added into the model    

- __[Fix]__: Processing sub-queries that have fields from the parent queries    

- __[Fix]__: Bug with adding expressions to group by from Virtual attributes and Custom Expressions  when `GroupByCalcColumns`  is  turned off.    

- __[Fix]__: Incorrect processing of old macro values (like ${Today}) on XML loading    

- __[Fix]__: Error on loading XML queries with sub-queries    


<div id="eq-net4/5.4.4" data-released="2020-12-02"></div>

## Version 5.4.4 - EasyQuery .NET Framework packages

<div class="aist-article-updated"><span>2020-12-02</span></div>


- __[Fix]__: Drag-n-drop processing for LookupAttr attributes    

- __[Fix]__: EntitiesPanel shows both attributes lined with LookupAttr    

- __[Fix]__: Duplicate operation now creates new condition right after the original one    

<div id="eq-kernel/5.4.3" data-released="2020-10-23"></div>

## Version 5.4.3 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-10-23</span></div>


- __[New]__: ReturnQueryStatementOnExecute option fpr middleware    

- __[Fix]__: New queries were stored automatically if SaveQueryOnSync was turned on    

- __[Fix]__: Add Guid to quoted types    

- __[Fix]__: Do not hide UNIQUE fields with KEY fields for MsSqlServer when model is loaded from connection    


<div id="eq-net4/5.4.3" data-released="2020-10-26"></div>

## Version 5.4.3 - EasyQuery .NET Framework packages

<div class="aist-article-updated"><span>2020-10-26</span></div>


- __[New]__: ReturnQueryStatementOnExecute option processing    

<div id="eq-net4/5.4.2" data-released="2020-09-30"></div>

## Version 5.4.2 - EasyQuery .NET Framework packages

<div class="aist-article-updated"><span>2020-09-30</span></div>


<div id="eq-kernel/5.4.2" data-released="2020-09-30"></div>

## Version 5.4.2 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-09-30</span></div>


- __[New]__: GetQueryFileExt function in EasyQueryApiHandler    

- __[New]__: Sort enum by its names with special attribute for property -  `EqSortByEnumNames`    

- __[Fix]__: Make EasyQueryManager IDisposible    

- __[Fix]__: DateTimeOffset was recognized as Int32 in SqlClientGate    

- __[Fix]__: Table category saving/loading to/from JSON    

<div id="eq-net4/5.4.1" data-released="2020-09-11"></div>

## Version 5.4.1 - EasyQuery .NET Framework packages

<div class="aist-article-updated"><span>2020-09-11</span></div>


- __[Upd]__: Return querySaved on Sync    

- __[Fix]__: Return meta on executeQuery    

<div id="eq-kernel/5.4.1" data-released="2020-09-11"></div>

## Version 5.4.1 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-09-11</span></div>


- __[New]__: SkipForeignKeys option in DbContextLoaderOptions    

- __[New]__: HideKeyFields parameter in DbConnectionLoaderOptions    

- __[New]__: Default list value editors for special dates and times    

- __[New]__: Hide method in EntityAttr    

- __[New]__: Custom linq operators    

- __[New]__: QueryTuner option    

- __[Upd]__: Return querySaved on Sync    

- __[Fix]__: Value Editor wasn't saved together with default operand    

- __[Fix]__: Asynchronous saving/loading of InnerData and ExtraData in Query    

- __[Fix]__: Wrong behavior of TableStore.Add    

- __[Fix]__: UseInSorting parameter of Attribute processing on LoadFromEntityType    

- __[Fix]__: Check if Query not null before calling BuildQuery in EasyQueryManager    

<div id="eq-net4/5.4.0" data-released="2020-08-17"></div>

## Version 5.4.0 - EasyQuery .NET Framework packages

<div class="aist-article-updated"><span>2020-08-17</span></div>


- __[New]__: Save query to file/ Load query from file functionality    

- __[New]__: GetFileExtentionByContentType virtual method.    
This method allows to override the default behavior of getting the extension of the exported file by the content type.


- __[New]__: Index property in EqEntityAttribute and EqEntityAttrAttribute    

- __[New]__: Saving Model DbParameters locally in DME    

- __[New]__: Error processing in EasyQueryApiController    

- __[Fix]__: Table -> Aliases splitting mechanism on loading from a DbContext or DbConnection    

- __[Fix]__: Remove BOM from the response content created by EasyQuery actions result classes    

- __[Fix]__: Checking connection string before checking db connection in DME    

- __[Fix]__: Save model loaded from JSON file in DME    

- __[Fix]__: Process ExtraParams in EasyQueryApiController.    


<div id="eq-kernel/5.4.0" data-released="2020-08-18"></div>

## Version 5.4.0 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-08-18</span></div>


- __[New]__: EqErrorResult implementation of ActionResult for Controller    

- __[New]__: Save query to file/ Load query from file functionality    

- __[New]__: Clien Extra Conditions support    

- __[New]__: DoNotPrettifyNames method in DbConnectionLoaderOptions    

- __[New]__: Lightweight result set format    

- __[New]__: Query.InnerData dynamic property    
This object allows to store some addtional information with each query. For example, save the list of facets in the result panel


- __[New]__: FileQueryStoreSettings.FileFormat property.    
By default this the value of this property is "json" but you can also set to "xml"


- __[New]__: HasSubQuery option in EntityAttr    
It's set to true when the attribute's expression contains a sub-query


- __[New]__: Add custom tuner    

- __[New]__: AddFileExtensionsResolver to middleware options.    
This option allows to amend the file extension of the exporting data.


- __[New]__: DeleteSubEntities() methods in Entity class.    
2 methods which allow to remove sub-entities of some entity based either on their names or some "filter" function.


- __[New]__: Show() and Hide() method in Entity class    
These methods allow to hide or show some entity (turn off/on all UseIn... properties) with a one line of code


- __[New]__: DisplayName property in EqEntityAttrAttribute    

- __[New]__: TableLink.SwitchDirection method    
This method allows to switch the direction of the link between two tables (Table1 -> Table2 becomes Table2 -> Table1)


- __[New]__: Add Index property to EqEntityAttribute and EqEntityAttrAttribute    

- __[Upd]__: Refactor EasyQueryMiddleware with EasyQueryApiHandler    

- __[Upd]__: Suppot sorted columns in DynamicQuery    

- __[Fix]__: ExecuteQuery of EasyQueryManagerLinq. Add SortedColumns support    

- __[Fix]__: Save/Load Query.ExtraData to/from XML    

- __[Fix]__: GROUP BY cluase for columns with sub-queries    

- __[Fix]__: Table -> Aliases splitting mechanism on loading from a DbContext or DbConnection    

- __[Fix]__: TableLink.Enabled was not saved to the data model file    

- __[Fix]__: Table priority was not taken into account on constructing the path between tables    

- __[Fix]__:  Saving editors in JSON    

- __[Fix]__: Saving file path on loading model from JSON file    

<div id="eq-kernel/5.3.7" data-released="2020-04-26"></div>

## Version 5.3.7 - EasyQuery Kernel packages

<div class="aist-article-updated"><span>2020-04-26</span></div>


- __[New]__: DataExportTuner interface    
This interface allows you to tune export settings


- __[New]__: ExtraParams property in ListValueEditor    

- __[Upd]__: Updated the registration of CustomValueListResolver.    
Notice. Old `AddValueListResolver` method of `EasyQueryOptions` is deprecated now. Use a new one.


<div id="eq-net4/5.3.6" data-released="2020-04-10"></div>

## Version 5.3.6 - EasyQuery .NET Framework packages
<div class="aist-article-updated"><span>2020-04-10</span></div>


- __[Fix]__: Name prettifier on model load    

- __[Fix]__: Problem with macro processing date in WinForms    


<div id="eq-kernel/5.3.6" data-released="2020-04-09"></div>

## Version 5.3.6 of EasyQuery kernel packages
<div class="aist-article-updated"><span>2020-04-09</span></div>

- __[Fix]__: Wrong SQL when there is a group with all disabled conditions
- __[Fix]__: Name prettifier on model loading from a DbConnection
- __[Fix]__: Problem with SelectDistinct when LegacyPaging is true   
Now SqlQueryBuilder uses DENSE_RANK() function instead of ROW_NUMBER() when SelectDistinct is true

- __[Fix]__: Formatting when value contains new line symbol
- __[Fix]__: Ignore RowNumber column on export  
RowNumber column for legacy page was not ignored on export

<div id="eq-kernel/5.3.5" data-released="2020-03-30"></div>

## Version 5.3.5 of EasyQuery kernel packages
<div class="aist-article-updated"><span>2020-03-30</span></div>

- __[New]__: Formats.JoinsOrder propery in SqlQueryBuilder    
Allows to define the order of table joins in the FROM clause of generated SQL

- __[New]__: LegacyPaging option for DbQueryFormats    
Enables paging which uses ROW_NUMBER() function.

- __[New]__: UseCustomFuncInOrderBy option for DbEntityAttr    
If the option is set to false, CustomFunc of the EntityAttr will not be added to order by expression.

- __[Fix]__: Wrong format of JSON file on saving via FileQueryStore   
If size of the target file is bigger than the size of the saved content - we got wrong JSON in result.

- __[Fix]__: Paging support for Oracle   
Paging was not turned on by default for FormatType.Oracle format type. Now it's properly supported the similar way as for SQL Server

<div id="eq-kernel/5.3.4" data-released="2020-03-30"></div>

## Version 5.3.4
<div class="aist-article-updated"><span>2020-03-06</span></div>

- __[New]__: `ReturnQueryOnSave` option for EasyQueryMiddleware option.

- __[Fix]__: `CustomFunc` is processed before applying the aggregate functions in columns.