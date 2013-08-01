var StickView = Backbone.View.extend({
		template: _.template($("#stick-template").html()),
		
		className: "new-stick",
		
		events: {
			"click .delete": "deleteSticker",
			"contextmenu": "editSticker",
			"click .submit": "submiting",
			"dragstop": "dissolve"
		},
		
		textArea: $(".txt"),
		
		dissolve: function (event, ui) {
			var offset = $("#stickerboard").offset(),
				leftToRight = $("#stickerboard").outerWidth(true) + offset.left,
				topToBottom = $("#stickerboard").outerHeight(true) + offset.top;
				
			if(ui.position.left < offset.left
				||ui.position.left > leftToRight
				||ui.position.top < offset.top
				||ui.position.top > topToBottom) {
				
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
			this.textArea.hide();
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
			
			this.$el.draggable().css({"position":"absolute"});
			
			$(".txt").hide();
			
			this.$el.html(this.template(this.model.toJSON()));
		
			return this;
		}
});