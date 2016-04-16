Ext.define('Ijos', {
    singleton: true,
    kernel:{},
    setKernel:function(kernel){
        var me = this;
        me.kernel = kernel;
    },
    getKernel:function(){
        var me = this;
        return me.kernel;
    }
});


Ext.define('Ijos.bus', {
    requires:['Ijos.io.*'],
    statics:{
        
        
        
}
});



