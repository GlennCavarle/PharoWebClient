/**
 * @class WebPharo.data.store.MethodCategoriesStore
 * @extends Ext.data.Store
 */
Ext.define('WebPharo.data.store.MethodCategoriesStore', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.data.model.MethodCategoryModel',
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

