/**
 * @class WebPharo.data.model.MethodModel
 * @extends Ext.data.Model
 */

Ext.define('WebPharo.data.model.MethodModel', {
    extend: 'Ext.data.Model',
    xtype:'wpmethodmodel',
    
    /**
     * @public
     * @cfg {Array} fields Array of default fields inherited from {@link WebPharo.data.MethodInterface method interface}
     */
    fields: ['id','name','side','className','category','sourceCode'],
    
    /**
     * @public
     * Check side of method
     * @return {Boolean}
     */
    isClassSide: function(){
        var me = this;
        return me.get('side') == 'class';
    }
});