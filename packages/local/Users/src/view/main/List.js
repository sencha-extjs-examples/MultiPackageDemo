/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.UsersList', {
    extend: 'Ext.grid.Grid',
    xtype: 'userslist',

    requires: [
        'App.store.Users'
    ],

    title: 'Users',

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
