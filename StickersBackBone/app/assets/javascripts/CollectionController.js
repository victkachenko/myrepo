var SticksCollectionView = Backbone.View.extend({
	
		initialize: function () {
			this.collection = new SticksCollection();
		},
	
		events: {
			"click": "addStick"
		},
		
		getCoords: function (event) {
			return {
				"coordsX": event.pageX - this.$el.offset().left,
				"coordsY": event.pageY - this.$el.offset().top			
			}
		},
		
		addStick: function (event) {
			var newStick = new Stick(this.getCoords(event));
			this.render(newStick);
			this.collection.add(newStick);
			return false;
		},

		render: function (model) {
			var view = new StickView({
				"model": model
			});
			
			this.$el.append(view.render().el);
		}
});