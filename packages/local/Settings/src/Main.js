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

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
