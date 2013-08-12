(function (Module) {
		Module.ItemCollectionView = Backbone.View.extend({

		initialize: function () {
			this.collection = new Module.ItemCollection();
			this.collection.on("reset", this.autoLoad, this);
			Backbone.Mediator.sub("plus", this.logger);
		},
		
		autoLoad: function () {
			this.collection.each(this.render, this);
		},
		
		events: {
			"click #add	": "addList"
		},
		
		logger: function () {
			console.log("Add Item or Sticker");
		},
		
		render: function (model) {			
			var viewList = new Module.ItemView({
				"model": model
			});
			
			this.$el.append(viewList.render().el);
		},
			
		addList: function (model) {
			var thisDate = new Date(),
			
				newList = new Module.Item({
					"day": thisDate.getDay(),
					"month": thisDate.getMonth(),
					"year": thisDate.getFullYear(),
					"rand": parseInt(Math.random() *(100000 - 1) + 1, 10)
				});
			
			this.render(newList);
			this.collection.create(newList);
			
			Backbone.Mediator.pub("plus");
			return false;
			newList.on("change", newList.save);
			
		}
	});
})(window.App.Items);
