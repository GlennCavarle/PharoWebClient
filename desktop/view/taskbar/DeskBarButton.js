Ext.define('IjosDesk.view.taskbar.DeskBarButton',{
    extend: 'Ext.button.Button',
    xtype:'ijosdeskbarbutton',
    enableToggle: true,
    padding:3,
    toggleGroup: 'deskbar-group',
    deskId:null,
    allowDepress    : false,
    initComponent:function(){
        var me = this;
        me.callParent(arguments);
    }
});