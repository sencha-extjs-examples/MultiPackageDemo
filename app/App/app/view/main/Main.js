/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        layout: 'fit',
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [{
            title: 'Home',
            iconCls: 'x-fa fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            title: 'Users',
            iconCls: 'x-fa fa-user'
        }, {
            title: 'Dashboard',
            iconCls: 'x-fa fa-users'
        }, {
            title: 'Settings',
            iconCls: 'x-fa fa-cog'
        }
    ],

    listeners: {
        activeitemchange: 'onItemActivate'
    }
});
