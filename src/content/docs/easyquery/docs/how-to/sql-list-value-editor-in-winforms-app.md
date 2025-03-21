---
title: How to setup SQL LIST value editor in WinForms app
slug: easyquery/docs/how-to/sql-list-value-editor-in-winforms-app
---


EasyQuery allows you to define SQL LIST value editor in WinForms apps for some attribute and then create your UI to edit condition values for this attribute. Here are the step-by-step instructions:

1. Run Data Model Editor (DME) and open your model file.
2. Go to Entities tab and find necessary attribute.
3. At the right panel for this attribute open “Value Editors” tab and select "SQL LIST" in “Default value editor” combo-box.
4. Save your model and close DME.
5. Open your project in Visual Studio and select QueryPanel component on form designer.
6. Add an event handler for ValueRequest event (use Events tab in Properties panel).

In WinForms edition, you will need to handle `ListRequest` event, execute the query passed in parameters and return the result in XML format.

Here is an example of such handler from our demo project (WinDemoCS):

```
Somewhere among form's initialization code:

this.QPanel.ListRequest += new Korzh.EasyQuery.WinControls.ListRequestEventHandler(this.QPanel_ListRequest);
```

Later in form's code:

```
private void QPanel_ListRequest(object sender, ListRequestEventArgs e) {
	if (e.ListName == "SQL") { 
                //processing SQL LIST value editors
		string sql = e.Data.ToString();
		DataSet tempDS = new DataSet();
        	SqlDataAdapter tempDA = new SqlDataAdapter(sql, sqlConnection);
		tempDA.Fill(tempDS, "Temp");
		
		StringWriter strWriter = new StringWriter();
		tempDS.WriteXml(strWriter);
		e.ResultXml = strWriter.ToString();
	}
	else if (e.ListName == "RegionList") { 
                //processing some other custom list
		e.ListItems.Clear();
		e.ListItems.Add("California", "CA");
		e.ListItems.Add("Colorado", "CO");
        	e.ListItems.Add("Oregon", "OR");
		e.ListItems.Add("Washington", "WA");

	}

}
```