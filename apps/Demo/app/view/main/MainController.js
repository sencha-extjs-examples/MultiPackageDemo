/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.Package'  // from "package-loader"
    ],

    routes: {
        'type/:type': {
            before: 'loadPackage',
            action: 'showView'
        }
    },

    loadPackage: function (type, action) {
        if (type === 'Home' || Ext.Package.isLoaded(type)) {
            action.resume();
        } else {
            var tabpanel = this.getView();

            tabpanel.setMasked({
                message: 'Loading Package...'
            });

            Ext.Package.load(type).then(function () {
                tabpanel.setMasked(null);

                action.resume();
            });
        }
    },

    showView: function (type) {
        var tabpanel = this.getView(),
            tab = tabpanel.child('[title=' + type + ']');

        tabpanel.setActiveItem(tab);

        if (type !== 'Home') {
            if (!tab.hasItem) {
                tab.hasItem = true;

                tab.add({
                    xtype: this.packageViews[type]
                });
            }
        }
    },

    onItemActivate: function(tabpanel, tab) {
        this.redirectTo('type/' + tab.title);
    },

    packageViews: {
        Users: 'userslist',
        Dashboard: 'dashboardlist',
        Settings: 'settingslist'
    }
});
