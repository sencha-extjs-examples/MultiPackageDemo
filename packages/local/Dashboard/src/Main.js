/**
 * This view is an example list of people.
 */
Ext.define('Demo.dashboard.Main', {
    extend: 'Ext.grid.Grid',
    xtype: 'dashboardmain',
    controller: 'dashboardmain',

    title: 'Dashboard',

    store: {
        type: 'users'
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
