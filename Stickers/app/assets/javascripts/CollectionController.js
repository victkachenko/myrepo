var SticksCollectionView = Backbone.View.extend({

		initialize: function () {
			this.collection = new SticksCollection();
		},
		
		events: {
			"click": "render"
		},
			
		reset: function () {
			this.collection
		},
		
		getCoords: function (event) {
			return {
				"coordsX": event.pageX - this.$el.offset().left,
				"coordsY": event.pageY - this.$el.offset().top			
			}
		},
		
		render: function (event) {
			var newStick = new Stick(this.getCoords(event));
			this.addStick(newStick);
			newStick.save();
			this.collection.add(newStick);
			return false;
		},

		addStick: function (model) {
			var view = new StickView({
				"model": model
			});
						
			this.$el.append(view.render().el);
		}
});