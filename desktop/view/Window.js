Ext.define('IjosDesk.view.Window',{
    extend: 'Ext.window.Window',
    xtype:'ijoswindow',
    layout:'fit',
    constrain:true,
    active:true,
    
    hidden:false,
    stateful: false,
    
    width:700,
    height:400,
    
    pid:null, 
    
    minimizable: true,
    maximizable: true,
    tools:[{
        type:'refresh',
        tooltip: 'Rafraîchir l\'application',
        handler: function(event, toolEl, panel){
           
        }
    }],
    
    initComponent:function(){
        var me = this;
        me.callParent(arguments);
        
        me.doClose = function ()  {
            me.doClose = Ext.emptyFn; // dblclick can call again...
            me.el.disableShadow();
            me.el.fadeOut({
                listeners: {
                    afteranimate: function () {
                        me.destroy();
                    },
                    scope:me
                }
            });
        };
    },
    getApp:function(){
        var me = this;
        return me.app;
    }
     
    
});
