var StickView = Backbone.View.extend({
		
		initialize: function () {
			this.$el.draggable();
			this.$el.css({
				"position": "absolute"
			});
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
			var offset = $("#stickerboard").offset(),
				offsParent = $(this).offsetParent(),
				leftToRight = $("#stickerboard").outerWidth(true) + offset.left,
				topToBottom = $("#stickerboard").outerHeight(true) + offset.top;
				
			if(ui.position.left < offset.left
				|| ui.position.left > leftToRight) {
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
			console.log(this.model.destroy());
			this.remove();
			return false;
		},
		
		render: function () {
			this.$el.css({
				"left": this.model.get("coordsX"),
				"top":  this.model.get("coordsY")
			});
			
			$(".txt").hide();
			
			this.$el.html(this.template(this.model.toJSON()));
		
			return this;
		}
});