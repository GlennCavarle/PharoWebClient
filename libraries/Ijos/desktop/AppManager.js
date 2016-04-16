Ext.define('Ijos.desktop.AppManager',{
    extend: 'Ext.util.MixedCollection',
   
    PIDCounter : 1,
   
    createApp:function(appModel){
        var me = this;
     
        me._loadPath(appModel);
        var app = me._createApp(appModel);
     
     
    },
    _loadPath : function(appModel){
        /* Namespace loading*/
        Ext.Loader.setPath(appModel.get('namespace'),appModel.get('link'));
    },
    _createApp: function(appModel){
        var me = this;
        
        if(me.findIndex('appId',appModel.get('id')) !== -1){
            return;
        }
        
        
        var pid = me.PIDCounter++;
       
        var container = Ext.create('Ijos.desktop.AppContainer',{
            pid: pid,
            appId:appModel.get('id')
        });
        
        
        
        var appName = appModel.get('namespace')+'.App';

        try{
            container.application = Ext.create(appName,{
                appId : appModel.get('id'),
                pid: pid,
                application: Ijos.getKernel()
            });
            
            
            container.application.on('dependenciesloaded',function(){
                Ijos.getKernel().fireEvent('app.add',container,appModel);
                Ijos.getKernel().fireEvent('menubar.add',container,appModel);
                Ijos.getKernel().fireEvent('window.add',container,appModel);
            })
            
            container.application.init();
            me.add(pid,container);
            
            
        }catch(exception){
            console.log(exception);
        }
        
        
        
       
    },
   
    removeApp:function(app){
        var me = this;
        var container = me.get(app.getPid());
        
        me.removeAtKey(app.getPid());
         
        Ijos.getKernel().fireEvent('app.remove',container);
        Ijos.getKernel().fireEvent('menubar.remove',container);
        Ijos.getKernel().fireEvent('window.remove',container);
        
       
       
        
    }
   
});