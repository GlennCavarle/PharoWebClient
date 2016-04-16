Ext.define("IjosDesk.view.taskbar.TaskMenu", {
    extend: "Ext.menu.Menu",
    xtype:'ijostaskmenu',
    alias: 'widget.ijostaskmenu',
    loaded: false,
    loadMsg: 'Loading...',
    store: 'IjosDesk.store.Applications',
    icon: '',
    constructor: function (config) {
        var me = this;
        
        Ext.apply(me, config);

        me.callParent();
        
    },
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        me.store = Ext.getStore(me.store);
        me.on('show', me.onMenuLoad, me);
   
        me.store.on('load',me.onLoad,me);
        me.store.on('beforeload',me.onBeforeLoad,me);
    },
    onMenuLoad: function () {
        var me = this;
        if (!me.store.loaded) me.store.load();
    },
    onBeforeLoad: function (store) {
        this.updateMenuItems(false);
    },
    onLoad: function (store, records) {
        this.updateMenuItems(true, records);
    },
    updateMenuItems: function (loadedState, records) {
        var me = this;
        me.removeAll();
        if (loadedState) {
            me.setLoading(false, false);
            Ext.Array.each(records, function (record, index, array) {
                me.add({
                    text: record.get('name'),
                    data: record,
                    icon: record.get('icon')
                });

            });
            me.store.loaded = true;
        }
        else {
            me.add({
                width: 75, 
                height: 40
            });
            me.setLoading(me.loadMsg, false);
        }
        me.loaded = loadedState;
    }
});