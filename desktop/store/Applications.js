Ext.define('IjosDesk.store.Applications', {
    extend : 'Ext.data.Store',
    
    model: 'IjosDesk.model.Application',
    proxy: {
        type: 'ajax',
        url: 'data/applications.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: true
    
});

