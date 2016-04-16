/**
 * @class WebPharo.data.store.PackagesStore
 * @extends Ext.data.Store
 */
Ext.define('WebPharo.data.store.PackagesStore', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.data.model.PackageModel',
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
    groupField:'packageName',
    autoLoad: true
});
