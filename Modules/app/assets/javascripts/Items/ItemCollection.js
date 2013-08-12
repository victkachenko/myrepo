(function (Module) {

	Module.ItemCollection = Backbone.Collection.extend({
		url: "/items/",

		initialize: function () {
			this.fetch();
		},
		
		model: Module.Item
		
	});
	
})(window.App.Items);
