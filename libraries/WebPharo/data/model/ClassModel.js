/**
 * @class WebPharo.data.model.ClassModel
 * @extends Ext.data.Model
 */

Ext.define('WebPharo.data.model.ClassModel', {
    extend: 'Ext.data.Model',
    xtype:'wpclassmodel',
    /**
     * @public
     * @cfg {Array} fields Array of default fields
     */
    fields: ['id','name','packageName']
});