Ext.define('Test.controller.Navigation',{	
	extend : 'Ext.app.Controller',
	models:['myModel'],
	stores:['myStore'],
	refs : [ {
		ref : 'MainWindow',
		selector : '#mainWindow'
	}, {
		ref : 'NavBar',
		selector : '#navBar'
	},{
		ref:'testForm',
		selector:'#testForm'
	} ,{
		ref:'testgrid',
		selector:'#testgrid'
	} ],
	constructor : function() {
		this.callParent(arguments);
	},
	init:function(){
		var me = this, components = controllers = null;
		this.control({
			'#testForm button[action=test]' : {
				click : me.checkForToken
			},
			'#testForm button[action=add]' : {
				click : me.add
			}
		});
	},
	add:function(){
		var me=this,grid=me.getTestgrid();
		var r=new Test.model.myModel({
			id:22,
			name:'gopal'
		});
		grid.store.insert(0,r);
	},
	checkForToken : function() {
		var me=this, form=me.getTestgrid();
		form.store.load();
	},
	applyTabToken : function(token) {},
	pageSelected:function(e){}
});