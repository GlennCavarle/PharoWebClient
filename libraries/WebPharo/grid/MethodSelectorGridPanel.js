/**
 * @class WebPharo.grid.MethodSelectorGridPanel
 * @extends Ext.grid.Panel
 */
Ext.define('WebPharo.grid.MethodSelectorGridPanel',{
    extend: 'Ext.grid.Panel',
    xtype : 'wpmethodselectorgridpanel',
    title:'Methods',
    store: Ext.create('WebPharo.data.store.MethodsStore'),
    hideHeaders: true,
    columns:[{
        text: 'name',  
        dataIndex: 'name',
        flex:1
    }],
    
    contextMenu: null,
    
    initComponent:function(){
        var me = this;
        
        me.addEvents(
            /**
             * @event methodselect Fired when the save button is clicked
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {WebPharo.data.MethodInterface} record The method record object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'methodselect',
            
            /**
             * @event classside Fired when the cancel button is clicked
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {WebPharo.data.MethodInterface} record The method record object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classside',
            
            /**
             * @event instanceside Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'instanceside',
            
            /**
             * @event methodremove Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'methodremove',
            
            /**
             * @event methodremove Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'methodadd',
            
            /**
             * @event methodremove Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'methodrename'

            );
        
        
        me.callParent();
        
    },
    
    
    showClassSide : function(){
        
    },
    showInstanceSide : function(){
        
    },
    selectRecord:function(record){
        
    },
    getSelectedRecord:function(){
        
    }
    
    
     
});