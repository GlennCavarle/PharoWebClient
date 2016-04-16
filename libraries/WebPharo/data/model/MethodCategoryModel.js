/**
 * @class WebPharo.data.model.MethodCategoryModel
 * @extends Ext.data.Model
 */

Ext.define('WebPharo.data.model.MethodCategoryModel', {
    extend: 'Ext.data.Model',
    xtype:'wpmethodcategorymodel',
    /**
     * @public
     * @cfg {Array} fields Array of default fields
     */
    fields: ['id','name','side','methodCount']
    
});