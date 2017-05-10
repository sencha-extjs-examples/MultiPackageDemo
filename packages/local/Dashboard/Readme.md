# Dashboard

This package is referenced by the `Demo` app via `uses` for dynamic loading.
The following files are all needed to build and load this package.

 - `"package.json"` - The package descriptor which controls how the application
   is built and loaded.
 - `"build.xml"` - The entry point for Sencha Cmd to access the build script.
   This file is a place where you can hook into these processes and tune
   them. See the comments in that file for more information.

# Other Folders

## Basic Application Structure

Applications that target a single toolkit will have the following structure.

    src/                    # Contains JavaScript and Fashion code
       Main.js              # The main view class
       Main.scss            # Style associated with the main view
       MainController.js    # The controller for the main view

    resources/              # Assets such as images, fonts, etc.

### Styles

You can place styles in `'.scss'` files for any `'.js'` file in the app. These
will be automatically included in the same dependency order as the JavaScript
classes themselves.

## Overrides

The contents of "overrides" folders are automatically required and included in
builds. These should not be explicitly mentioned in "requires" or "uses" in code.
This area is intended for overrides like these:

    Ext.define('Demo.overrides.foo.Bar', {
        override: 'Ext.foo.Bar',
        ...
    });

Such overrides, while automatically required, will only be included if their target
class ("Ext.foo.Bar" in this case) is also required. This simplifies applying
patches or extensions to other classes.
