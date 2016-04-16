Ext.define('WebPharo.controller.PackageBrowserController',{
    extend: 'Ijos.app.Controller',
   
    stores:[
    'WebPharo.store.TreePackages'
    ],
    views:[
    'WebPharo.view.package.PackageBrowser',
    'WebPharo.view.package.PackageTreeView'
    ],

    init: function() {
        var me = this;
       
        
        
    }

});