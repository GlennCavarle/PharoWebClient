Ext.define('WebPharo.controller.ClassViewerController',{
    extend: 'Ijos.app.Controller',
    
    stores:[
    'WebPharo.store.Classes',
    'WebPharo.store.Methods',
    'WebPharo.store.Categories'
    ],
    views:[
    'WebPharo.view.class.ClassTabPanel',
    'WebPharo.view.class.ClassViewer',
    'WebPharo.view.method.MethodBrowser',
    'WebPharo.view.method.MethodEditor'
    
    ],

    refs:[
    {
        ref:'classTabPanel',
        selector:'wpmain wpclasstabpanel'
    }],
    
    init: function() {
        var me = this;
        this.control({
            'wppackagetreeview':{
                'itemdblclick': me.loadEntity
            },
            'wpmethodbrowser ':{
                'methodselect': me.showMethod
            },
            'wpmethodeditor':{
                'save':me.saveCurrentEdition
            }
        });
        
        
    },
    
    loadEntity: function(treePanel, record, item){
        var me = this;
        
        switch(record.get('type')){
            
            case 'class' :
                
                var classEditor = Ext.create('WebPharo.view.class.ClassViewer',{
                    title:record.get('name'),
                    className:record.get('name')
                });
                
                me.getClassTabPanel().add(classEditor);
                me.getClassTabPanel().setActiveTab(classEditor);
                break;
            
        }
        
       
        
        
        
    },
    showMethod:function(record){
        var me = this;
        var activeClassViewer =  me.getClassTabPanel().getActiveTab();
        activeClassViewer.addMethodEditor(record);
        
    },
    saveCurrentEdition:function(mEditor, sources){
        var me = this;
        var activeClassViewer =  me.getClassTabPanel().getActiveTab();
        var store = activeClassViewer.getMethodBrowser().getMethodsPanel().getStore();
        var headerRegexp = /\w+:/g;
        
       
        
        var oldHeader = mEditor.methodRecord.get('name');
        var newHeader = sources.split('\n')[0];
        
        
         if(!/:/g.test(newHeader)){
            headerRegexp = /\w+/g;
        }else{
            newHeader = newHeader.match(headerRegexp).join('')
        }
        
        if(oldHeader == newHeader){
            mEditor.methodRecord.set('sources',sources);
        }else{
            var record = Ext.create('WebPharo.model.method.Method',{
                id:null,
                name:newHeader,
                side:mEditor.methodRecord.get('side'),
                className:mEditor.methodRecord.get('className'),
                category:mEditor.methodRecord.get('category'),
                sources: sources 
            });
            
            store.add(record);
            activeClassViewer.getMethodBrowser().getMethodsPanel().getSelectionModel().select(record);
            activeClassViewer.closeMethodEditor(mEditor);
        }
      store.sync();
      
        
    }
    


});