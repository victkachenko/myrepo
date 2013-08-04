var StickView = Backbone.View.extend({
		
		initialize: function () {
			this.$el.draggable();
		},
		
		template: _.template($("#stick-template").html()),
		
		className: "new-stick",
		
		events: {
			"click .delete": "deleteSticker",
			"click .submit": "submiting",
			"contextmenu": "editSticker",
			"dragstop": "dissolve"
		},
		
		textArea: $(".txt"),
		
		dissolve: function (event, ui) {
			var	boardWidth = $("#stickerboard").outerWidth(true),
				boardHeight = $("#stickerboard").outerHeight(true);
				
			if(ui.position.left < 0 ||
			   ui.position.left > boardWidth ||
			   ui.position.top < 0 ||
			   ui.position.top > boardHeight) {
					this.deleteSticker();
			}	
		},
		
		submiting: function (event) {
			this.model.set("userValue", this.$el.find(".txt").val());
			this.$el.find(".output").html(this.model.get("userValue"));
			this.$el.find(".txt").hide();
			return false;
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
			
			this.$el.html(this.template(this.model.toJSON()));
			
			if(this.model.get("userValue") !== "") {
			
				this.$el.css({
					"background-color": "red",
					"color": "yellow"});
					
				this.$el.find(".txt").val(this.model.get("userValue"));
			}
			
			$(".txt").hide();
				
			return this;
		}
});