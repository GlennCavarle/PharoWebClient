Ext.define('WebPharo.view.method.MethodBrowser',{
    extend: 'Ext.panel.Panel',
    xtype: 'wpmethodbrowser',
    layout:'vbox',
    className : null,
    side: 'instance',
    selectedCategory:/.*/,
    categories:null,
    methods:null,
    
    tbar:[
    {
        fieldLabel:"Class side",
        xtype:'checkbox',
        action:'browse-class-side'
    }
    ],
   
    items:[{
        xtype : 'gridpanel',
        title:'Category',
        name:'category',
        store: Ext.create('WebPharo.store.Categories'),
        hideHeaders: true,
        flex: 1,
        width: "100%",
        columns:[{
            text: 'name',  
            dataIndex: 'name',
            flex:4
        },
        {
            text: 'count',  
            dataIndex: 'methodCount',
            flex:1
        }]
        
       
    },{
        xtype : 'gridpanel',
        title:'Method',
        name:'method',
        store: Ext.create('WebPharo.store.Methods'),
        hideHeaders: true,
        flex: 2,
        width: "100%",
        columns:[{
            text: 'name',  
            dataIndex: 'name',
            flex:4
        }]
        
       
    }],


    initComponent:function(){
        var me = this;
        
        me.callParent();
        me.categories = me.items.getAt(0);
        me.methods = me.items.getAt(1);
        me.categories.store.load({
            params:{
                className : me.className
            }
        });
        
        
        
        me.methods.store.load({
            params:{
                className : me.className
            }
        });
        
        me.categories.store.filter('side','instance');
        me.methods.store.filter('side','instance');
        
        me.categories.on('itemclick',function(grid,record){
            me.methods.getStore().clearFilter();
            me.selectedCategory = (record.get('name') != '--- all ---'?record.get('name'): /.*/);
            
                me.methods.getStore().filter([
                        {property:'category', value:me.selectedCategory},
                        {property:'side', value:me.side}
                    ]);
           
        });
        
        me.methods.on('select',function(grid,record){
            
            me.fireEvent('methodselect',record);
            
        });
            
            
        me.down('*[action="browse-class-side"]').on('change',function(cb, newValue){
            
           me.categories.getStore().clearFilter();
           me.methods.getStore().clearFilter();
           
           me.side = (newValue?'class':'instance');
           
                
                me.categories.store.filter('side',me.side);
                me.methods.store.filter([
                        {property:'category', value:/.*/},
                        {property:'side', value:me.side}
                    ]);
           
            
        });
    
    },
    
    getCategoryPanel:function(){
        var me = this;
        return me.categories;
    },
    
    getMethodsPanel:function(){
        var me = this;
        return me.methods;
    }
    
    
});