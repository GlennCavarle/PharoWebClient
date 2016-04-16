/**
 * @class WebPharo.editor.Workspace
 * @extends WebPharo.editor.SourceEditor
 */

Ext.define('WebPharo.editor.Workspace',{
    extend:'WebPharo.editor.SourceEditor',
    xtype:'wpworkspace',
    
    url: '',
    
    /**
     * @private
     * @cfg {Ext.button.Button} executeButton Execute Button
     */
    executeButton: null,
    
    
    buttons:[{
        text: 'Execute',
        action:'wpworkspace-exec'
    }],

    initComponent:function(){
        var me = this;
        me.callParent(arguments);
        me.addEvents(
            /**
             * @event executeclick Fired when the execute button is clicked
             * @param {WebPharo.editor.Workspace} workspace The Workspace object
             * @param {String} value The current value of the workspace
             */
            'executeclick',
            
            /**
             * @event executesuccess Fired when the execute callback is success
             * @param {WebPharo.editor.Workspace} workspace The Workspace object
             * @param {String} value The current value of the workspace
             * @param {Object} response The response object
             */
            'executesuccess',
            
            /**
             * @event executefailure Fired when the execute callback is failure
             * @param {WebPharo.editor.Workspace} workspace The Workspace object
             * @param {String} value The current value of the workspace
             * @param {Object} response The response object
             */
            'executefailure'
            );
        
        
       
        me.executeButton = me.down('button[action="wpworkspace-exec"]');
        me._initEventHandlers();
    },
    
    _initEventHandlers:function(){
        var me = this;
        
        //on execute : fire executeclick event
        me.executeButton.on('click',function(){
            me.fireEvent('executeclick',me,me.getValue());
            me.execute();
        },me);
        
    },
    
    /**
     * Remote execute method
     */
    execute:function(){
        var me = this;
        
        Ext.Ajax.request({
            url: me.url,
            method: 'POST',
            jsonData: {
                sources: me.getValue()
            },
            success:function(data){
                me.fireEvent('executesuccess',me,me.getValue(),data);
            },
            failure: function(error){
                me.fireEvent('executefailure',me,me.getValue(),error);
            }
        });
        
        
    }
});

