/**
 * @class WebPharo.data.store.MethodsStore
 * @extends Ext.data.Store
 */
Ext.define('WebPharo.data.store.MethodsStore', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.data.model.MethodModel',
    proxy: {
        type: 'ajax',
        
        api: {
            create:     null,
            read:       null,
            update:     null,
            destroy:    null
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    sorters:['name'],
    autoLoad : false
});

