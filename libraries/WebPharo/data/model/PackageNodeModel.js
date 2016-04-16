/**
 * @class WebPharo.data.model.PackageNodeModel
 * @extends Ext.data.Model
 */

Ext.define('WebPharo.data.model.PackageNodeModel', {
    extend: 'Ext.data.Model',
    xtype:'wppackagenodemodel',
    
    /**
     * @public
     * @cfg {Array} fields Array of default fields
     */
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