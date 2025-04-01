---
title: Building data model dynamically by DB meta-information
slug: how-to/build-data-model-by-db-meta-information
sidebar:
  order: 100
---

You can avoid creating a data model XML file through Data Model Editor utility and fill your model right in the code directly from your database (or more precisely: by its meta-info).

To perform this task, you just need to create an appropriate instance of DbGate class (depending on DB and connection type you use), connect it to your database and call FillByDbGate() method of DbModel.

Here is an example: 

```
 //clear current model
  model.Clear();
 
  //add default operators
  model.AddDefaultOperators();
 
  //create a DbGate instance (this one is for SqlConnection, you can also use OleDbGate, OdbcGate, OracleGate, etc. ).
  Korzh.EasyQuery.DataGates.SqlClientGate sqlGate = new Korzh.EasyQuery.DataGates.SqlClientGate();
 
  //connect DbGate object to your database
  sqlGate.ConnectionString = @"Data Source=localhost;Initial Catalog=NWind;Integrated Security=True";
  sqlGate.Connected = true;
 
  //fill the model
  model.FillByDbGate(sqlGate, FillModelOptions.Default);
 
  //update visual controls 
  queryPanel1.UpdateModelInfo();
  columnsPanel1.UpdateModelInfo();
```

Please note: To create some DbGate object (like SqlClientGate) will need to add a corresponding assembly into the “References” section of your project. For exampl, to execute the code listed above you will need to reference Korzh.EasyQuery.DataGates.NET40.dll assembly.
