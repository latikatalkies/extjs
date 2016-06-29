Ext.Loader.setConfig({
enabled:true,
disableCaching:false
});
Ext.application( {
	name : 'Test',
	controllers:['Navigation'],
	requires:['Test.view.TestView'],	
	models:['myModel'],

	launch : function() {	
		Ext.create('Test.view.TestView');
	}

});
