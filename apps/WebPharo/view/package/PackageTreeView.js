Ext.define('WebPharo.view.package.PackageTreeView',{
    extend: 'Ext.tree.Panel',
    xtype: 'wppackagetreeview',
    rootVisible: false,
    store: "WebPharo.store.TreePackages"
});