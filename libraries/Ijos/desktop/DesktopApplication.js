Ext.define('Ijos.desktop.DesktopApplication',{
    extend: 'Ext.app.Controller',
    xtype:'ijoscoreappdesktop',
    
    documentHead : Ext.getHead(),
    appId:null,
    pid: null,
    desktop:null,
    controllers:[],
    loadedControllers:null,
    name:null,
    appDir:null,
    
    css:[],
    js:[],
    
    init:function(){
        var me = this;
        me.loadDependencies();
       
       
    },
    loadDependencies:function(){
        var me =this;
        var loadedDeps = 0;
        var nbDeps = me.css.length + me.js.length;
        
        //loaded dependencies handler
        var fn = function(){
            loadedDeps++;
            if(loadedDeps == nbDeps){
                me.loadControllers();
                Ext.Function.defer(me.fireEvent,200,me,['dependenciesloaded']);
            }
        };
        
        //no denpendencies
        if(nbDeps == 0){
             me.loadControllers();
            Ext.Function.defer(me.fireEvent,200,me,['dependenciesloaded']);
            return;
        }
        
        
        Ext.each(me.css,function(file){
            Ext.Function.defer(Ijos.io.File.requireCSS,200,me,[file,fn]);
        });
        Ext.each(me.js,function(file){
            Ext.Function.defer(Ijos.io.File.requireJS,200,me,[file,fn]);
        });
        
    },
    loadControllers:function(){
        var me = this;
        me.loadedControllers = Ext.create('Ext.util.MixedCollection');
        
        Ext.each(me.controllers, function(ctrlName){
            var ctrlInstance = Ext.create(ctrlName,{
                application: me,
                pid : me.pid
            });
            
            ctrlInstance.id = ctrlInstance.id || ctrlName;
            
            me.loadedControllers.add(ctrlInstance);
            ctrlInstance.init();
        });
    },
    
    run: function(){
        var me = this;
        var panel;
        me.getApplication().fireEvent('deskapp.beforelaunch',me);
        me.beforeLaunch.call(me.scope || me);
        
        
        panel = Ext.create(me.appDir+'.view.Main',{
            bubbleEvents:['titlechanged'],
            header:false,
            border:false,
            itemId:'ijos-widget-'+me.getPid(),
            pid:me.getPid()
        });
        panel.on('destroy',me.deskAppDestroy,me);
        me.getApplication().fireEvent('deskapp.launch',me,panel);
        me.launch.call(me.scope || me);
        
        return panel;
    },
    getName:function(){
        var me = this;
        return me.name;
    },
    getAppId:function(){
        var me = this;
        return me.appId;  
    },
    getPid:function(){
        var me = this;
        return me.pid;  
    },
    beforeLaunch:function(){
        
    },
    launch:function(){
        
    },
    deskAppDestroy: function(cmp) {
        var me = this;
        me.getApplication().fireEvent('deskapp.finalize',me);
        me.removeControllers();
        
         
        me = null;
    },
    removeControllers:function(){
        var me = this;
        me.loadedControllers.each(function(controller) {
            me.loadedControllers.remove(controller);
            me.eventbus.uncontrol([controller.id]);
        });
       
    }
    
})