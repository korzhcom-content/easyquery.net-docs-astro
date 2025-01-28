---
title: Copying the EasyQuery's code from a sample to your project
slug: getting-started/From a sample to your own project/copying-the-easyquerys-code-from-sample-to-your-project
---


To copy a view/page with EasyQuery’s functionality (like “Advanced Search” or “Ad-hoc reporting”) you need to perform the following 3 simple steps:

1. Install EasyQuery packages. This step is simple: just take a look which `Korzh.EasyQuery.*` packages are used in the sample you are copying your code from and install the same ones in your own project.
 
2. Setup EasyQuery's services (like `services.AddEasyQuery()` in `Startup.ConfigureServices`) and EasyQuery's endpoint (for ASP.NET and ASP.NET Core projects)

3. Copy the form/page/view that implements one of the search/reporting/filtering scenarios you would like to see in your solution.


Below we are going to describe each of these steps more in detail for each platform/framework:

## ASP.NET Core project

### 1. Install EasyQuery packages 

Obviously, you will need `Korzh.EasyQuery.AspNetCore` package and possibly some other (depending on the scenario). As mentioned above, use the same packages as in the sample project you are copying the code from.

### 2. Copy the EasyQuery services configuration. 

It’s that `services.AddEasyQuery()...` piece in `Startup.ConfigureServices`

### 3. Copy EasyQuery middleware configuration 

It's `app.UseEasyQuery(...)` call in  `Startup.Configure`. Our sample might have 2 (or more) middlewares (for demonstration purposes), one - for "advanced search", another one - for the "ad-hoc reporting" scenario. Most probably you will need only one of them.

### 4. Copy the page/view

In our sample, the “Ad-hoc reporting" page is an MVC view ( in `Views\Home\AdhocReporting.cshtml`) while “Advanced Search” is a Razor Page . Of course, in case of the MVC view you will also need to copy the corresponding action method from the controller (it's `HomeController` in case of of "ad-hoc reporting"). 


## ASP.NET project

### 1. Install EasyQuery packages

It's `Korzh.EasyQuery.AspNet4` and other packages depending on the scenario. As in the previous case, use the same packages as in the sample project you are copying the code from.

### 2. Setup the WebAPI controller

Server-side part of EasyQuery works via a WebAPI controller which handles all AJAX requests from the JS widgets placed on views/pages. So you need to install Web API in your project if you don't have it yet. This topic is covered in another our article: [$$-Getting started for ASP.NET 4-$$](//$aid/eqdn-tp2v66l73lbj) (use Step 2 there). If the WebAPI is installed in your project already, just copy the corresponding controller (e.g. "AdvancedSearchController.cs") to your project

### 3. Copy the form/page.

If it's an MVC project, you will need to copy a .cshtml file (like `AdvancedSearch.cshtml`) and the corresponding action in the MVC Controller (it's `HomeController` in most of our samples).

If it's a WebForms, please copy the `.aspx` page (`EasyQuery.aspx` most probably) and the corresponding code-behind file  `EasyQuery.aspx.cs`).


## Windows Forms or WPF project

### 1. Install EasyQuery packages

It's `Korzh.EasyQuery.Wpf` for WPF project or `Korzh.EasyQuery.WinForms` - for WinForms.  As in the previous cases, you will also need some other EasyQuery packages depending on the scenario you use. Install the same packages as in the sample project you are copying the code from.

### 2. Copy the form with EasyQuery components

It will be the `.cs` file and the corresponding files (like `.Designer.cs` or `.Resources.resx`). In our samples we usually place EasyQuery functionality on the  the main form (`MainForm.cs`), so you will probably need to rename it in your project.