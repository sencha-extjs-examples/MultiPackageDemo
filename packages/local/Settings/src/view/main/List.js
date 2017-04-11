/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.SettingsList', {
    extend: 'Ext.grid.Grid',
    xtype: 'settingslist',

    requires: [
        'App.store.Settings'
    ],

    title: 'Settings',

    store: {
        type: 'settings'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
