
Ext.Ajax.cors = true;
Ext.Ajax.useDefaultXhrHeader = false;
Ext.define('WebPharo.App',{
    
    requires:['Ext.ux.layout.component.field.CodeMirror'],
    extend: 'Ijos.desktop.DesktopApplication',
    name:'My Super App',
    appDir:'WebPharo',
    controllers:[
    'WebPharo.controller.PackageBrowserController',
    'WebPharo.controller.ClassViewerController'
    ],
    
    js:[
    'libraries/codemirror-2.34/lib/codemirror.js',
    ],
    css:[
    'libraries/codemirror-2.34/lib/codemirror.css',
    'libraries/codemirror-2.34/theme/neat.css',
    // 'apps/WebPharo/scripts/default.css',
    //'apps/WebPharo/scripts/github.css'
    ],
    preferences:{},
    
    beforeLaunch:function(){
        
    }
   
   
});