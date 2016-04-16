Ext.define('WebPharo.view.package.PackageBrowser',{
    extend: 'Ext.tab.Panel',
    xtype:'wppackagebrowser',
    header:false,
    
    
    items:[
    {
        xtype:'wppackagetreeview',
        title:'Base Packages',
        store: 'WebPharo.store.TreePackages'
    }
    ]
       
   
});
