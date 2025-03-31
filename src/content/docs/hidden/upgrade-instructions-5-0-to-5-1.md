---
title: Upgrade instructions from 5.0 to 5.1
slug: hidden/upgrade-instructions-5-0-to-5-1
---

## 1. Add nuget.config

The latest version of EasyQuery packages (`5.1.0-beta2`) is published on MyGet. 
So, first of all, you need to add the attached [nuget.config](https://korzh.com/static/nuget.zip)  file to your solution folder.

## 2. Update package versions in your .csproj
Open your .csproj file in any text editor and replace the version number for all EasyQuery packages from `5.0.0` to `5.1.0-beta2`

```
<PackageReference Include="Korzh.EasyQuery.AspNetCore" Version="5.1.0-beta2" />
<PackageReference Include="Korzh.EasyQuery.EntityFrameworkCore.Relational" Version="5.1.0-beta2" />
<PackageReference Include="Korzh.EasyQuery.RazorUi" Version="5.1.0-beta2" />
<PackageReference Include="Korzh.EasyQuery.DataExport" Version="5.1.0-beta2" />
```


## 3. New version of EasyQuery scripts
The next step will be to switch to the latest version of client-side scripts.
Here is the direct links to JS and CSS files on our CDN:

```
<link href="//cdn.korzh.com/eq/5.1.0/eq.core.min.css" rel="stylesheet" type="text/css" media="screen" />
<link href="//cdn.korzh.com/eq/5.1.0/eq.view.min.css" rel="stylesheet" type="text/css" media="screen" />
<script src="//cdn.korzh.com/eq/5.1.0/eq.all.min.js"></script>
```

## 4. Add QuerySaver service on the backend

We need a special handler which will cover all query saving/loading operations on the sever-side.
There is a default implementation of this service which stores queries on the file system. 

Just add the following line in `UseEasyQuery` call of your Configure method in Startup.cs: 

```
app.UseEasyQuery(options =>
{
    .    .    .    .    .
	options.UseQueryStore(services => new FileQueryStore("App_Data"));
```

Later you can easily replace this service with your implementation which stores queries to the database.
Use `ReportStore.cs` unit from our EqAspNetCoreDemo project as an example.


## 5. Add `save/load/remove` buttons to your page

Now our JS code automatically handles few additional buttons: `LoadQueryButton`, `SaveQueryButton` and `RemoveQueryButton`.

All you need to do - is to add those buttons on your page:

```
<div>
	<button id="LoadQueryButton" class="">Load query ↓</button>
</div>
<div>
	<button id="SaveQueryButton" class="">Save query as...</button>
</div>

<div>
	<button id="RemoveQueryButton" class="">Remove current query</button>
</div>
```

You can apply any style to these buttons. The only requirement is to assign to them the IDs I mentioned above (`LoadQueryButton` and so on).


## 6. Change your `addColumn` script

As was promised, new version has more clear and elegant API for such operations as adding columns.
Here is an example:

```
this.view = new easyquery.ui.AdvancedSearchViewJQuery();
view.init(options);

view.context.addEventListener("ready",  () => {
	let query = view.context.getQuery();

	query.addColumn({
		attributeId: "Customer.CompanyName",
		caption: "Company"
	});
});
```