var SticksCollection = Backbone.Collection.extend({

		model: Stick,
		
		url: "/stickers/",
		
		initialize: function () {
			this.fetch();
		}	
});