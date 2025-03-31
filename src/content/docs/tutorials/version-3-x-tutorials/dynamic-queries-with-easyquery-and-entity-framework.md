---
title: Building dynamic queries with EasyQuery and Entity Framework
slug: tutorials/version-3-x-tutorials/dynamic-queries-with-easyquery-and-entity-framework
---

<div>
    <strong>NB:</strong> This article contains the instructions for the old version of EasyQuery (3.x). For the latest version (5.0 or higher) please use <a data-info="aist-inner-link" href="/easyquery/docs/tutorials/dynamic-queries-ui-aspnet-core-entity-framework">this tutorial</a>
        
</div>

<h2>1. Problem overview</h2>
  <p>Object-relational mapping (ORM) solutions have become a standard for database-related software projects last years. Entities Framework (EF) is an obvious ORM choice in .NET world since it is distributed with .NET framework so all applications built with Entity Framework can run on any computer on which the .NET Framework (starting with version 3.5 SP1) is installed.</p>
  <p>EasyQuery suits quite well for any project which use Entity Framework. There are some peculiar features in such “collaboration” which we are going to discuss further. So, to use EasyQuery components with Entity Framework you need to solve only two tasks:</p>
  <ul>
  <li>Fill your EasyQuery data model by your Entity Framework model.</li>
  <li>Generate query statement which can be executed over your EF model.</li>
  </ul>
  <p>Let's look at each issue separately.</p>
  <h2>2. Model loading</h2>
  <p>There are two possible ways to load your EF model into DataModel (DbModel) object.</p>
  <h3>2.1 Loading model from .edmx file</h3>
  <p>If you still use Entity Data Model (EDM) stored in some .edmx file (so-called "database first" approach) - you can use LoadFromEdmx() method of DataModel class to fill it by EDM. </p>
  <p>Here is an example:</p>
  <pre>
<code class="cs">DbModel myModel = new DbModel();
myModel.LoadFromEdmx(“MyEntityFrameworkModel.edmx”);
DbQuery query = new DbQuery();
query.Model = myModel;
</code>
</pre>
  <h3>2.2. Loading model directly from DbContext.</h3>
  <p>With new “code first” style of Entity Framework you don’t have any .edmx files in your project. In such case you can load your model directly from DbContext class. Here is a code sample:</p>
  <pre>
<code class="cs">
using Korzh.EasyQuery.EF;
. . . . . . . .
DbModel myModel = new DbModel();
 
var dbContext = new NorthwindContext()
myModel.LoadFromDBContext(dbContext);
</code>
</pre>
  <p>So you just need to pass the type of your DbContext object as first parameter and some options in the second one (IncludeComplexTypesInParentEntity option used in the sample is quite self-descriptive).</p>
  <p>We should note also that the second method of model loading can be used for the projects which use old EDM approach as well. You can use the DbContext class auto-generated for .edmx file.</p>
  <h2>3. Generating SQL</h2>
  <p>While EasyQuery allows you to generated Entity SQL or query via LINQ but the most efficient way will be to use good old T-SQL. Just create an instance of SqlQueryBuilder class, set default formats for generated statements (MsSqlServer in our case) and call BuildSQL method to get the result. </p>
  <p>Code:</p>
<pre>
DbQuery dbQuery = new DbQuery();
dbQuery.Model = myModel;
  . . . . . . . . . .
SqlQueryBuilder builder = new SqlQueryBuilder(dbQuery);
builder.Formats.SetDefaultFormats(FormatType.MsSqlServer);
string sql = builder.BuildSQL();
</pre>

  <p>Finally here is an example how to execute generated SQL statement over your DbContext (this task is not related directly to EasyQuery functionality but it's worth mentioning in this article):</p>

<pre>
  try {
  DataSet resultDataSet = new DataSet("myDataSet");
  DataTable resultTable = new DataTable("Result");
  resultDataSet.Tables.Add(resultTable);
  List<string> columnNames = new List<string>();
  using (NorthwindContext context = new NorthwindContext()) {
  var connection = context.Database.Connection;
  if (connection.State == ConnectionState.Closed)
  connection.Open();
  var command = connection.CreateCommand();
  command.CommandText = sql;
  command.CommandType = CommandType.Text;
  resultTable.Load(command.ExecuteReader());
  }
  //now you can use resultDataSet to show data in a GridView control 
  //or pass them into some report
  }
  catch (Exception e) {
  // Something wrong happened
  }
 
</pre>