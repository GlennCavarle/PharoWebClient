/**
 * @class WebPharo.editor.MethodSourceEditor
 * @extends WebPharo.editor.SourceEditor
 */

Ext.define('WebPharo.editor.MethodSourceEditor',{
    extend:'WebPharo.editor.SourceEditor',
    xtype:'wpmethodsourceeditor',
    
    requires: [
    'WebPharo.data.MethodInterface'
    ],
     
    /**
     * @public
     * @cfg {WebPharo.data.MethodInterface} record
     */
    record: {},
   
    /**
     * @private
     * @cfg {Ext.button.Button} saveButton Save Button
     */
    saveButton: null,
    
    
    /**
     * @private
     * @cfg {Ext.button.Button} cancelButton Cancel Button
     */
    cancelButton: null,
    

    buttons:[{
        text: 'Save',
        disabled:true,
        action:'wpmethodtexteditor-save'
    },{
        text: 'Cancel',
        disabled:true,
        action:'wpmethodtexteditor-cancel'
    }],
    
    
    
    
    initComponent:function(){
        var me = this;
        
        me._buildRecord(me.record);
        me.addEvents(
            /**
         * @event savemethodclick Fired when the save button is clicked
         * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
         * @param {WebPharo.data.MethodInterface} record The method record object
         * @param {String} newValue The current value of the editor
         * @param {String} oldValue The previous value of the editor
         */
            'savemethodclick',
            /**
         * @event cancelmethodclick Fired when the cancel button is clicked
         * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
         * @param {WebPharo.data.MethodInterface} record The method record object
         * @param {String} newValue The current value of the editor
         * @param {String} oldValue The previous value of the editor
         */
            'cancelmethodclick',
            /**
         * @event valuechange Fired whenever the editor value have changed
         * @param {WebPharo.editor.MethodTextEditor} textEditor The MethodTextEditor object
         * @param {String} newValue The current value of the editor
         * @param {String} oldValue The previous value of the editor
         */
            'valuechange'

            );
        
        
        me.callParent();
        
        me.add(me._createTextEditor());
        me.saveButton = me.down('button[action="wpmethodtexteditor-save"]');
        me.cancelButton = me.down('button[action="wpmethodtexteditor-cancel"]');
        me._initEventHandlers();
        
    },
    
    
    
    _initEventHandlers:function(){
        var me = this;
        
        //on save : refresh record with current value
        me.saveButton.on('click',function(){
            var oldValue = me.getRecord().get('sourceCode');
            me.fireEvent('savemethodclick',me,me.getRecord(),me.getValue(),oldValue);
        });
        
        //on cancel : refresh editor with record value
        me.cancelButton.on('click',function(){
            var oldValue = me.getRecord().get('sourceCode');
            me.fireEvent('cancelmethodclick',me,me.getRecord(),me.getValue(),oldValue);
            me.resetValue();
        });
        
        
        me.textEditor.on('change',function(){
            
            if(me.getRecord().get('sourceCode') != this.getValue()){
                //toggle save/cancel button
                me.saveButton.setDisabled(false);
                me.cancelButton.setDisabled(false);
                //update record value and fire event
                var oldValue = me.getRecord().get('sourceCode');
                me.getRecord().set('sourceCode',me.getValue());
                me.fireEvent('valuechange',me,me.getValue(),oldValue);
            }
            
        });
    },
    
    /**
     * Set a new value.
     * @param {String} newValue
     */
    setValue: function(newValue) {
        var me = this;
        me.getRecord().set('sourceCode',newValue);
        me.callParent(arguments);
    },
    /**
     * Refresh the editor with the record value.
     */
    resetValue: function() {
        var me = this;
        me.textEditor.setValue(me.getRecord().get('sourceCode'));
    },
    
    /**
     * Set a new record and reset the editor
     * @param {WebPharo.data.MethodInterface} newRecord
     */
    setRecord: function(newRecord) {
        var me = this;
        
        me._buildRecord(newRecord);
        
        me.resetValue();
    },
    
    /**
     * Get the current record or create it.
     * @return {WebPharo.data.MethodInterface} record
     */
    getRecord: function() {
        var me = this;
        
        return me.record;
    },
    
    /**
      * @private
      * Check record.
      * @param {Object} newRecord
      */
    _buildRecord:function(newRecord){
        var me = this;
        
        if (!newRecord.isModel) {
            newRecord = Ext.create('WebPharo.data.model.MethodModel',record);
            // create a default MethodModel
            
            Ext.data.MethodInterface.decorate(newRecord);
        } else if (newRecord.isModel && !newRecord.isNode) {
            Ext.data.NodeInterface.decorate(newRecord);
        }
        
        me.record = newRecord;
    }
    
    
   
});