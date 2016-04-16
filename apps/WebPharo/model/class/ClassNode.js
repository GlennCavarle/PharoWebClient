Ext.define('WebPharo.model.class.ClassNode', {
    extend: 'Ext.data.Model',
    fields: [
        
        {name:'id', mapping:'id' },
        {name:'name', mapping:'text'},
        {name:'leaf', mapping:'leaf'},
        {name:'extend'}
    
]
    
});