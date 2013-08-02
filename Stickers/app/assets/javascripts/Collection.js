var SticksCollection = Backbone.Collection.extend({

		url: "/stickers/",
		
		initialize: function () {
			this.fetch();
		},
		
		reset: function () {
			console.log("213");;
		},
		
		model: Stick,
		
});