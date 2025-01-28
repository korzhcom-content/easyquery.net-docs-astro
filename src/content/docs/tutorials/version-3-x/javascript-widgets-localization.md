---
title: Localization of EasyQuery widgets (obsolete)
slug: tutorials/version-3-x/javascript-widgets-localization
---


To localize JavaScript widgets, you need to create a separate .js file with translated texts and include it after eq.all.min.js.

There is EQ.core.texts global object which holds all text messages used in EasyQuery widgets.

You just need to replace it with your own. Here is its default definition: 

```
EQ.core.texts = {
  Locale: "en",
  AltMenuAttribute: "Attribute",
  AltMenuConstantExpression: "Constant expression",
  ButtonApply: "Apply",
  ButtonCancel: "Cancel",
  ButtonOK: "OK",
  ButtonEnable: "Toggle enable",
  ButtonDelete: "Delete",
  ButtonAddCondition: "Add condition",
  ButtonAddPredicate: "Add group of conditions",
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
  FirstDayOfMonth: "First day of the month",
  FirstDayOfYear: "First day of the year",
  HourStart: "This hour start",
  LinkTypeAll: "all",
  LinkTypeAny: "any",
  LinkTypeNone: "none",
  LinkTypeNotAll: "not all",
  ConjAll: "and",
  ConjAny: "or",
  ConjNotAll: "",
  ConjNone: "",
  Midnight: "Midnight",
  MsgApplySelection: "[Apply selection]",
  MsgAs: "as",
  MsgEmptyList: "(empty list)",
  MsgEmptyListValue: "[select value]",
  MsgEmptyScalarValue: "[enter value]",
  MsgSubQueryValue: "[edit sub-query]",
  MsgOf: "of",
  Noon: "Noon",
  Now: "Now",
  PredicateTitle: "{lt} of the following apply",
  RootPredicateTitle: "Select records where {lt} of the following apply",
  StrAddConditions: "Add conditions",
  SubQueryDialogTitle: "Edit sub-query",
  SubQueryColumnTitle: "Column:",
  SubQueryEmptyColumn: "[select column]",
  SubQueryQueryPanelCaption: "Conditions",
  Today: "Today",
  Tomorrow: "Tomorrow",
  True: "True",
  Yesterday: "Yesterday",

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

  CmdMoveToStart: "Move to start",
  CmdMoveRight: "Move right",
  CmdMoveLeft: "Move left",
  CmdMoveToEnd: "Move to the end",
  ButtonMenu: "Show menu",
  CmdToSimple: "Not aggregated"

};
```

So to replace the text for “Add new condition” link you just need to make the following call somewhere at your page start code: 

```
EQ.core.text['CmdClickToAddCondition"] = "My own text for add new condition link";
```

As I told at the beginning - you can place all your translations into a separate .js file and only include it into your page after eq.all.min.js Example: 

```
EQ.core.text = {
 
  AltMenuAttribute: "Attribute - translated",
  AltMenuConstantExpression: "Constant expression - translated",
  ButtonApply: "Apply - translated",
  ButtonCancel: "Cancel - translated",
  . . . . . . . . .
}
```

The same approach works for all items in your data model. Just add Entities, Attributes and Operators properties into EQ.core.texts object and define the translations using entity names, attribute or operator IDs correspondingly: 

```
EQ.core.text = {
 
  Entities: {
  "Contact": "Contacto",
  "Customer": "Cliente",
  ....
  },
 
  Attributes: {
  "Customers.Company": "Empresa",
  "Orders.OrderDate": "Fecha de orden",
  . . . 
  },
 
  Operators: {
  "Equal": { 
  "caption": "Equivale", 
  "displayFormat: "{expr1} [[es igual a]] {expr2}" 
  },
  "StartsWith": { 
  "caption": "Comienza con", 
  "displayFormat": "{expr1} [[comienza con]] {expr2}" 
  }
 
  },
 
  . . . . . . . . .
}
```

Please note that there are 2 properties of Operators object for each operator. One of them (“caption”) defines the translation for operator's caption (the text user see when select operator from drop-down list). Second item (“displayFormat”) sets the translation for operator's format - the text which is rendered for operator right in query condition. 

## Datepicker localization

When you need to localize some widgets, you should use jQuery DatePicker widget, and its localization is described in jQuery [documentation](/https://jqueryui.com/datepicker/#localization).

Also, you need to add an option to your easyQuerySettings variable:

```
window.easyQuerySettings = {
  . . . . .,
  locale: "fr", //add this option to make DatePicker set necessary region automatically
  . . . . .,
  queryPanel: { 
  dateFormatValue: "dd/mm/yy", 
  dateFormatDisplay: "dd/mm/yy" 
  },
  
};
```