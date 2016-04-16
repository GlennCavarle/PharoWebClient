Ext.define('WPMorphicViewer.view.Main', {
    extend: 'Ijos.app.MainView',
    xtype: 'wpmorphicviewermain',
    layout: 'fit',
    tbar: [{
            xtype: 'button',
            text: 'Button 1'
        }],
    items: [],
    isDown: false,
    component: null,
    initComponent: function() {
        var me = this;

        me.callParent();

        me.component = Ext.create('Ext.draw.Component', {
            viewBox: false,
            draggable: true,
            items: [{
                    type: 'rect',
                    width: 50,
                    height: 40,
                    fill: '#00f',
                    x: 0,
                    y: 0
                }]
        });

        me.component.on('mousedown', me.mouseClick, me);
        me.component.on('mouseup', me.mouseDown, me);

        me.component.on('drag', me.mouseMove, me);
        //me.component.on('mouseleave',me.mouseDown,me);
        me.add(me.component);
    },
    mouseClick: function(e) {
        var me = this;

        me.isDown = true;

        var pos_x = e.getPageX() - me.body.el.getX();
        var pos_y = e.getPageY() - me.body.el.getY();
        var evt = [1, 0, pos_x, pos_y, 4, 0, 0, 1];

        /*var runner = new Ext.util.TaskRunner();
         var task = runner.start({
         run: me.mouseMove,
         interval: 500
         });*/


        me._sendEvents([evt]);


    },
    mouseMove: function(e) {
        var me = this;
        var pos_x = e.getPageX() - me.body.el.getX();
        var pos_y = e.getPageY() - me.body.el.getY();
        var evt1 = [1, 0, pos_x, pos_y, 4, 0, 0, 1];

        if (me.isDown) {
            me._sendEvents([evt1]);
        }

    },
    mouseDown: function(e) {
        var me = this;

        me.isDown = false;


        var pos_x = e.getPageX() - me.body.el.getX();
        var pos_y = e.getPageY() - me.body.el.getY();
        var evt1 = [1, 0, pos_x, pos_y, 4, 0, 0, 1];
        var evt2 = [1, 0, pos_x, pos_y, 0, 0, 0, 1];

        me._sendEvents([evt1, evt2]);
    },
    _sendEvents: function(evts) {
        var me = this;

        Ext.Ajax.request({
            url: "http://localhost:1701/r/event/process",
            method: 'POST',
            jsonData: {
                events: evts
            },
            success: function(data) {
                me.fireEvent('eventsuccess', me, evts, data);
            },
            failure: function(error) {
                me.fireEvent('eventfailure', me, evts, error);
            }
        });
    }
});
   