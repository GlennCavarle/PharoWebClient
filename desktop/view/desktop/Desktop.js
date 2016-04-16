Ext.define('IjosDesk.view.desktop.Desktop', {
    extend : 'Ext.panel.Panel',
    xtype:'ijosdesktop',
    xTickSize: 1,
    yTickSize: 1,
    border: false,
    layout:'fit',
    deskId:null,
    items:[{
        xtype:'ijosshortcutview',
        autoRender:true
    }],
    getDeskId:function(){
        var me = this;
        return me.deskId;
    }

});