Ext.define('WebPharo.store.Categories', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.model.method.Category',
    proxy: {
        type: 'ajax',
        
        api: {
            create: 'createPersons',
            read: 'http://localhost:1701/r/browsed-env/browse-class-categories',
            update: 'updatePersons',
            destroy: 'destroyPersons'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    sorters:['name'],
    autoLoad : false
});

