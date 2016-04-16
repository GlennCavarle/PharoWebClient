/**
 * @class WebPharo.data.model.ClassNodeModel
 * @extends Ext.data.Model
 */

Ext.define('WebPharo.data.model.ClassNodeModel', {
    extend: 'Ext.data.Model',
    xtype:'wpclassnodemodel',
    /**
     * @public
     * @cfg {Array} fields Array of default fields
     */
    fields: [ 
        {name:'id', mapping:'id' },
        {name:'name', mapping:'text'},
        {name:'leaf', mapping:'leaf'},
        {name:'extend'}
    
]
    
});