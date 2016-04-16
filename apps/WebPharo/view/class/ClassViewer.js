Ext.define('WebPharo.view.class.ClassViewer',{
    extend:'Ext.panel.Panel',
    xtype:'wpclassviewer',
    layout:'border',
    className : null,
    header:false,
    closable:true,
    items:[
    {
        xtype:'wpmethodbrowser',
        region:'east',
        width: 200,
        split: true
    },{
        xtype:'tabpanel',
        region:'center',
        width: 200
    }],
    initComponent:function(){
        var me = this;
        me.items[0].className = me.className;
        me.callParent();
    },
    
    addMethodEditor: function(record){
        var me = this;
        
        var methEditor = Ext.create('WebPharo.view.method.MethodEditor',{
            title:record.get('name'),
            methodRecord:record
        });
               
        methEditor.setSources(record.get('sources'));
               
        me.down('tabpanel').add(methEditor);
        me.down('tabpanel').setActiveTab(methEditor);
    },
    getActiveEditor : function(){
        var me = this;
        return me.down('tabpanel').getActiveTab();
        
    },
    getMethodBrowser: function(){
        var me =this;
        return me.down('wpmethodbrowser');
    },
    closeMethodEditor:function(editor){
        var me =this;
         me.down('tabpanel').remove(editor);
    }
    
    
    
    
});