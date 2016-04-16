Ext.define('Ijos.app.Controller',{
    extend:'Ext.app.Controller',
    
    control: function(selectors, listeners, controller) {
        var me = this;
        var pid = me.getApplication().getPid();
        
        
        Ext.iterate(selectors, function(key, value){
            delete selectors[key];
            
            key = '*[pid="'+pid+'"] '+key;
            selectors[key] = value;
        });
        

        me.callParent(arguments);
    }
});
