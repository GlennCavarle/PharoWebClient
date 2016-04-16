Ext.define('WebPharo.store.Packages', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.model.package.Package',
    proxy: {
        type: 'ajax',
        api: {
            create: 'createPersons',
            read: 'http://localhost:1701/r/browsed-env/browse-packages',
            update: 'updatePersons',
            destroy: 'destroyPersons'
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

