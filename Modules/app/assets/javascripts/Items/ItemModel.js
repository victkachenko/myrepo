(function (Module) {
	Module.Item = Backbone.Model.extend({

		initialize: function () {
			this.getRandom();
		},
		
		defaults: {
			"day": "123",
			"month": "333",
			"year": "222",
			"rand": ""
		},
		
		getRandom: function () {
			this.set("rand", parseInt(Math.random() *(100000 - 1) + 1, 10));
		}
	});
	
})(window.App.Items);
