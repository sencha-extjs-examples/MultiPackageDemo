Ext.define('Demo.alerts.Manager', {
    singleton: true,

    alert: function (msg) {
        Ext.Msg.alert('Alert', msg);
    }
});
