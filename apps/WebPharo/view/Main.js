Ext.define('WebPharo.view.Main',{
    extend: 'Ijos.app.MainView',
    xtype:'wpmain',
    layout:     'border',
    tbar: [{ 
        xtype: 'button',
        text: 'Button 1'
    }],
    items:[{
        xtype:'wppackagebrowser',
        region:'west',
        split: true,
        collapsible: true, 
        flex:1
    },
    {
        xtype:'wpclasstabpanel',
        region:'center',
        flex:2,
        items:[]
        
    }]
});
   