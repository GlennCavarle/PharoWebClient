Ext.define('WebPharo.store.TreePackages', {
    extend: 'Ext.data.TreeStore',
    model: 'WebPharo.model.package.PackageNode',
    proxy: {
        type: 'ajax',
        api: {
            create: 'createPersons',
            read: 'http://localhost:1701/r/browsed-env/browse-packages-as-tree',
            update: 'updatePersons',
            destroy: 'destroyPersons'
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

