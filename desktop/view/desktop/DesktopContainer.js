Ext.define('IjosDesk.view.desktop.DesktopContainer',{
    extend : 'Ext.panel.Panel',
    xtype:'ijosdeskcontainer',
   
    layout:'card',
    border: false,
    activeItem: 0, // index or id
    tbar: [
    {
        menu:{
            xtype: 'ijostaskmenu',
            nameField:'name',
            store: 'IjosDesk.store.Applications'
        },
        text: 'Menu'
    },'-',{
        xtype: 'ijoswindowbar'
    },'-',
    {
        xtype:'ijosdeskbar'
    }
    ],
    items: [{
        xtype: 'ijosdesktop',
        deskId: 0
    },{
        xtype: 'ijosdesktop',
        deskId: 1
    },{
        xtype: 'ijosdesktop',
        deskId: 2
    },{
        xtype: 'ijosdesktop',
        deskId: 3
    }],

    setActiveDesktop:function(index){
        var me = this;
        me.getLayout().setActiveItem(index);
    },
    getActiveDesktop:function(){
        var me = this;
        return me.getLayout().getActiveItem();
    },
    getActiveDesktopIndex:function(){
        var me = this;
        return me.items.indexOf(me.getActiveDesktop());
    }

   
});