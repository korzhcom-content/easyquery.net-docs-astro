---
title: Getting started for Windows Forms
slug: getting-started/version-3-x/winforms
---


1) Run Data Model Editor application in wizard mode (“Create Data Model” program icon) and follow the instructions to create a new data model that describes the data in your database. You will define database tables you want to use in your future queries, links between them and entities with their attributes (mostly the fields in already added tables).

2) Save created data model to some file on your hard-drive (let it be model1.xml for example);

3) Drop DbModel, DbQuery and QueryPanel components on a form. You need to add these components to a Visual Studio toolbox first if you have not done this before.

4) Link DbQuery component to DbModel through Model property;

5) Link QueryPanel component to DbQuery component through Query property.

6) Add the following code into your form initialization procedure (e.g. in form's constructor): `DataModel.LoadFromFile` method call to load previously created data model file;
`QueryPanel.Activate` method call to activate the query panel.

Example: 

```
public MainForm()   
 {   
    InitializeComponent();   
 
    dataModel1.LoadFromFile("model1.xml");   
 
    queryPanel1.Activate();   
 }
```
7) You can also drop on your form QueryColumnsPanel control to allow your users to define the result columns. Link QueryColumnsPanel with DbQuery object exactly like for QueryPanel control.
After the steps described above your users can add query conditions and result columns;

8) When it's necessary to generate an SQL statement - create an instance of SqlQueryBuilder class and call its BuildSQL() method. Usually, this method is called on some user action (e.g. pressing “Build” button). After that read generated SQL from Result.SQL property of a SqlQueryBuild object.

9) Finally,  you can pass the generated SQL statement to some DataSource for execution or use it in any other possible way.

Example: 

```
protected void BuildBtn_Click(object sender, EventArgs e) { 
    SqlQueryBuilder builder = new SqlQueryBuilder(query1);
    if (builder.CanBuild) {
        builder.BuildSQL();
        string sql = builder.Result.SQL;
        //clear previous result data if exist 
        ResultDS.Tables[0].Rows.Clear(); 
        ResultDS.Tables[0].Columns.Clear(); 
        try { 
            OleDbDataAdapter resultDA = new OleDbDataAdapter(query1.Result.SQL, DbConnection); 
            resultDA.Fill(ResultDS, "Result"); 
        }  
        catch (Exception error) { 
            //if some error occurs just show the error message  
            MessageBox.Show(error.Message);       
        }  
    }
} 
```