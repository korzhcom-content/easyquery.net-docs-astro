---
title: End-user's guide
slug: end-user-guide
---

<h3>1. EasyQuery: What’s That?</h3>

<p>The majority of software products or web applications work with databases in some way. Usually, every such program (or application) contains an option of data search and/or filtering.</p>

<p>It is always good when there are just a few search parameters, and when one can perform a query with a single text line (for example, Google search). Nevertheless, in most cases, you need to conduct a search while operating several parameters at the same time. For example, “Find all orders for product A made by USA companies, which have been both paid for and shipped by the beginning of the current month.” To specify indicate the conditions of such a query, you will need more than one text line.</p>

<p>In such cases, EasyQuery would be much of help. It is a universal query builder UI for data search and filtering. It will allow you setting the search conditions of almost any difficulty while using exclusively natural language, terms, and expressions of which are familiar to user.</p>


<h3>2. EasyQuery Components.</h3>

<p>The EasyQuery user interface consists of three main components – an Entities Panel, Conditions Panel, and Columns Panel. Data will be displayed in the Results Panel. The picture below can help you understand which is what.</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ui-all.jpg" class="cbp-lightbox" data-fancybox-group="gallery" title="EasyQuery: Elements of Interface">
<img src="/easyquery/docs/images/eq-ui-all.jpg" style="width:600px" alt="EasyQuery: Elements of Interface">
</a>
</div>
</div>

<p><i><font color="”#002929”">NB: SQL Panel is not a component of the EasyQuery UI. It is displayed here exclusively to demonstrate what a particular query would look like in SQL (Structured Query Language). You will not normally see this panel in most applications which use EasyQuery.</font></i></p>

<p>Each component can be used separately. For example, it’s possible to use only Conditions Panel for data filtration while the columns are defined internally inside application.</p>



<h3>About entities and attributes</h3>

<p>While working with EasyQuery, a user operates entities and their attributes. They constitute something like a structure of data that one can extract through construction of queries.</p>

<p> Entity is some real-world object, information on which is stored in the database. Examples of entities are as follows: ‘Customer,’ ‘Order,’ ‘Product,’ etc. Every entity has an initial set of attributes or parameters. Thus, attributes for such entity as ‘Customer’ can be: Name, Address, Country, and others.</p>



<h3>Entities Panel</h3> 
<p>This panel can be used as a visual representation of all entities and their attributes, which we can use to build queries. It can be used to add entity attributes to a Columns Panel (and they will be displayed in the result) or to a Conditions Panel (in order to actually set the query conditions).<br>
You can either move selected attributes to the corresponding panels with a mouse or use buttons Add column and Add condition &nbsp;( <img class="defimg" src="images/entitiespanel-buttons.png"> ).</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ui-entitiespanel.jpg" class="fancybox" data-fancybox-group="gallery" title="EasyQuery: Entities Panel">
<img src="images/eq-ui-entitiespanel.jpg" alt="EasyQuery: Entities Panel">
</a>
</div>
</div>




<h3>Columns Panel</h3>
<p>Using columns panel you can specify the columns which you want to be displayed in your query results.</p>

<p>You have a list of lines, each of them represents a column in the query results (in the Results Panel). Every line consists of Expression, which is an attribute, a Title, which serves as a column title in the Results Panel, and buttons – for sorting (on the left), aggregating and deleting (on the right).</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ui-columnspanel.jpg" class="fancybox" data-fancybox-group="gallery" title="EasyQuery: Columns Panel">
<img src="images/eq-ui-columnspanel.jpg" alt="EasyQuery: Columns Panel">
</a>
</div>
</div>



<h3>Conditions Panel</h3>
<p>Here you can specify filtering conditions for data selection. So the result of your query will include only the data that satisfy those conditions.</p>

<p>Every line in the Conditions Panel corresponds to a single query condition. Every condition consists of 3 elements –&nbsp;an expression (some entity attribute), an operator, and value(s) (one or more).</p>

<p>We have mentioned attributes above (e.g., ‘Company Name,’ ‘Product Price,’ and ‘Order Date’). Together with values, operators set certain limitations regarding data which is stored in a given attribute. For example, “(Date) is equal to 23 Jul 2014,” “(Quantity) is greater than 35,” “(Price) is less than 1,000,” and “(Name) starts with A.”</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ui-querypanel.jpg" class="fancybox" data-fancybox-group="gallery" title="EasyQuery: Conditions Panel">
<img src="images/eq-ui-querypanel.jpg" alt="EasyQuery: Conditions Panel">
</a>
</div>
</div>



<h3>Basic queries: hot to make them with EasyQuery</h3>

<h3>1) Display Table Data</h3>


<p>Let us imagine that we need a table, which contains following data: names of our customer companies along with countries of their origin, names of categories in which they ordered products, and a total sum of orders each of them made.</p>


<p>So, we select following entities and their attributes to add them in the Columns Panel:<br>
</p>

<ol>
<li>Customer -&gt; Company Name</li>
<li>Customer -&gt; Country</li>
<li>Product -&gt; Category</li>
<li>Order -&gt; Total Sum</li>
</ol>
<p>Clicking on the Execute button displays our query result just as we need it.</p>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example01.png" class="fancybox" data-fancybox-group="gallery" title="Query example 1: Display table
data">
<img src="images/eq-ug-example01.png" alt="Query example 1: Display table data">
</a>
</div>
</div>


<h3>2) Table Data with Aggregated Columns</h3>


<p>EasyQuery allows to aggregate data for each column in the query result.
For example, we may need a total quantity (amount) of the orders for every company.</p>


<p>We are going to add the following columns:</p>
<ol>
<li>Customer -&gt; Company Name</li>
<li>Customer -&gt; Country</li>
<li>Order -&gt; Order ID (we need an attribute of the Order entity to calculate the amount of orders)</li>
<li>Click on the button and select the "Count" function</li>
<li>Change the title for last column to "Order Count" - just to represent its purpose.</li>
</ol>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example02.png" class="fancybox" data-fancybox-group="gallery" title="Query example 2: Aggregated Columns">
<img src="images/eq-ug-example02.png" alt="Query example 2: Aggregated Columns">
</a>
</div>
</div>


<p>We get the following result: </p>
<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example02-r.png" class="fancybox" data-fancybox-group="gallery" title="Query example 2: Aggregated Columns Results">
<img src="images/eq-ug-example02-r.png" alt="Query example 2: Aggregated Columns Results">
</a>
</div>
</div>


<h3>3) Table Data with Sorting</h3>


<p>Let us use the previous example, in which, as a result, we get columns with data on:</p>
<ul>
<li>names of customer companies,</li>
<li>countries of their origin,</li>
<li>amount of products they paid for.</li>
</ul>


<p>First steps are the same as in the previous example:</p>
<ol>
<li>Customer -&gt; Company Name</li>
<li>Customer -&gt; Country</li>
<li>Order -&gt; Order ID</li>
<li>We make the last line active and select Count after clicking on the Function button</li> 
</ol>

<p>
This time, let us sort data by the number of orders, in the descending order. To do this, we
</p>

<ol start="5">
<li>make the line Count of Order ID active, click on the sorting icon and select Descending</li>
</ol>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example03.png" class="fancybox" data-fancybox-group="gallery" title="Query example 3: Table data with sorting">
<img src="images/eq-ug-example03.png" alt="Query example 3: Table data with sorting">
</a>
</div>
</div>

<p>Results are displayed according to the number of orders made by every company, in the descending order.</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example03-r.png" data-fancybox-group="gallery" title="Query example 3: Table data with sorting: Results">
<img src="images/eq-ug-example03-r.png" style="width:600px" alt="Query example 3: Table data with sorting: Results">
</a>
</div>
</div>


<h3>4) Filtering Data 1 (One Condition)</h3>

<p>We often deal with situations when, for example, of all the customer companies, we must select only those who have purchased goods worth 450 or more. In cases like this, we should use the Conditions Panel for data sorting.</p>

<p>Let us do a sample query with the following data displayed: customer companies, countries of their origin, and total sum of their purchases. So, in the Columns Panel we select:</p>
<ol>
<li>Customer -&gt; Country,</li>
<li>Customer -&gt; Name,</li>
<li>Order -&gt; Total sum.</li>
</ol>
<p>
Now we switch to the Conditions Panel and:
</p>

<ol start="4">
<li> add Order -&gt; Total sum,</li>
<li> change the operator 'is equal to' to 'is greater than or equal to,'</li>
<li> and enter 450 in the value slot, as it is shown in the picture below.</li> 
</ol>


<p>It will look like this:</p>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example04.png" class="fancybox" data-fancybox-group="gallery" title="Query example 4: Filtering data 1 condition">
<img src="images/eq-ug-example04.png" alt="Query example 4: Filtering data 1 condition">
</a>
</div>
</div>


<h3>5) Filtering Data 2 (Several Conditions)</h3>


<p>Often we have not one, but several conditions for filtering data. For example, we need a list containing information on:</p>
<ul>
<li>customer companies from Germany,</li>
<li>whose purchases are worth more than 450,</li>
<li>and those purchased products are in the 'Dairy products' category.</li>
</ul>


<p>Firstly, we need to specify that, if (by default) every new condition is an additional limitation to the existing ones, they are connected by a conjunction 'and.' In this particular case, it absolutely suits us, but we will show you how to change this (when necessary) a little bit later.


</p><p>Thus, when building a query, we indicate first which columns to display, through the Columns Panel:</p>
<ol>
<li>Customer -&gt; Company name,</li>
<li>Customer -&gt; Country,</li>
<li>Order -&gt; Total sum,</li>
<li>Product -&gt; Category,</li>
</ol>
<p>
then we add the following to the Conditions Panel:
</p>
<ol start="5">
<li>Order Total sum -&gt; "is greater than" -&gt; 450</li>
<li>and: Product Category -&gt; "is equal to" -&gt; Dairy products</li>
<li>and: Customer Country -&gt; "is equal to" -&gt; Germany</li>
</ol>

<p>See how it looks below:</p>

<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example05.png" class="fancybox" data-fancybox-group="gallery" title="Query example 5: Filtering data: Several conditions">
<img src="images/eq-ug-example05.png" alt="Query example 5: Filtering data: Several conditions">
</a>
</div>
</div>


<h3>6) Filtering Data 3 (Several Conditions with AND and OR Conjunctions)</h3>


<p>Let us suppose that the query conditions in the example 5) have changed to the following:</p>
<i>We need a list of customer companies which:</i>
<ul>
<li>purchased a total of $450 worth of products</li>
<li>in the Diary category,</li>
<li>and their postal code contains 4 or 5.</li>
</ul>


<p>In the Columns Panel, we select:</p>
<ol>
<li>Customer -&gt; Company name,</li>
<li>Order -&gt; OrderID (f = Count),</li>
<li>Product -&gt; Name</li>
<li>We keep 'all' in the Conditions Panel's topmost line ("Select records where all of the following apply")</li>
<li>Using a [+] button, we add a condition: Order -&gt; Total sum -&gt; "is greater than" -&gt; 450</li>
<li>and another condition: (and) Product -&gt; Category -&gt; "is equal to" -&gt; Dairy Products</li>
<li>Next to the first line at the top, we add a group of conditions with the help of a symbol {+} and leave 'any' in a newly formed line.</li>
</ol>
<p>
Consistently, after "and any of the following apply," we add two conditions, by clicking a [+] button:
</p>
<ol start="8">
<li>Customer -&gt; Postal code -&gt; "is equal to" -&gt; 4</li>
<li>(or) Customer -&gt; Postal code -&gt; "is equal to" -&gt; 5</li>
</ol>


<p>It will look this way:</p>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example06.png" class="fancybox" data-fancybox-group="gallery" title="Query example 6: Filtering data: Several conditions using AND/OR">
<img src="images/eq-ug-example06.png" alt="Query example 6: Filtering data: Several conditions using AND/OR">
</a>
</div>
</div>


<h3>7) Enabling/Disabling of Conditions </h3>


<p>Let us assume that we are interested in a particular product - Aniseed Syrup. All we need to know is the list of companies that either have paid for their order, or have made an order starting from the first day of the year.<br>
Therefore, we indicate the following in the Columns Panel:
</p><ol>
<li>Customer -&gt; Company name,</li>
<li>Order -&gt; Freight (f = Sum),</li>
<li>Product Name (we will use it only to illustrate the example better).</li>
</ol>

<p>
In the Conditions Panel, we will take a set of steps:
</p>

<ol start="4">
<li>Product -&gt; Product -&gt; "is equal to" Aniseed Syrup</li>
<li>We create a group of conditions by clicking {+} and using 'any' in "and any of the following apply"</li>
<li>Order -&gt; Paid -&gt; "is true"</li>
<li>(or) Order -&gt; Date -&gt; "after (special)" -&gt; First day of the year</li>
</ol>

<p>Below is the visual representation of our steps:</p>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example07-1.png" class="fancybox" data-fancybox-group="gallery" title="Query example 7: Enabling/Disabling conditions - ON">
<img src="images/eq-ug-example07-1.png" alt="Query example 7: Enabling/Disabling conditions - ON">
</a>
</div>
</div>


<p>And the result we get:</p>
<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example07-1-r.png" class="fancybox" data-fancybox-group="gallery" title="Query example 7: Enabling/Disabling conditions - ON, results">
<img src="images/eq-ug-example07-1-r.png" alt="Query example 7: Enabling/Disabling conditions - ON, results">
</a>
</div>
</div>


<p>It can happen so that we will be needing only total sums of orders made after beginning of the year, or right the opposite - only orders which have been paid for (with no time restrictions).</p>


<p>There is an option of hiding particular conditions specifically for cases like this one. To the right of a condition itself, you will see a 'hide condition' button - [o]. By clicking on it, we get a broader range of data we want to be displayed:</p>


<div class="c-center">
<div class="krh-blog-ss-block">
<a href="images/eq-ug-example07-2.png" class="fancybox" data-fancybox-group="gallery" title="Query example 7: Enabling/Disabling conditions - OFF">
<img src="images/eq-ug-example07-2.png" alt="Query example 7: Enabling/Disabling conditions - OFF">
</a>
</div>
</div>
