(function() {

	/* ------------------------------------
	    Angular
	------------------------------------ */
	angular
	    .module('myApp', ['ui.router','ngSanitize','ngAnimate'])
	    .config(config)
	    .controller('mainCtrl', mainCtrl)
	    .controller('articleCtrl', articleCtrl)
	    .directive('incSidebar', sidebarDir)
	    .directive('ngConvert', articleDir);


	/* ------------------------------------
	    Initialization
	------------------------------------ */
	fetchData().then(bootstrapApp);

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get('articles/articles.yml').success(function(data) {
			var YML = jsyaml.load(data);
			return $articles = YML.articles;
		});
	}

	function bootstrapApp() {
		return angular.element(document).ready(function() {
		    angular.bootstrap(document, ['myApp']);
		});
	}

})();
