(function (Module) {
		Module.StickCollection = Backbone.Collection.extend({

			model: Module.Stick,
			
			url: "/stickers/",
			
			initialize: function () {
				this.fetch();
			}	
		});
})(window.App.Stickers);
