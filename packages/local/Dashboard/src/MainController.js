/**
 */
Ext.define('Demo.dashboard.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.dashboardmain',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        Demo.alerts.Manager.alert('Dashboard choice is "' + choice + '"');
        // if (choice === 'yes') {
        //     //
        // }
    }
});
