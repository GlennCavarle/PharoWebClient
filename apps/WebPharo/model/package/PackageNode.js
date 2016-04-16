Ext.define('WebPharo.model.package.PackageNode', {
    extend: 'Ext.data.Model',
    fields: [
        
        {name:'id',type: 'int', mapping:'id' },
        {name:'text',type: 'string', mapping:'name'},
        {name:'name',type: 'string'},
        {name:'realName',type: 'string'},
        {name:'type',type: 'string'},
        {name:'leaf',type: 'boolean', mapping:'leaf'},
        {name:'extend',type: 'string'}
    
]
    
});