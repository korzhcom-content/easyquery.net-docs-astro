---
title: Working with table aliases
slug: data-model-editor/working-with-aliases
---

When do you need aliases? Sometimes you want to use one table for several different links and only your user's query can define which link you want to use to build a correct query.
To build such links you need to use aliases. Let's see the following example.

You want to have links like `Table1.FieldA → Table2.FieldC` and `Table1.FieldB → Table2.FieldC`
You have a database that contains the information about people migration within the United States.
There are tables **People** and **States** in your database. **StateFrom** field contains 2 letter state abbreviation of the state where the person from, and **StateLives** contains the state abbreviation of the state where the person lives now. State table contains **StateID** - this 2 letter key and **StateName** - long state name. 

<table class="clear">
	<tbody>
		<tr>
			<td style="border:none">
				<table class="clear">   
					<thead>
						<tr><th>People</th></tr>
					</thead>
					<tbody>
						<tr><td>PersonID</td></tr>
						<tr><td>Name</td></tr>
						<tr><td>StateFrom</td></tr>
						<tr><td>StateLives</td></tr>
						<tr><td>Phone</td></tr>
					</tbody>
				</table>   
			</td>
			<td style="border:none" width="10%"></td>
			<td style="border:none">
				<table class="clear">   
					<thead>
						<tr><th>States</th></tr>
					</thead>
					<tbody>
						<tr><td>StateID</td></tr>
						<tr><td>StateName</td></tr>
					</tbody>
				</table>   
			</td>
			<td style="border:none" width="70%"></td>
		</tr>
	</tbody>
</table>

Open Data Model Editor and add People table. After this add States table twice and set Table Aliases to 'StateFrom' for the first table and 'StateLives' for the second. Add 2 different links to table People:

1) People.StateFrom → StateFrom.SateId

2) People.StateLives → StateLives.SateId

Then go to the Fields page and create two fields:

1) “State person from” which corresponds to StateName field from the States table with StateFrom alias

2) “State person lives now” - corresponds to StateName field from States table with StateLives alias.

Now your users can create queries and use 2 States tables which a really connected to one table in the database. SQL standard allows you to create such queries when you use aliases and Simple Query does too. See the example on the picture: 

![Data Model Editor - query example](https://files.aistant.com/korzh/easyquery-dotnet/images/dme-query.png)

Here we ask for the people who have arrived from California and do not live in Oregon now.