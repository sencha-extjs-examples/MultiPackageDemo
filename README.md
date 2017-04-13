# MultiPackageDemo

This example demonstrates how to build an application that consists of independently
built, dynamically loaded packages.

This mock application uses packages in real-world ways to show how to use the same
techniques in your applications.

Following is a diagram of this application and its packages:

![Architecture](docs/architecture.png)

## Model

This package contains the data model of the application. In a traditional application
the classes in this package would be in the `'app/model'` and `'app/store'` folders.
These pieces are factored out of the application proper because other packages are
likely to reference them. The application simply `requires` them in its `'app.json'`
and is otherwise unaffected.

## Dashboard & Settings

These packages are listed in the `uses` of the application's `'app.json'` file and
as such are not loaded until requested. These are just placeholders for real content.

The code used to load such packages looks like the following:

    Ext.Package.load('Dashboard').then(function () {
    
        // the classes in the package are available...
        
    });

## Users

This is also a placeholder but shows how a package can manage its own styling and
resources.

### Styling

The styles are contained in files that correspond to JavaScript files. In this package,
`'src/Main.scss'` contains the styles needed by `'src/Main.js'` (the package's main view).

### Resources

The `'resources'` folder contains an `'avatars'` subfolder with some images. The URL's
to these can be resolved using `Ext.getResourcePath` or `Ext.resolveResource`, but in
the `'src/Main.js'` file, its `tpl` uses the `resources` formatter:

    tpl: '<img class="demo-users-avatar" ' + 
          'src="{avatar:resource("<@Users>avatars/")}">' +

These techniques are extremely helpful when dealing with path differences in development
versus production builds.

## Alerts

This package is in the `requires` of the `Dashboard` and `Settings` packages but is
unknown directly by the `Demo` application. This situation will be common in large scale
development situations where the application core is quite small.

The important thing to understand about this arrangement is that `Ext.Package.load()` is
a "transitive" process. In other words, when the application loads `Dashboard` as shown
below, more steps are taken internally to satisfy these dependencies.

    Ext.Package.load('Dashboard').then(function () {
        // ...
    });

When the above is called, the `load()` method will effectively do the following:

    Ext.Package.load('Alerts').then(function () {
        return Ext.Package.load('Dashboard');
    });

That is, the `Alerts` package dependency will be handled prior to loading the `Dashboard`
package. The application does not need to manage this situation.
