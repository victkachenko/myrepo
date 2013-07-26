var SticksCollectionView = Backbone.View.extend({
	
		initialize: function () {
			this.collection = new SticksCollection();
		},
	
		events: {
			"click": "render"
		},
		
		getCoords: function (event) {
			return {
				"coordsX": event.pageX,
				"coordsY": event.pageY				
			}
		},
		
		render: function (event) {
			var newStick = new Stick(this.getCoords(event));
			this.addStick(newStick);
			this.collection.add(newStick);
			return false;
		},

		addStick: function (model) {
			var view = new StickView({
				"model": model,
				"parent": this.$el
			});
			
			this.$el.append(view.render().el);
		}
});