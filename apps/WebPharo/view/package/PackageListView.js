Ext.define('WebPharo.view.package.PackageListView',{
    extend: 'Ext.grid.Panel',
    xtype: 'wppackagelistview',
    
    hideHeaders:true,
    columns:[{
        text: 'packageName',  
        dataIndex: 'packageName',
        flex:1
    },
    {
        text: 'class',  
        dataIndex: 'name',
        flex:1
    }],
    packageGrouping: Ext.create('Ext.grid.feature.Grouping',{
        groupHeaderTpl: '{name} ({rows.length} Class{[values.rows.length > 1 ? "es" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'grouping'
    }),
    initComponent:function(){
        var me = this;
        me.features = [me.packageGrouping];
        me.callParent();
        me.store.on('load',function(){
            console.log('fsefsefsef');
            me.getView().getFeature('grouping').collapseAll();
        },me);
        
        
        
    }
});