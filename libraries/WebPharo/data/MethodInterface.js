/**
 * @class WebPharo.data.MethodInterface
 */

Ext.define('WebPharo.data.MethodInterface', {
     statics: {
        /**
         * This method allows you to decorate a Model's class to implement the NodeInterface.
         * This adds a set of methods, new events, new properties and new fields on every Record.
         * @param {Ext.Class/Ext.data.Model} modelClass The Model class or an instance of the Model class you want to
         * decorate the prototype of.
         * @static
         */
        decorate: function(modelClass) {
            
            // get the reference to the model class, in case the argument was a string or a record
            if (typeof modelClass == 'string') {
                modelClass = Ext.ModelManager.getModel(modelClass);
            } else if (modelClass.isModel) {
                modelClass = Ext.ModelManager.getModel(modelClass.modelName);
            }
            
            // avoid unnecessary work in case the model was already decorated
            if (modelClass.prototype.isNode) {
                return;
            }


            modelClass.override(this.getPrototypeBody());
            this.applyFields(modelClass, [
                { name : 'name',        type : 'string',    defaultValue : null      },
                { name : 'className',   type : 'string',    defaultValue : null      },
                { name : 'side',        type : 'string',    defaultValue : null      },
                { name : 'category',    type : 'string',    defaultValue : null      },
                { name : 'sourceCode',  type : 'string',    defaultValue : null      }
            ]);
        },
        
        applyFields: function(modelClass, addFields) {
            var modelPrototype = modelClass.prototype,
                fields = modelPrototype.fields,
                keys = fields.keys,
                ln = addFields.length,
                addField, i;

            for (i = 0; i < ln; i++) {
                addField = addFields[i];
                if (!Ext.Array.contains(keys, addField.name)) {
                    fields.add(new Ext.data.Field(addField));
                }
            }

        },
        getPrototypeBody: function() {
            return {
                /**
                 * @property {Boolean} isMethod
                 * `true` in this class to identify an object as an instantiated Method, or subclass thereof.
                 */
                isMethod: true
            }
        }
     }
    
});