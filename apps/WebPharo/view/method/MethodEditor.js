Ext.define('WebPharo.view.method.MethodEditor',{
    extend:'Ext.panel.Panel',
    xtype:'wpmethodeditor',
    layout:'fit',
    className : null,
    methodRecord: null,
    header:false,
    closable:true,
    items:[
    {
        xtype:'codemirror',
        flex:2,
        name:       'code',
        pathModes:  'libraries/codemirror-2.34/mode',
        pathExtensions: 'libraries/codemirror-2.34/lib/util',
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-stsrc",
        modes: [{
            mime:           ['text/x-stsrc'],
            dependencies:   ['smalltalk/smalltalk.js']
        }],
        indentUnit: 4,
        showModes:false,
        theme:'neat'
        
    },{
        
    }],
    buttons:[{
        text: 'Save',
        action:'steditor-save'
    },{
        text: 'Cancel',
        disabled:true,
        action:'steditor-cancel'
    }],
    
    initComponent:function(){
        var me = this;
        me.callParent();
        me.down('*[action="steditor-save"]').on('click',function(){
            me.fireEvent('save',me,me.down('codemirror').getValue());
        });
        me.down('*[action="steditor-cancel"]').on('click',function(){
            me.reset();
        });
        me.down('*[action="steditor-cancel"]').setDisabled(true);
        
        me.down('codemirror').on('change',function(){
            me.down('*[action="steditor-cancel"]').setDisabled(false);
        });
        
    },
    setSources:function(sources){
        var me = this;
        me.down('codemirror').setValue(sources);
        
    },
    
    reset:function(){
        var me = this;
        me.down('codemirror').setValue(me.methodRecord.get('sources'));
    }
    
});