var EventManager = new Marionette.Application();

EventManager.addRegions({
	mainRegion: "#main-region"
});

EventManager.navigate = function(route, options){
	options || (options = {});

	Backbone.history.navigate(route, options);
};

EventManager.getCurrentRoute = function(){
	return Backbone.history.fragment
};

EventManager.on("start", function(){
	if (Backbone.history) {
		Backbone.history.start();

		if(this.getCurrentRoute() === ""){
			EventManager.trigger("events:list");
		}
	}
});