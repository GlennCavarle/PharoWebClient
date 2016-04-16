Ext.define('WebPharo.store.Methods', {
    extend: 'Ext.data.Store',
    model: 'WebPharo.model.method.Method',
    proxy: {
        type: 'ajax',
        
        api: {
            create: 'http://localhost:1701/r/class/update-methods',
            read: 'http://localhost:1701/r/browsed-env/browse-class-methods',
            update: 'http://localhost:1701/r/class/update-methods',
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

