(function (Module) {
	Module.ItemView = Backbone.View.extend({
		
		template: _.template($("#list-template").html()),
		
		events: {
			"click .deleteList": "del",
			"dblclick .randomize": "changes"
		},
		
		changes: function () {
			this.model.getRandom();
			this.render();
			this.model.save();
		},
		
		del: function () {
			this.remove();
			this.model.destroy();
		},
		
		render: function()
		{
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		
	});
})(window.App.Items);
