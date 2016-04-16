Ext.define('IjosDesk.view.taskbar.WindowBar',{
    extend: 'Ext.toolbar.Toolbar',
    xtype:'ijoswindowbar',
    flex: 1,
    border:false,
    cls: 'ijos-desktop-windowbar',
    items: [ '&#160;' ],
    layout: {
        overflowHandler: 'Scroller'
    },
    
    setActiveButton: function(button){
        var me = this;
        me.items.each(function (item) {
            if (item.isButton) {
                item.toggle(false);
            }
        });
        button.toggle(true);
    },
    removeButton:function(button){
        var me = this;
        me.remove(button);
    }
    
});