Ext.define('WebPharo.store.Classes', {
    extend: 'Ext.data.TreeStore',
    model:'WebPharo.model.class.Class',
    proxy: {
        type: 'ajax',
        
        api: {
            create: 'createPersons',
            read: 'http://localhost:1701/r/browsed-env/browse-package-classes',
            update: 'updatePersons',
            destroy: 'destroyPersons'
        }
    },
    sorters:['text'],
    autoLoad : false
});

