---
title: Gridview filtering with EasyQuery ASP.NET (WebForms)
slug: >-
  tutorials/version-3-x-tutorials/gridview-filtering-with-easyquery-aspnet-webforms
sidebar:
  order: 100
---

<p>A very common use-case for ASP.NET WebForms application: you have a webpage with a GridView control populated from a database.</p>
  <p>Now let’s imagine you want to have a form or some web-control that users can use to filter the results presented in the GridView. Moreover, it would be great to give them a possibility to define several filter conditions and a quick way to turn each condition on/off and see what happens with result dataset instantly.</p>
  <p>This is the point where EasyQuery’s QueryPanel web-control comes to help. Take a look at the following GridView filtering form example:</p>
  <div class="c-center">
  <div class="krh-blog-ss-block">
  <a href="/easyquery/docs/images/eq-grid-filtering01.png" class="fancybox" data-fancybox-group="gallery" title="GridView filtering form">
  <img src="/easyquery/docs/images/eq-grid-filtering01.png" alt="GridView filtering form">
  </a>
  </div>
  </div>
  <p>Here is a step-by-step description how to implement this functionality in your own project:</p>
  <h2>0. Download and install EasyQuery</h2>
  <p>(of course, only if you didn't do it before)</p>
  <h2>1. Add QueryPanel control to your .aspx file</h2>
  <p>We suppose that you have a GridView component connected with some DataSource control. All you need to add - is a QueryPanel control (preferably before the GridView):</p>
  <pre>
<code class="html">&lt;keqwc:querypanel id="QueryPanel1" runat="server" scrollbars="Auto"&gt;
&lt;/keqwc:querypanel&gt;
 
 . . . . . . . 
 
&lt;asp:gridview id="ResultGrid" runat="server" datasourceid="ResultDS" cellpadding="4" cellspacing="2" gridlines="Vertical"&gt;
&lt;/asp:gridview&gt;
</code>
</pre>
  <h2>2. Add EasyQuery initialization code</h2>
  <p>We need to create DbQuery and DbModel component and assign Query object to QueryPanel control.
  </p>
  <pre>
<code class="cs">private DbQuery query = null;
private DataView resultView;
  
//Here is a function which loads data from the database.
//For demonstration purposes, we show a content of one table here
//but it may be a more complicated query of course.
protected void RefreshResultView(string tableName, string filterExpr) {
  ResultDS.SelectCommand = "Select * From " + tableName;
  ResultDS.FilterExpression = filterExpr;
  resultView = (DataView)ResultDS.Select(DataSourceSelectArguments.Empty);
}
 
//This function fills DbModel object by information from DataTable
protected void LoadModelData(DbModel model, string tableName) {
  RefreshResultView(tableName, "");
  DataTable tbl = resultView.ToTable();
  model.FillByDataTable(tbl, false);
}
  
private void InitQuery() {
  //we store our query in the Session storage
  query = (DbQuery)Session["EQ-GRIDFILTER-DEMO-QUERY"];
 
  //if there is no current query - we create a new one
  if (query == null) {
  DbModel model = new DbModel();
  model.UseResourcesForOperators = true;
  model.AddDefaultOperators();
 
  LoadModelData(model, "Customers");
 
  query = new DbQuery();
  query.Model = model;
  query.Formats.SetDefaultFormats(FormatType.MsAccess);
  Session["EQ-GRIDFILTER-DEMO-QUERY"] = query;
  }
}
 
//Now modify our Page_Load handler to do all initialization procedures
protected void Page_Load(object sender, EventArgs e) {
  //initialize Query and DataModel objects first 
  InitQuery();
  
  //assign Query object to QueryPanel
  QueryPanel1.Query = query;
 
  //add a handler for ConditionsChanged event - to modify our filter according to user's changes in QueryPanel
  query.ConditionsChanged += new Korzh.EasyQuery.ConditionsChangedEventHandler(query_ConditionsChanged);
 
  . . . . . . . . 
}
</code>
</pre>
  <h2>3. Update filter on every query change</h2>
  <p>Finally we need to build new filter expression on every user's modification in QueryPanel control and update our result accordingly</p>
  <pre>
<code class="cs">//ConditionsChange event handler. All we do here - call a function which updates our result set
protected void query_ConditionsChanged(object sender, Korzh.EasyQuery.ConditionsChangeEventArgs e) {
  UpdateResultset();
}
 
 
protected void UpdateResultset() {
  FilterExpressionBuilder builder = new FilterExpressionBuilder(query);
  builder.BuildFilter();
  string filterExpr = builder.Result.FilterExpr;
  RefreshResultView("Customers", filterExpr);
}
</code>
</pre>
  <h2>Additional benefits</h2>
  <p>You can wrap these components into a new UserConrol and use the same approach for filtering in other web pages (.aspx), of your web-application, so that the look and feel, layout and behavior remains unified across the whole web-site.</p>
