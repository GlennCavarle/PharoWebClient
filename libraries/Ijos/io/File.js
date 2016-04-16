Ext.define('Ijos.io.File', {
    statics:{
        requireCSS: function(file,onLoad,onError) {
            var head = Ext.getHead(),
            css  = document.createElement('link');
            Ext.apply(css, {
                href : file,
                rel  : 'stylesheet',
                type : 'text/css',
                onload: onLoad||function(){},
                onerror: onError||function(){}
            });
            head.appendChild(css);
        },
        requireJS: function(file,onLoad,onError) {
            var head = Ext.getHead(),
            script = document.createElement('script');
            script.onload = onLoad||function(){};
            script.onerror = onError||function(){};
            Ext.apply(script, {
                src  : file,
                type : 'text/javascript'
            });
            head.appendChild(script);
        },
        reloadJsScripts:function(){
            var me = this;
            Ext.getHead().select('script[src]',true).each(function(scriptEl){
                console.log(scriptEl);
                //var scriptEl = Ext.get(htmlScript);
                var src = scriptEl.getAttribute('src');
                var script = document.createElement('script');
           
                Ext.apply(script, {
                    src  : src,
                    type : 'text/javascript',
                    onload : Ext.Function.createDelayed(me.handleFileLoad, 5, me, [script]),
                    onreadystatechange : function() {
                        if (this.readyState === 'loaded' || this.readyState === 'complete') {
                            me.handleFileLoad(script);
                        }
                    }
                }); 
                scriptEl.remove();
                Ext.getHead().appendChild(script);
            });
        },
        handleFileLoad: function(script) {
            script.onload = null;
            script.onreadystatechange = null;
            script.onerror = null;
        }
    
    
    }
});


