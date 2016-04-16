Ext.define('IjosDesk.view.ShortcutsDataView', {
    xtype:'ijosshortcutview',
    extend : 'Ext.view.View',
    store:'IjosDesk.store.Shortcuts',
    itemSelector: 'div.ijos-desktop-shortcut',
    overItemCls: 'x-view-over',
    trackOver: true,
    style: {
        position: 'absolute'
    },
    x: 0, 
    y: 0,
    tpl: new Ext.XTemplate([
        '<tpl for=".">',
        '<div class="ijos-desktop-shortcut" id="{text}-shortcut">',
        '<div class="ijos-desktop-shortcut-icon">',
        '<img src="{icon}" title="{text}">',
        '</div>',
        '<span class="ijos-desktop-shortcut-text">{text}</span>',
        '</div>',
        '</tpl>',
        '<div class="x-clear"></div>'
        ])
});