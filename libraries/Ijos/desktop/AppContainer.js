Ext.define('Ijos.desktop.AppContainer',{
    extend: 'Ext.util.Observable',
    statics:{
        STATUS_STARTED : 'started',
        STATUS_WAITING : 'wait',
        STATUS_STOPPED : 'stopped'
    },
   
    id:null,
    pid:null,
    application:null,
    viewContainer:null,
    desktop:null,
    taskButton:null,
    status:null,
    
    constructor:function(){
        var me = this;
        me.status= Ijos.desktop.AppContainer.STATUS_STARTED;
        me.callParent(arguments);
    },
    
    getDesktop:function(){
        var me = this;
        return me.desktop;
    },
    getApplication:function(){
        var me = this;
        return me.application;
    },
    getViewContainer:function(){
        var me = this;
        return me.viewContainer;
    },
    getTaskButton:function(){
        var me = this;
        return me.taskButton;
    },
    getAppId:function(){
        var me = this;
        return me.id;
    },
    getPid:function(){
        var me = this;
        return me.pid;
    }
   
});