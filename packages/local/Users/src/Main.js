/**
 * This view is an example list of people.
 */
Ext.define('Demo.users.Main', {
    extend: 'Ext.grid.Grid',
    xtype: 'usersmain',
    controller: 'usersmain',

    title: 'Users',

    store: {
        type: 'users'
    },

    columns: [{
        text: 'Name',
        flex: 1,
        tpl: '<div class="demo-users-avatar"></div>{name}',
        cell: {
            encodeHtml: false
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1,

        cell: {
            userCls: 'demo-users-cell'
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
