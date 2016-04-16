Ext.define('IjosDesk.controller.WindowController',{
    extend: 'Ijos.desktop.Controller',
    
    refs:[{
        ref: 'deskContainer',
        selector: 'ijosdeskcontainer'
    }],
    lastActiveWindow:null,
    activeWindowCls: 'ijos-desktop-active-win',
    inactiveWindowCls: 'ijos-desktop-inactive-win',
    init:function(){
        var me = this;
        me.control({
            'ijoswindowbar button' :{
                'click': me.activeWindow
            },
            'ijoswindow':{
                'activate': me.activeWindowUpdate,
                'beforeshow': me.activeWindowUpdate,
                'deactivate': me.activeWindowUpdate,
                'minimize': me.windowMinimize,
                'restore':me.windowRestore
            }
        });
        
        Ijos.getKernel().on('window.add',me.createDeskWindow,me);
        Ijos.getKernel().on('window.remove',me.removeDeskWindow,me);
    },
    createDeskWindow:function(container,appModel){
        var me = this;
        var deskView = me.getDeskContainer().getActiveDesktop();
        
        var win = Ext.create('IjosDesk.view.Window',{
            title:appModel.get('name'),
            pid: container.getPid(),
            autoDestroy:true,
            closeAction:'destroy',
            items:[
            container.getApplication().run()
            ]
            
        });
        /*Ext.util.Observable.capture(win,function(evname) {console.log(evname, arguments);});
        win.cascade(function(elt){
            Ext.util.Observable.capture(elt,function(evname) {console.log(evname, arguments);});
        });*/
        
        
        container.viewContainer = win;
        container.desktop = deskView;
        deskView.add(win);
        
        win.show();
        
    },
    removeDeskWindow: function(container){
        var me = this;
        container.getDesktop().remove(container.getViewContainer());
        container.getViewContainer().destroy();
    },
    activeWindow:function(winBtn){
        var me =this;
        var appContainer = me.getAppManager().get(winBtn.pid);
        appContainer.viewContainer.toFront();
        
    },
    activeWindowUpdate:function(){
        
    }
    
    
    
});