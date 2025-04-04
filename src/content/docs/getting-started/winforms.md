---
title: Getting started for Windows Forms
slug: getting-started/winforms
sidebar:
  order: 100
---

> __NB__: The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on [GitHub](https://github.com/easyquery/Net4Samples). You can clone that repository with samples, [download it](https://github.com/easyquery/Net4Samples/archive/master.zip) as a ZIP archive or even <button>[Open it in Visual Studio](//git-client://clone?repo=https%3A%2F%2Fgithub.com%2Feasyquery%2FNet4Samples)</button> right away!


Below you will find the instructions of what to do if you are going to add EasyQuery to your WinForms application from the scratch.

## 0. Choose the way you create and use your data model 

Data model - is a user-friendly representation of your project's database which is used by different EasyQuery components to show available entities, their attributes, conditional operators and the lists of available values during the query building process. So, first of all, you will need to choose the way you create your data model and/or load it in your application. There are several different ways of doing this. For more information please read [Working with data model in EasyQuery](/easyquery/docs/getting-started/working-with-data-model) article first.

In this article, we assume that your data model is created with Data Model Editor, then saved to some JSON (or XML) file and that file is added to your project.

## 1. Install EasyQuery packages

Use NuGet Package Manager to install the following package:

* `Korzh.EasyQuery.WinForms`
* `Korzh.EasyQuery.DataExport` - if you will need the data exporting functions
* `Korzh.EasyQuery.MsSqlGate` (or `.MySqlGate` or `.OdbcGate` - depending on your DB) - if you need to load your model directly from DB connection.


 ## 2. Add visual controls (QueryPanel, EntitiesPanel, ColumnsPanel)

First of all you will need to add those controls to your Toolbox (if they are not there yet). After that you can place QueryPanel, EntitiesPanel and ColumnsPanel on your form the same way as we do in our [sample project](https://github.com/easyquery/Net4Samples/tree/master/EqWinFormsDemo)

## 3. Initialize DbQuery and DbModel

After that you will need to add DbQuery and DbModel objects to your form, initalize them properly and connect with the visual controls through their `Query` property. 
Here is an example:


```
private DbModel _model;
private DbQuery _query;
private string _appDirectory;
private string _dataFolder


public MainForm()
{
	_appDirectory = System.IO.Directory.GetCurrentDirectory();
	_dataFolder = System.IO.Path.Combine(_appDirectory, "App_Data");

	InitializeComponent();
	_model = new DbModel();
	_query = new DbQuery(_model);

	QueryPanel1.Query = _query;
	ColumnsPanel1.Query = _query;
	EntitiesPanel1.Query = _query;

    _model.LoadFromJsonFile(System.IO.Path.Combine(_dataFolder, "NWindSQL.json"));
}
```

Try to build and start your project. If everything was done correctly - you will see the EntitiesPanel loaded with entities stored in your data model.

## 4. Setup the connection

Most probably you already have a DbConnection object in your form class (if you worked with it before installing EasyQuery). In this case just skip this section. Furthermore, we will suppose that your connection object is accessible by `_connection` field.

If you don't have a connection yet, you will need to add the following piece of code:

```
private SqlConnection _connection;

private void CheckConnection()
{
	try {
		if (_connection == null) {
			string currentDir = System.IO.Directory.GetCurrentDirectory();
			var connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"]?.ToString();
			_connection = new SqlConnection(connectionString);
		}
		
		if (_connection.State != ConnectionState.Open) {
			_connection.Open();
		}
	}
	catch (Exception ex) {
		MessageBox.Show(ex.Message);
	}
}
```

## 5. Generate SQL and execute the query

When it's necessary to generate an SQL statement for the query entered by user via EasyQuery visual controls (for example, on click on some Execute button) -  you will need to create an instance of `SqlQueryBuilder` class and call its BuildSQL() method.  After that, you can read generated SQL from Result.SQL property and pass it to some DataSource for execution (or use it in any other possible way).

Example: 

```
protected void ExecuteBtn_Click(object sender, EventArgs e) { 
    SqlQueryBuilder builder = new SqlQueryBuilder(_query);
    if (builder.CanBuild) {
        builder.BuildSQL();
        string sql = builder.Result.SQL;
        //clear previous result data if exist 
        ResultDS.Tables[0].Rows.Clear(); 
        ResultDS.Tables[0].Columns.Clear(); 
        try { 
		    CheckConnection();
            var resultDA = new SqlDataAdapter(sql, _connection); 
            resultDA.Fill(ResultDS, "Result"); 
        }  
        catch (Exception ex) { 
            //if some error occurs just show the error message  
            MessageBox.Show(ex.Message);       
        }  
    }
} 
```

(here ResultDS is a reference to a DataSet object which is connected with some DataGrid visual control via its DataSource property).

For more detailed examples and a ready-to-use code - please take a look at [EasyQuery Windows Forms demo project published on GitHub](https://github.com/easyquery/Net4Samples/tree/master/EqWinFormsDemo).
