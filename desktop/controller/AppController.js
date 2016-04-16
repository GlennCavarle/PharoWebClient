Ext.define('IjosDesk.controller.AppController',{
    extend: 'Ijos.desktop.Controller',
    
    stores:[
    'IjosDesk.store.Applications'
    ],
    
    refs:[{
        ref: 'deskContainer',
        selector: 'ijosdeskcontainer'
    },{
        ref: 'windowBar',
        selector: 'ijoswindowbar'
    }],


    init:function(){
        var me = this;
        me.control({
            'ijosshortcutview':{
                'itemclick':me.onShortcutClick
            },
            'ijostaskmenu menuitem':{
                'click': me.onMenuClick
            }
        });
        
        Ijos.getKernel().on('deskapp.finalize',me.removeDeskApp,me);
        
    },
    /**
     *
     */
    onShortcutClick:function(dataView,shortcutModel){
        var me = this;
        
        var appId = shortcutModel.get('appId');
        var appModel = me.getStore('IjosDesk.store.Applications').findRecord('id',appId);
       
        me.getAppManager().createApp(appModel);
        
    },
    onMenuClick:function(item){
        var me = this;
        me.getAppManager().createApp(item.data);
    },
   
    removeDeskApp : function(app){
        var me = this;
        me.getAppManager().removeApp(app);
        
        
    /*
        var appContainer = me.getAppManager().get(app.getAppId());
        var win = appContainer.window;
        
        me.getWindowBar().removeButton(appContainer.taskButton);
        appContainer.desktop.remove(win);
         
        
        
        if(!Ext.isEmpty(me.getAppManager().last())){
            me.getWindowBar().setActiveButton(me.getAppManager().last().button);
        }
        
        me.getAppManager().removeAtKey(app.getAppId());*/
    }
    
});