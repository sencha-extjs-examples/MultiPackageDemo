/**
 */
Ext.define('Demo.settings.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.settingsmain',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        Demo.alerts.Manager.alert('Settings choice is "' + choice + '"');
        // if (choice === 'yes') {
        //     //
        // }
    }
});
