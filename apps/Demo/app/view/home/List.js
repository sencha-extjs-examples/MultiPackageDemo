/**
 * This view is an example list of people.
 */
Ext.define('Demo.view.home.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'homelist',
    controller: 'homelist',

    title: 'Home',

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
        flex: 1
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
