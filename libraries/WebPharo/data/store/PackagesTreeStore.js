/**
 * @class WebPharo.data.store.PackagesTreeStore
 * @extends Ext.data.Store
 */
Ext.define('WebPharo.data.store.TreePackages', {
    extend: 'Ext.data.TreeStore',
    model: 'WebPharo.data.model.PackageNode',
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
            root: 'children'
        }
    },
    root: {
        expanded: true
    },
    
    sorters:['text'],
    folderSort: true,
    autoLoad: true
});
