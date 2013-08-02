var Stick = Backbone.Model.extend({
		defaults: {
			"coordsX": "x",
			"coordsY": "y",
			"userValue": ""
		},
		
		url: "/stickers/"
});