---
title: Getting started for Silverlight
slug: getting-started/version-3-x/silverlight
sidebar:
  order: 8
---

To apply EasyQuery.NET to your application please perform the following steps:

1. Run Data Model Editor application in wizard mode (“Create Data Model” program icon) and follow the instructions to create a new data model that describes the data in your database. You will define database tables you want to use in your future queries, links between them and entities with their attributes (mostly the fields in already added tables).

2. Save created data model to some file on your hard-drive (let it be model1.xml for example);

3. Drop QueryPanel components on a form. You need to add this component to a Visual Studio toolbox first if you have not done this before.

4. Create DbDataModel and DbQuery objects in your form's initialization procedure. Connect DbQuery to DbModel through its Model property and QueryPanel to DbQuery through Query property.

Example: 

```
 public MainWindow()   
 {   
    InitializeComponent();   
 
    //Create new query and data model objects, connect them with one another and with QueryPanel  
    Query query = new DbQuery();      
 
    query.Model = new DbDataModel();   
    queryPanel.Query = query;  
 
    //Configure query's format according to the database you use.  
    queryPanel.Query.Formats.SqlQuote1 = '[';  
    queryPanel.Query.Formats.SqlQuote2 = ']';  
    queryPanel.Query.Formats.DateFormat = "#MM/dd/yyyy#";  
    //... etc.  
 
    //Load the data model you created on steps 1-2  
    query.Model.LoadFromFile("model1.xml");   
 }   
```
5. You can also drop on your form QueryColumnsPanel control to allow your users to define the result columns. Link QueryColumnsPanel with DbQuery object exactly like for the QueryPanel control.
After the steps described above your users can add query conditions and result columns;

6. When it's necessary to generate an SQL statement - create an instance of SqlQueryBuilder class and call its BuildSQL() method. Usually, this method is called on some user action (e.g. pressing “Build” button). After that read generated SQL from Result.SQL property of SqlQueryBuilder object.

7. Finally, you can pass the generated SQL statement to some DataSource for execution or use it in any other possible way.

Example: 

```
protected void BuildBtn_Click(object sender, EventArgs e) { 
    SqlQueryBuilder builder = new SqlQueryBuilder(query1);
    if (builder.CanBuild) {
        builder.BuildSQL();
        string sql = builder.Result.SQL;
 
        try {
            DataSet ResultDS = new DataSet(); 
 
            OleDbDataAdapter resultDA = new OleDbDataAdapter(queryPanel.Query.Result.SQL, SomeDbConnection); 
            resultDA.Fill(ResultDS, "Result"); 
            dataGrid.ItemsSource = ResultDS.Tables[0].DefaultView; 
        }  
        catch (Exception error) { 
            //if some error occurs just show the error message  
            MessageBox.Show(error.Message);       
        } 
    }
} 
```
