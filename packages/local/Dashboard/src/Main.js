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

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1,

        cell: {
            userCls: 'demo-dashboard-cell'
        }
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
