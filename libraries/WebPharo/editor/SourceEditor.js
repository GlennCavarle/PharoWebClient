/**
 * @class WebPharo.editor.SourceEditor
 * @extends Ext.panel.Panel
 */

Ext.define('WebPharo.editor.SourceEditor',{
    extend:'Ext.panel.Panel',
    xtype:'wpsourceeditor',
    requires:['Ext.ux.layout.component.field.CodeMirror'],
    layout:'fit',
    header:false,
    
    /**
     * @public
     * @cfg {String} editorTheme Codemirror theme
     */
    editorTheme:'neat',
    /**
     * @public
     * @cfg {Integer} editorIndentUnit Editor indentation
     */
    editorIndentUnit: 4,
    /**
     * @public
     * @cfg {Integer} codeMirrorPathModes  Editor indentation
     */
    codeMirrorPathModes:  'libraries/codemirror-2.34/mode',
    /**
     * @public
     * @cfg {Integer} codeMirrorPathExtensions Editor indentation
     */
    codeMirrorPathExtensions: 'libraries/codemirror-2.34/lib/util',
    
    /**
     * @private
     * @cfg {Ext.ux.layout.component.field.CodeMirror} textEditor
     */
    textEditor: null,
    
    initComponent:function(){
        var me = this;
        
        me.items = [me._createTextEditor()];
        me.callParent(arguments);
        me.textEditor = me.down('codemirror');
        
    },
    
    /**
     * @private
     * Create the CodeMirror text editor and configure it
     */
    _createTextEditor: function(){
        var me = this;
       return {
            xtype:              'codemirror',
            name:               'code',
            pathModes:          me.codeMirrorPathModes,
            pathExtensions:     me.codeMirrorPathExtensions,
            lineNumbers:        true,
            matchBrackets:      true,
            mode:               "text/x-stsrc",
            modes: [{
                    mime:           ['text/x-stsrc'],
                    dependencies:   ['smalltalk/smalltalk.js']
                }],
            indentUnit:         me.editorIndentUnit,
            showModes:          false,
            theme:              me.editorTheme
        
        };
    },
    
    /**
     * Set a new value.
     * @param {String} newValue
     */
    setValue: function(newValue) {
        var me = this;
        me.fireEvent('valuechange',me,newValue,me.getValue());
        me.textEditor.setValue(newValue);
    },
    
    /**
     * Get the current value.
     * @return {String} newValue
     */
    getValue: function() {
        var me = this;
        return me.textEditor.getValue();
    },
    
    /**
     * Refresh the editor with the record value.
     */
    resetValue: function() {
        var me = this;
        me.textEditor.setValue("");
    }
    
});