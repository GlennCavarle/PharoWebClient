Ext.define('IjosDesk.controller.DesktopController',{
    extend: 'Ijos.desktop.Controller',
    
    views:[
    'IjosDesk.view.desktop.Desktop',
    'IjosDesk.view.ShortcutsDataView',
    'IjosDesk.view.desktop.DesktopContainer'
    ],
    stores:[
    'IjosDesk.store.Shortcuts'
    ],
   
    refs:[{
        ref: 'deskContainer',
        selector: 'ijosdeskcontainer'
    },{
        ref: 'shortcutView',
        selector: 'ijosshortcutview'
    }],
   
    init:function(){
        var me = this;
        me.control({
            'ijosdeskbar button':{
                'click': me.onDeskButtonClick
            },
            'ijoswindowbar button' :{
                'click': me.onWinButtonClick
            }
        });
       
    },
    onWinButtonClick : function(btn){
        var me = this;
        var appContainer = me.getAppManager().get(btn.pid);
        me.getDeskContainer().setActiveDesktop(appContainer.getDesktop());        
    },
    onDeskButtonClick: function(btn){
        var me = this;
        me.getDeskContainer().setActiveDesktop(btn.deskId);
    }
    
});