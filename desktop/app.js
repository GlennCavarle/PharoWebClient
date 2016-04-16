Ext.Loader.setConfig({
    enabled        : true,
    paths          : {
        'IjosDesk'  : 'desktop',
        'Ijos'      : 'libraries/Ijos',
        'Ext.ux'    : 'libraries/Ext/ux',
        'WebPharo'      : 'libraries/WebPharo'
    },
    scriptChainDelay:true,
    preserveScripts:false,
    garbageCollect:true,
    disableCaching:false
});

Ext.application('Ijos.desktop.Kernel');

