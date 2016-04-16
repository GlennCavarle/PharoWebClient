Ext.define('Ijos.desktop.Kernel',{
    extend: 'Ext.app.Application',
    requires: ['Ext.container.Viewport','Ijos.io.File'],
    
    css:['css/shortcuts.css'],
    js:[
    'libraries/Ijos/overrides/Ext.app.EventBus.js'
    ],
    
    name: 'IjosDesk',
    appFolder: 'desktop',
    appProperty:'desktop',
    autoCreateViewport: true,
    
    
    namespaces: ['IjosDesk'],
    
    views:[
    'taskbar.WindowBar',
    'taskbar.WindowBarButton',
    'taskbar.DeskBar',
    'taskbar.DeskBarButton',
    'taskbar.TaskMenu',
    
    'desktop.Desktop',
    'desktop.DesktopContainer',
    'ShortcutsDataView',
    
    'Window'
    ],
    controllers:[
    'DesktopController',
    'WindowController',
    'TaskbarController',
    'AppController',
    ],
    
    appManager : null,
    
    init: function(){
        var me = this;
        me.callParent(arguments);
        
        me.appManager = Ext.create('Ijos.desktop.AppManager');
        me.resolveDependencies();
        Ijos.setKernel(me);
       
        
        
        
    },
    resolveDependencies:function(){
        var me = this;
        
        Ext.each(me.css,function(file){
            Ijos.io.File.requireCSS(file);
        });
        
        Ext.each(me.js,function(file){
            Ijos.io.File.requireJS(file);
        });
        
    },
    launch: function() {
        var me = this;
        
       
    },
    /**
     * APPLICATIONS
     */
    getAppManager:function(){
        var me = this;
        return me.appManager;
    }
    
});


