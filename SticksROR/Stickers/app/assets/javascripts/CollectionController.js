var SticksCollectionView = Backbone.View.extend({

		initialize: function () {
			this.collection = new SticksCollection();
			this.collection.on("reset", this.autoLoad, this);
			this.collection.on("error", this.err, this);
		},
		
		err: function (model, error) {
			var boardWidth = this.$el.outerWidth(true);
			console.log(boardWidth);
			console.log(error);
		},
		
		autoLoad: function (event) {
			this.collection.each(function (index, elem) {
				this.addStick(index);
			}, this);
		},
		
		events: {
			"click": "render"
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