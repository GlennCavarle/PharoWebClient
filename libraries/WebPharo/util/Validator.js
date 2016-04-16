/**
 * @class WebPharo.util.Validator
 */

Ext.define('WebPharo.util.Validator',{
    
    statics:{
     
        selectorRegexp: /\w+/g,
        selectorWithArgRegexp: /\w+:/g,
       
     
        /**
         *@static
         * Compares the selectors in string or in method source
         * @param {String} source1
         * @param {String} source2
         * @return {Boolean} isSame
         */
        sameSelectors: function(s1, s2){
            
            s1 = s1.split('\n')[0];
            s2 = s2.split('\n')[0];
            
            var s1test1 = /:/g.test(s1);
            var s2test1 = /:/g.test(s2);
            
            if(s1test1 != s2test1){
                return false;
            }
            
            var test2Regex = (s1test1 ? /\w+:/g : /\w+/g );
            var s1test2 = s1.match(test2Regex).join('')
            var s2test2 = s2.match(test2Regex).join('')
                
            if(s1test2 != s2test2){
                return false;
            }
             
            return true;
            
        }
        
        
    }
    
    
})