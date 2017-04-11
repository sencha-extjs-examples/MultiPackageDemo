/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: ['Ext.Package'],
    
    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    gotoPage: function(type, tabContainer) {
        if (type != 'Home') {
            if (!Ext.Package.isLoaded(type)) {
                Ext.Package.load(type).then(function(){
                    var clsName = 'App.view.main.' + type + "List";
                    tabContainer.add(Ext.create(clsName, {}));
                });
            }
        }
    },
    
    onItemActivate: function(sender, value, oldValue, eOpts) {
        var pkgName = value.title;
        this.gotoPage(pkgName, value);
    }
});
