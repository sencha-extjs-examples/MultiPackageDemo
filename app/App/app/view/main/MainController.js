/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: ['Ext.Package'],

    alias: 'controller.main',

    routes: {
        'type/:type': {
            before: 'loadPackage',
            action: 'showView'
        }
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
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
                    xclass: 'App.view.main.' + type + 'List'
                });
            }
        }
    },

    onItemActivate: function(tabpanel, tab) {
        var pkgName = tab.title;

        this.redirectTo('type/' + pkgName);
    }
});
