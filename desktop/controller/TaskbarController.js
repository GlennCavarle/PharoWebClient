Ext.define('IjosDesk.controller.TaskbarController',{
    extend: 'Ijos.desktop.Controller',
    
    refs:[{
        ref: 'deskContainer',
        selector: 'ijosdeskcontainer'
    },{
        ref: 'windowBar',
        selector: 'ijoswindowbar'
    },{
        ref: 'deskBar',
        selector: 'ijosdeskbar'
    }],

    winButtons : null,

    init:function(){
        var me = this;
        me.control({
            'ijoswindowbar button' :{
                'click': me.activeDeskButton
            },
            'ijosdeskbar':{
                'afterrender':me.initDeskBar
            },
            'ijoswindow':{
                'activate': me.activeLastWinButton
            }
        });
        
        Ijos.getKernel().on('menubar.add', me.createDeskButton,me);
        Ijos.getKernel().on('menubar.remove',me.removeDeskButton,me);
    },
    initDeskBar:function(){
        var me = this;
        for(var i=0;i < 4; i++){
            var btn = me.getDeskBar().add(i,{
                xtype: 'ijosdeskbarbutton',
                deskId:i,
                text:i+1
            });
            
            if(i==0){
                btn.toggle(true);
            }
        }
    },
    createDeskButton:function(container, model){
        var me = this;
        /* TaskButton creation*/
        var button = Ext.create('IjosDesk.view.taskbar.WindowBarButton',{
            text:Ext.util.Format.ellipsis(model.get('name'), 20),
            pid: container.getPid()
        });
        container.taskButton = button;
        me.getWindowBar().add(button);
        me.getWindowBar().setActiveButton(button);
    },
    removeDeskButton:function(container){
        var me = this;
        me.getWindowBar().removeButton(container.getTaskButton());
        container.getTaskButton().destroy();
        if(!Ext.isEmpty(me.getAppManager().last())){
            me.activeLastWinButton();
        }
    },
    activeDeskButton : function(taskBtn){
        var me = this;
        /* app events when window blur || deactivate ?*/
        var appContainer = me.getAppManager().get(taskBtn.pid);
        
        me.getDeskBar().setActiveDesktop(appContainer.getDesktop());
        
        
    },
    activeLastWinButton:function(){
        var me = this;
        var win = Ext.WindowManager.getActive();
        console.log(win);
        me.getWindowBar().setActiveButton(me.getAppManager().get(win.pid).getTaskButton());
    }
    
});