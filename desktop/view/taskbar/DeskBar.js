Ext.define('IjosDesk.view.taskbar.DeskBar',{
    extend: 'Ext.toolbar.Toolbar',
    xtype:'ijosdeskbar',
    border:false,
    cls: 'ijos-desktop-deskbar',
    items: [ '&#160;' ],
    layout: {
        overflowHandler: 'Scroller'
    },
    setActiveButton:function(button){
        var me = this;
        button.toggle(true);
    },
    setActiveDesktop:function(desktop){
        var me = this;
        me.items.get(desktop.deskId).toggle(true);
        
    }
    
});