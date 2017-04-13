/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.Package'  // from "package-loader"
    ],

    routes: {
        ':type': {
            before: 'loadPackage',
            action: 'showView'
        }
    },

    /**
     * This method is called before we take action on a route change. Before we can
     * create the proper view, we need to be sure the package that provides it is
     * loaded.
     */
    loadPackage: function (type, action) {
        var tabpanel = this.getView(),
            tab = this.lookup(type),
            pkg = tab.package;

        if (!pkg || Ext.Package.isLoaded(pkg)) {
            action.resume();
        }
        else {
            tabpanel.setMasked({
                message: 'Loading Package...'
            });

            Ext.defer(function () {  // so we can see the loading mask...
                Ext.Package.load(pkg).then(function () {
                    tabpanel.setMasked(null);

                    action.resume();
                });
            }, 500);
        }
    },

    /**
     * This method is called to take action on a route change. We create the associated
     * view and rely on our "before" handler (loadPackage) to ensure we can do so.
     */
    showView: function (type) {
        var tabpanel = this.getView(),
            tab = this.lookup(type);

        tabpanel.setActiveItem(tab);

        if (!tab.hasItem) {
            tab.hasItem = true;

            tab.add({
                xtype: tab.view
            });
        }
    },

    onItemActivate: function(tabpanel, tab) {
        this.redirectTo(tab.reference);
    }
});
