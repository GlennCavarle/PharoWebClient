/**
 * @class WebPharo.grid.ClassPackageGridPanel
 * @extends Ext.grid.Panel
 */
Ext.define('WebPharo.grid.ClassPackageGridPanel',{
    extend: 'Ext.grid.Panel',
    xtype: 'wpclasspackagegridpanel',
    
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
    
    
    
    
    contextClassMenu : null,
    contextPackageMenu: null,
    
    
    initComponent:function(){
        var me = this;
             me.addEvents(
            /**
             * @event packageclick Fired when the save button is clicked
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {WebPharo.data.MethodInterface} record The method record object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'packageclick',
            
            /**
             * @event packagedblclick Fired when the cancel button is clicked
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {WebPharo.data.MethodInterface} record The method record object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'packagedblclick',
            
            /**
             * @event classclick Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classclick',
            
            /**
             * @event classdblclick Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classdblclick',
            
            /**
             * @event packageadd Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'packageadd',
            
            /**
             * @event classadd Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classadd',
            
            /**
             * @event packageremove Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'packageremove',
            
            /**
             * @event classremove Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classremove',
            
            /**
             * @event packagerename Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'packagerename',
            
            /**
             * @event classrename Fired whenever the editor value have changed
             * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
             * @param {String} newValue The current value of the editor
             * @param {String} oldValue The previous value of the editor
             */
            'classrename'

            );
        
        
        me.callParent();
        
    },
    
    getSelectedRecord: function(){
        
    },
    selectRecord: function(record){
        
    }
    
    
    
});