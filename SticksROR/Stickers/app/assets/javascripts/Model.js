var Stick = Backbone.Model.extend({

		initialize: function () {
			this.on("change", this.synchronize, this);
		},
		
		defaults: {
			"coordsX": "x",
			"coordsY": "y",
			"userValue": ""
		},
		
		synchronize: function () {
			this.save();
		},
		
		validate: function (attrs) {
			if(!attrs.userValue) {
				return "Стикер с пустой строкой не сохранится в БД";
			}
		}
});