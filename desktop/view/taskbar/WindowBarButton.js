Ext.define('IjosDesk.view.taskbar.WindowBarButton',{
    extend: 'Ext.button.Button',
    xtype:'ijoswindowbarbutton',
    enableToggle: true,
    padding:3,
    toggleGroup: 'windowbar-group',
    width: 140,
    margins: '0 2 0 3',
    pid:null,
    initComponent:function(){
        var me = this;
        me.callParent(arguments);
        me.toggle(true);
    }
});