---
title: Using MS SQL instead of Access in WebDemo sample project
slug: getting-started/version-3-x/sample-webforms-change-to-mssql
---


Here you will find the detailed instructions how to modify our sample applications (WebDemoCS or WebDemoAjaxCS) to make it work with SQL Server instead of Access.

**1)** Change the following line in using section of Default.aspx.cs file:

`using System.Data.OleDb;`

to

`using System.Data.SqlClient;`

**2)** After that change the type of your DbConnection object. Just search for all inclusions of DbConnection variable and change it's declaration if necessary. You will need to change the connection string accordingly.

Here is the new code: 

```
private System.Data.SqlClient.SqlConnection DbConnection = null;
    . . . . . .
DbConnection = new SqlConnection();
DbConnection.ConnectionString = "Data Source=DEVPC1\\SQLEXPRESS;Initial Catalog=nwind;Integrated
Security=True";
```
**3)** Then change the type of OleDbDataAdapter to SqlDataAdapter in QueryPanel1_SqlExecute and other methods where it exists. For example the following line of code:

`OleDbDataAdapter resultDA = new OleDbDataAdapter(e.SQL, DbConnection);`

should be replaced with:

`SqlDataAdapter resultDA = new SqlDataAdapter(e.SQL, DbConnection);`

**4)** Find the following line of code in your Default.aspx.cs file:

`query.Formats.SetDefaultFormats(FormatType.MsAccess);`

and replace it to this one:

`query.Formats.SetDefaultFormats(FormatType.MsSqlServer);`

**5)** Finally you will need to change `<asp:AccessDataSource …>` tag in Default.aspx file to SqlDataSource. Here is an example how it may look like: 

```
<asp:SqlDataSource ID="ResultDS" runat="server" ConnectionString="Data Source=DEVPC1\SQLEXPRESS;Initial
Catalog=nwind;Integrated Security=True"></asp:SqlDataSource>
```