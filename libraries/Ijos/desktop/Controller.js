Ext.define('Ijos.desktop.Controller',{
    extend:'Ext.app.Controller',
    
    getAppManager:function(){
        var me = this;
        return me.getApplication().getAppManager();
    }
});
