### ./sass/src

This folder contains Sass files defining CSS rules corresponding to classes
included in the application's JavaScript code build when using the modern toolkit.
By default, files in this folder are mapped to the application's root namespace, 'App'.
This is set in `"app.json"`:

    "sass": {
        "namespace": "App"
    }