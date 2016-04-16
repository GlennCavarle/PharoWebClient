
Ext.Ajax.cors = true;
Ext.Ajax.useDefaultXhrHeader = false;

Ext.define('WPWorkspace.App',{
    
    requires:['WebPharo.editor.Workspace'],
    extend: 'Ijos.desktop.DesktopApplication',
    name:'WPWorkspace',
    appDir:'WPWorkspace',
    
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