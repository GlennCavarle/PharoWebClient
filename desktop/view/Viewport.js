Ext.define('IjosDesk.view.Viewport', {
    extend : 'Ext.container.Viewport',
    layout:'fit',
    
    border: false,
    html: '&#160;',
    
    items:{
        xtype:'ijosdeskcontainer'
    }
});