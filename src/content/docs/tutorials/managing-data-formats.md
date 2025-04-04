---
title: 'Managing data formats in client-side widgets (grid, charts) and exported data'
slug: tutorials/managing-data-formats
sidebar:
  order: 100
---

## 1. Problem

Quite often it's required to modify the appearance and formatting of the data that we show to users as the result of queries' executions.

For example, we may need:

  * to set a specific format for the date/time or numeric values in some columns.

  * to show negative numbers in red, and positive - black.

  * to turn the values in a column into links to other pages.
 

In this article, we will show you how to implement these (or similar) tasks.

  

## 2. Locale settings

First of all to change the formats of your data you might consider adjusting the current locale settings on the client side. There is an article about [EasyQuery.JS widgets localization](/easyquery/docs/tutorials/javascript-widgets-localization) in general but if you need just to change some of the locale settings you can simply use `updateLocaleSettings` function from `easyquery.core.i18n` namespace:

```
easyquery.core.i18n.updateLocaleSettings({
        shortDateFormat: 'dd MMM yyyy',
        editDateFormat: 'dd/MM/yyyy',
        longDateFormat: 'dd MMMM yyyy'
        shortWeekDayNames: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        decimalSeparator: '.'
});
```

Of course, you can set only one property (e.g. `shortDateFormat`) in the object passed to the function. In this case, all other locale settings will remain untouched.

## 3. Data (display) formats

Starting from version 7.1 of EasyQuery you can define a display format for each attribute in your data model and for each column in your query. These formats are applied both in the result grid on the client side and to exported data.

The format definition has the following structure `any text {0:FMT} any text`.     
Here:

* `any text` part literally means any text including an empty string

* `FMT` -  is a format string that has the same meaning as in [`String.Format` function](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting#format-string-component) in C#.

Here are some examples of data formats:

* `{0:D}` - with this format integer values will be represented by digits only (no grouping by thousands) and for date/time values the "long date" format (like `August 24, 1991`) will be used.

* `{0:C2} USD` - this one will show currency values with 2 decimal digits and `USD` suffix at the end

*  `{0:yyyy-MMM-dd}` - this is an example how we can define a custom format for date/time values



### 3.1 Setting the format for an entity attribute

If you define your data model using Data Model Editor utility, you can use "Display Format" field on the page with entity attribute's settings.

![Display format for an entity attribute in DME](https://files.aistant.com/korzh/images/eq-dme-sshot-display-format.png "Display format for an entity attribute in DME")

In all other cases (when we load the model from a DbContext or directly from DB metadata) we can set `DisplayFormat` property in `EntityAttr` class:

```
var attr = dataModel.FindEntityAttr("Order.Freight");
attr.DisplayFormat = "{0:C2}";
```

### 3.2 Setting the format for a query column

If the column is based on an entity attribute, the attribute's DisplayFormat will be used automatically. However, it's possible to change it and set another format for this column. 

In the following example we set a custom date format for the first column in the query:

```
Query.Columns[0].DisplayFormat = "{0:dd/MMM/yyyy}";
```

It's also possible to set the column format in UI with ColumnsBar widget:

![Display format in ColumnsBar](https://files.aistant.com/korzh/images/eq-columnbar-sshot-display-format.png "Display format in ColumnsBar")

The list of formats available for each data type can be set via `DisplayFormats` property of `DataModel` class.


### 3.3 Setting the default format for a type

If you don't want to set the format for each date/time or numeric attribute in your data model, you can set the default format for all attributes and columns of a particular type.

To set the default format you can pass `true` in the last parameter of `DisplayFormats.AddOrUpdate` function:

```
model.DisplayFormats.AddOrUpdate(DataType.Currency, "2-precision", {0:C2}, true);
```

or just call `SetDefault` method if the format already exists:

```
model.DisplayFormats.SetDefault(DataType.Currency, "2-precision");
```

## 4. Result Grid renderers

If you want to render your data in a special way you can define a cell renderer function for each column in the grid. This function will be called to render the cell and you can use to render there any thing you want.

To define the cell renderers you can use `onGetCellRenderer` event in EasyGrid widget:

```
var viewOptions = {
    .     .     .     .
	widgets: {
            easyGrid: {
                onGetCellRenderer: (column, defaultRenderer) => {
                    if (column.type == easydata.core.DataType.DateTime) {
                        return function (value, column, cellElement, rowElement) {
                            var timeOptions = { hour: 'numeric', minute: 'numeric', hour12: false };
                            var strValue = `${value.toLocaleDateString()} ${value.toLocaleTimeString([], timeOptions)}`;
                            cellElement.innerText = strValue;
                        }
                    }
                    if (column.type == easydata.core.DataType.Currency) {
                        return function (value, column, cellElement, rowElement) {
                            var strValue = value.toLocaleString();
                            cellElement.style.backgroundColor = (value < 100) ? 'green' : 'red';
                            cellElement.innerText = strValue;
                        }
                    }
                    return defaultRenderer;
                }
           }
	 }
}
```

The code above defines two renderers. The first one shows the values in all date/time columns in a particular format - the default format for the date part and only hours in 24h format and minutes (no seconds) for time part. The second brush the cells with currency values in a green (for values below 100) and red (above 100) colors.

NB 1: Please note that `onGetCellRenderer` return a function for each particular column. This function will be called for each cell in this column

NB 2: The formatting that is defined this way (via `onGetCellRenderer`) will not be applied to the exported data. So, you can use it only to make some visual adjustments in the result grid. If you need to format the exported data as well, use the approach with Data (display) Formats, described in section #3 of this article.
