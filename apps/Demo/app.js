/*
 * This file launches the application.
 */
Ext.application({
    name: 'Demo',

    extend: 'Demo.Application',

    requires: [
        'Demo.*'
    ],

    // The name of the initial view to create. The main view will be
    // added to the Ext.Viewport.
    //
    mainView: 'Demo.view.main.Main'
});
