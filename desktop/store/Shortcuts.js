Ext.define('IjosDesk.store.Shortcuts', {
    extend : 'Ext.data.Store',
    
    model: 'IjosDesk.model.Shortcut',
    proxy: {
        type: 'ajax',
        url: 'data/shortcuts.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: true
    
});


