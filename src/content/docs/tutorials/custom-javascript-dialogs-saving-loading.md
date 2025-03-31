---
title: Custom client-side dialogs for saving/loading operations
slug: tutorials/custom-javascript-dialogs-saving-loading
---

## Problem

The Advanced Search page and other EasyQuery.JS views use our own home-brewed dialog service to ask user for a confirmation or get some input data (like query or file names, export format, etc.).

Users who use some other dialogs libary usually want to replace those default dialogs with their own. Here we describe how to do it.


## Solution

We are going to replace those default dialogs with nice HTML dialogs made with JQuery UI dialogs library.

The approach we will use is quite simple: our  `AdvancedSearchView` JavaScript class has several methods which can be "overriden" to replace the default behavior with your own implemenation of those dialogs. 

### Step 1: Define the placeholders for dialogs

In case of using JQuery dialogs we need to define some placeholders (read `div` elements) on our page where our new dialogs will be rendered. We can place those `div`s anywhere on our page - anyway, they will be hidden till the time they needed. Here is an example:

```
<div id="dialog-confirm" style="display:none">
    <p id="dialog-confirm-content"></p>
</div>

<div id="dialog-form" style="display:none">
    <form>
        <label for="name" id="dialog-form-content"></label>
        <input type="text" name="name" id="dialog-form-input" class="text ui-widget-content ui-corner-all" />
    </form>
</div>
```

NB: Please note that this step is specific for JQuery dialogs. Other libaries might require some other preparations to be made.


### Step 2: New AdvancedSearchView class

Now we need to define our own AdvancedSearchView class (inherited from the original one) and override some methods in it. 

Here is an example of such class for "pure" JavaScript 5 (where we don't actually have "classes" yet):

```js

var advsearch = (function () {
    'use strict';

    //defining JQuery replacement for "confirmation" dialog 
	
    var confirmDialog = $('#dialog-confirm').dialog({
        closeOnEscape: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        autoOpen: false
    });

    var openConfirm = function (title, content, callback) {
        confirmDialog.dialog('option', 'title', title);
        $('#dialog-confirm-content').text(content);

        var buttons = [
            {
                text: "OK",
                click: function () {
                    callback(true);
                    $(this).dialog("close");
                }
            },
            {

                text: "Cancel",
                click: function () {
                    callback(false);
                    $(this).dialog("close");
                }
            }

        ];

        confirmDialog.dialog('option', 'buttons', buttons);
        confirmDialog.dialog('open');

    };

    //defining JQuery replacement for "prompt" dialog 
	
    var promptDialog = $('#dialog-form');
    promptDialog.dialog({
        closeOnEscape: false,
        draggable: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        autoOpen: false
    });


    var openPrompt = function (title, content, defVal, callback) {
        promptDialog.dialog('option', 'title', title);
        $('#dialog-form-content').text(content);
        $('#dialog-form-input').val(defVal);

        var buttons = [

            {
                text: "OK",
                click: function () {
                    var result = $('#dialog-form-input').val();
                    if (result && result.length) {
                        callback(result);
                        $(this).dialog("close");
                    }
                }
            },

            {

                text: "Cancel",
                click: function () {
                    callback("");
                    $(this).dialog("close");
                }
            }

        ];

        promptDialog.dialog('option', 'buttons', buttons);

        promptDialog.dialog('open');
    };

    // Inheritance in JS5
    var CustomAdvancedSearchView = function () {
        Object.getPrototypeOf(CustomAdvancedSearchView.prototype).constructor.call(this);
    };

    CustomAdvancedSearchView.prototype = Object.create(easyquery.ui.AdvancedSearchView.prototype);

    // Overriding showNewQueryDialog method
    CustomAdvancedSearchView.prototype.showNewQueryDialog = function (callback) {
        openPrompt('New query', 'Enter new query name', 'New query', callback);
    };

    // Overriding showQueryChangedDialog method
    CustomAdvancedSearchView.prototype.showQueryChangedDialog = function (callback) {
        openConfirm('Query was changed', 'Query was changed. Do you want to save it first?', callback);
    };

    // Overriding showSaveQueryDialog method
    CustomAdvancedSearchView.prototype.showSaveQueryDialog = function (callback) {
        var query = this.context.getQuery();
        openPrompt('Save query', 'Please enter query name', query.getName() + ' ' + 'copy', callback);
    };

    // Overriding showRemoveQueryDialog
    CustomAdvancedSearchView.prototype.showRemoveQueryDialog = function (callback) {
        var query = this.context.getQuery();
        openConfirm('Remove query', `Remove query '${query.getName()}'?`, callback);
    };

    return {
        CustomAdvancedSearchView: CustomAdvancedSearchView
    };

}());
```

> NB: [Contact us](https://korzh.com/support) if you need a TypeScript version of this file.


Add this script to your page. Don't forget to include JQuery UI (version 1.12 or higher) before.

### Step 3: Replace the default view with the new one

Now you just need to replace the line of code on your page (or a separate .js file if you place all your JS code there) which creates the `view` object.

So, instead of something like this:

```
var view = new easyquery.AdvancedSearchView();
.    .    .    .   . 
view.init(options);
```

it should be now:

```
var view = new advsearch.CustomAdvancedSearchView();
.    .    .    .   . 
view.init(options);
```


That's all! Now when run your project, open the Advanced Search page and try to perform some query save/loading operations - you will see the new dialogs.