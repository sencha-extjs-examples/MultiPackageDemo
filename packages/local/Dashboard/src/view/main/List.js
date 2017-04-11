/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.DashboardList', {
    extend: 'Ext.grid.Grid',
    xtype: 'dashboardlist',

    requires: [
        'App.store.Dashboard'
    ],

    title: 'Dashboard',

    store: {
        type: 'dashboard'
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
