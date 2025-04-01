---
title: EasyQuery.JS widgets localization
slug: tutorials/javascript-widgets-localization
sidebar:
  order: 100
---

EasyQuery.JS widgets allows to translate all texts shown to the users to any language by your choice. All you need to do for that - is to perform the next 3 simple steps:

## Step 1: Prepare the object with locale settings

First of all you need to define an object which will contain some locale settings and the translations for all messages used inside EasyQuery.JS library.

Here is an example of such object for English language:

```js

var englishLocaleInfo = {
    englishName: "English",
    displayName: "English",
    settings : {
        dateFormat: 'MM/dd/yyyy',
        decimalSeparator: '.'
    },
    texts: {
        AltMenuAttribute: "Attribute",
        AltMenuConstantExpression: "Constant expression",
        ButtonApply: "Apply",
        ButtonCancel: "Cancel",
        ButtonOK: "OK",
        ButtonClear: "Clear",
        ButtonEnable: "Toggle enable",
        MenuEnable: "Enabled",
        MenuParameterization: "Parameterized",
        MenuJoinCond: "Use in JOIN",
        ButtonDelete: "Delete",
        ButtonAddCondition: "Add condition",
        ButtonAddPredicate: "Add group of conditions",
        ButtonSelectAll: "Select all",
        ButtonDeselectAll: "Clear selection",
        ButtonAddColumns: "Add column(s)",
        ButtonAddConditions: "Add condition(s)",

        CmdAddConditionAfter: "Add a new condition after the current row",
        CmdAddConditionInto: "Add a new condition",
        CmdAddPredicateAfter: "Open a bracket after the current row",
        CmdAddPredicateInto: "Open a bracket",
        CmdClickToAddCondition: "[Add new condition]",
        CmdDeleteRow: "Delete this row",
        ErrIncorrectPredicateTitleFormat: "Incorrect predicate title format",
        ErrNotNumber: " is not a number",
        ErrIncorrectInteger: "Incorrect integer value",
        ErrIncorrectNumberList: "Incorrect list format",
        False: "False",
        LinkTypeAll: "all",
        LinkTypeAny: "any",
        LinkTypeNone: "none",
        LinkTypeNotAll: "not all",
        ConjAll: "and",
        ConjAny: "or",
        ConjNotAll: "and",
        ConjNone: "or",
        MsgApplySelection: "[Apply selection]",
        MsgAs: "as",
        MsgEmptyList: "(empty list)",
        MsgEmptyListValue: "[select value]",
        MsgEmptyScalarValue: "[enter value]",
        MsgSubQueryValue: "[edit sub-query]",
        MsgEmptyAttrValue: "[select attribute]",
        MsgEmptyCustomSql: "[enter SQL expression]",
        MsgCustomSql: "[Custom SQL]",
        MsgNoResult: "No result",
        MsgResultCount: "{0} records found",

        MsgOf: "of",
        PredicateTitle: "{lt} of the following apply",
        RootPredicateTitle: "Select records where {lt} of the following apply",
        StrAddConditions: "Add conditions",
        SubQueryDialogTitle: "Edit sub-query",
        SubQueryColumnTitle: "Column:",
        SubQueryEmptyColumn: "[select column]",
        SubQueryQueryPanelCaption: "Conditions",
        True: "True",

        ButtonSorting: "Sorting",
        ButtonToAggr: "Change to aggregate column",
        ButtonToSimple: "Change to simple column",
        CmdAscending: "Ascending",
        CmdClickToAddColumn: "[Add new column]",
        CmdDeleteColumn: "Delete column",
        CmdDeleteSorting: "Delete sorting",
        CmdDescending: "Descending",
        CmdGroupSort: "Sorting",
        CmdNotSorted: "Not sorted",
        ColTypeAggrFunc: "Aggregate function",
        ColTypeCompound: "Calculated",
        ColTypeGroup: "Column type",
        ColTypeSimple: "Simple column",
        HeaderExpression: "Expression",
        HeaderSorting: "Sorting",
        HeaderTitle: "Title",
        SortHeaderColumn: "Column",
        SortHeaderSorting: "Sorting",
        StrAddColumns: "Add columns",
        CustomExpression: "Custom Expression",

        CmdMoveToStart: "Move to start",
        CmdMoveRight: "Move right",
        CmdMoveLeft: "Move left",
        CmdMoveToEnd: "Move to the end",
        ButtonMenu: "Show menu",
        CmdToSimple: "Not aggregated",

        CmdMoveToFirst: "Move to the first",
        CmdMoveToPrev: "Move to the previous",
        CmdMoveToNext: "Move to the next",
        CmdMoveToLast: "Move to the last",

        //FilterBar
        StrNoFilterDefined: "No filter defined",
        StrNoFilterClickToAdd: "No filter defined. Click to add a new condition",

        //DateTime macroses
        Today: "Today",
        Yesterday: "Yesterday",
        Tomorrow: "Tomorrow",
        FirstDayOfMonth: "First day of the month",
        LastDayOfMonth: "Last day of the month",
        FirstDayOfWeek: "First day of the week",
        FirstDayOfYear: "First day of the year",
        FirstDayOfNextWeek: "First day of the next week",
        FirstDayOfNextMonth: "First day of the next month",
        FirstDayOfNextYear: "First day of the next week",
        Now: "Now",
        HourStart: "This hour start",
        Midnight: "Midnight",
        Noon: "Noon",

        Entities: {},
        Attributes: {},
        Operators: {},
        AggreateFunction: {}
    }
};
```

Of course, you don't really need to replace all text messages listed above. If you want to replace just a few messages - you can add only those messages to the `texts` object and skip all others. 


## Step 2: Update your locale info

Now you need to update your locale information using the object defined on the previous step. If you are using EasyQuery NPM packages you will need to import `eqi18n` module from `@easyquery/core` and then call `updateLocaleInfo` function.

```js
import { i18n }  from '@easyquery/core'

.    .    .   

i18n.updateLocaleInfo('en', englishLocaleInfo);

```

if you use easyquery bundle scripts (e.g. from our [CDN](https://cdn.korzh.com/eq/7.1.0/eq.enterprise.min.js)) then you can access all those functions via `easyquery.core` namespace:

```
easyquery.core.i18n.updateLocaleInfo('en', englishLocaleInfo);
```


## Step 3: Set current locale

The updating of locale settings can be done once at the start of your application and for all locales you plan to use. 
After that, at the moment when you need to switch your current locale you can call `setCurrentLocale` function:

```js
import { i18n }  from '@easyquery/core'

   .    .    .    .
   
i18n.setCurrentLocale('en');
```

or bundle/CDN version:

```js
easyquery.core.i18n.setCurrentLocale('en');
```


## Updating text resources only

The 3-step approach described above can be used if you create a multi-lingual application where users can switch between languages. In case you just need to change some default text resources for the current language there is a simpler way:

```js
import { i18n }  from '@easyquery/core'

   .    .    .    .
   
i18n.updateLocaleTexts({
        ButtonOK: "Yes",
        ButtonClear: "No",
		.   .   .   .
});
```

As usual in case of bundle you can use :

```
easyquery.core.i18n.updateLocaleTexts({...});
```


## Updating current locale settings

The same approach ca be used with locale settings:

```js
   
i18n.updateLocaleSettings({
        shortDateFormat: 'dd MMM yyyy',
        editDateFormat: 'dd/MM/yyyy',
        longDateFormat: 'dd MMMM yyyy'
        shortWeekDayNames: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        decimalSeparator: '.'
});
```

## Localization of data model objects

You could have noticed that there are 4 sections in text resources (`Entities`, `Attributes`, `Operators`, `AggregateFunctions`) which are empty by default. These sections allow you to localize the objects in your data model. Each of them represents one particular part of your data model (the names are self-descriptive). 
If there are some values defined in one of these sections for a particular ID, those values will be used during the rendering. Otherwise - EasyQuery.JS will default values from the model. 

Here is an example how we can replace the captions and formats for all aggregate functions:

```js
i18n.updateLocaleTexts({
  AggregateFunctions: {
    SUM: {
      caption: "Sum",
      displayFormat: "[[Sum]] of {attr1}",
    },
    COUNT: {
      caption: "Count",
      displayFormat: "[[Count]] of {attr1}",
    },
    CNTDST: {
      caption: "Distinct count",
      displayFormat: "[[Distinct count]] of {attr1}",
    },
    AVG: {
      caption: "Average",
      displayFormat: "[[Average]] of {attr1}",
    },
    MIN: {
      caption: "Minimum",
      displayFormat: "[[Minimum]] of {attr1}",
    },
    MAX: {
      caption: "Maximum",
      displayFormat: "[[Maximum]] of {attr1}",
    },
  },
});
```
