Ext.define('Demo.model.users.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.users',

    data: [
        {
            name: 'Jessica Warren',
            email: 'jessica.warren@acme.ccm',
            phone: '555-111-1111',
            avatar: 'jessica-warren.png'
        },

        {
            name: 'Donald Brown',
            email: 'donald.brown@acme.com',
            phone: '555-222-2222',
            avatar: 'donald-brown.png'
        },

        {
            name: 'Lucy Moon',
            email: 'lucy.moon@acme.com',
            phone: '555-333-3333',
            avatar: 'lucy-moon.png'
        },

        {
            name: 'Jim Sanchez',
            email: 'jim.sanchez@acme.com',
            phone: '555-444-4444',
            avatar: 'jim-sanchez.png'
        },

        {
            name: 'Marion Williams',
            email: 'marion.williams@acme.com',
            phone: '555-454-3241',
            avatar: 'marion-williams.png'
        }
    ]
});
