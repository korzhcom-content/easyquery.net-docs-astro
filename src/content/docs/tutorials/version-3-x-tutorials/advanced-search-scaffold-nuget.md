---
title: Advanced search page in your MVC app in 5 minutes
slug: tutorials/version-3-x-tutorials/advanced-search-scaffold-nuget
---

<h2>Problem</h2>
  <ol>
  <li>You have an ASP.NET MVC project which works with some database (directly or through EntityFramwork).</li>
  <li>You have a request for a new page in your application with "advanced search" functionality where users will be able to build quite complicated queries to underlying DB and get the result instantly</li>
  <li>You need this functionality, you know, "for yesterday" :)</li>
  </ol>
  <h2>Solution</h2>
  <p><b>1. Open your project in Visual Studio</b></p>
  <p><b>2. Go to Package Manager (PM) Console</b></p>
  <p>Use the menu item if the console is not opened currently:
  <br> Tools | Nuget Package Manager | Package Manager Console</p>
  <p><b>3. Install EasyQuery Nuget package</b></p>
  <p>Just type in PM console</p>
  <br>
  <pre>
<code class="bash">PM> Install-Package EasyQuery.Mvc.Scaffolding</code>
</pre>
  <br>
  <p><b>4. Scaffold an advanced search page</b></p>
  <p>Type:
  </p>
  <br>
  <pre>
<code class="bash">PM> Scaffold EasyQuery.MvcController {ControllerName} -ConnectionName {ConnectionName}</code>
</pre>
  <br>
  <p>to add a new controller and corresponding view page. </p>
  <p>Here {ConnectionName} parameter is the name of your connection defined in Web.config file.</p>
  <p>Example:</p>
  <br>
  <pre>
<code class="bash">PM> Scaffold EasyQuery.MvcController AdvancedSearch -ConnectionName DefaultConnection</code>
</pre>
  <br>
  <p>in case you are using EntityFramework use -DbContext parameter of Scaffold command. For example:</p>
  <br>
  <pre>
<code class="bash">PM> Scaffold EasyQuery.MvcController AdvancedSearch -DbContext NorthwindContext</code>
</pre>
  <br>
  <p><b>5. Open your advanced search page in browser</b></p>
  <p>Now you can try to open your new page in browser and check how it works. If you named your new controller (and view) exactly as in examples above ("AdvancedSearch") then you can type:</p>
  <p><i>http://localhost:[port]/AdvancedSearch<i></p>
  <p>That's all!</p>
  <p>To see the whole process described above in action you can visit <a href="http://youtu.be/cPz7-8KY0bQ">this video</a> page on YouTube.</p>