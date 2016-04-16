Ext.define('WPWorkspace.view.Main',{
    extend: 'Ijos.app.MainView',
    xtype:'wpworkspacemain',
    
    layout:     'border',
    tbar: [{ 
        xtype: 'button',
        text: 'Button 1'
    }],
    items:[{
        xtype:'wpworkspace',
        region: 'center',
        url: 'http://localhost:1701/r/source/evaluate'
    }]
});
   