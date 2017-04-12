/**
 * This view is an example list of people.
 */
Ext.define('Demo.settings.Main', {
    extend: 'Ext.grid.Grid',
    xtype: 'settingsmain',
    controller: 'settingsmain',

    title: 'Settings',

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
            userCls: 'demo-settings-cell'
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
