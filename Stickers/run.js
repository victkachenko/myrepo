$(function () {

var Sticker = Backbone.Model.extend({
		defaults: {
			"board": "empty",
			"coordsX": "x",
			"coordsY": "y",
			"userValue": "undefined"
		}
	}),
	
	StickersCollection = Backbone.Collection.extend({
		model: Sticker
	}),
	
	StickView = Backbone.View.extend({
		template: _.template($("#stick-template").html()),
		tagName: "div",
		className: "new-stick",
		events: {
			"click .delete": "deleteSticker",
			"contextmenu": "editSticker",
			"click .subm": "submiting"
		},
		
		submiting: function (event) {
			this.model.set("userValue", this.$el.find(".txt").val());
			this.$el.find(".output").html(this.model.get("userValue"));
		},
		
		editSticker: function () {
			$(".txt").hide();
			this.$el.find(".txt").show();
			return false;
		},
		
		deleteSticker: function () {
			this.model.destroy();
			this.remove();
			return false;
		},
		
		render: function () {
			this.$el.css({
				"left": this.model.get("coordsX"),
				"top":  this.model.get("coordsY")
			});
			this.$el.draggable();
			$(".txt").hide();
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.css({"position": "absolute"});
			return this;
		}
	}),
	
	StickerCollectionView = Backbone.View.extend({
	
		initialize: function () {
			this.collection = new StickersCollection();
		},
		
		el: $("#stickerboard"),
		
		events: {
			"click": "render"
		},
		
		render: function (event) {
			var newStick = new Sticker({
				"coordsX":event.pageX, 
				"coordsY": event.pageY});
			this.addStick(newStick);

		},
		addStick: function (model) {
			var view = new StickView({
				"model": model
			});
			this.$el.append(view.render().el);
		}
}),
	
	sticker = new StickerCollectionView();
	
});