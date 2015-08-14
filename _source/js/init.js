(function() {

	angular
	    .module('myApp', ['ui.router','ngSanitize'])
	    // config
	    .config(config)
	    // controllers
	    .controller('mainCtrl', mainCtrl)
	    .controller('articleCtrl', articleCtrl)
	    // directives
	    .directive('incHeader', headerDir)
	    .directive('incSidebar', sidebarDir)
	    .directive('chapters', chaptersDir)
	    .directive( 'elemReady', function( $parse ) {
			return {
				restrict: 'A',
				link: function( $scope, elem, attrs ) {    
					elem.ready(function(){
						$scope.$apply(function(){
							var func = function() {
							    var _Count = $('code').length;
							    console.log(_Count);
							}
							func();
						})
					})
				}
			}
		});

	// Load Angular after retrieving data
	fetchData().then(bootstrapApp);

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get('settings.yml').success(function(data) {
			var YML = jsyaml.load(data);
			return $articles = YML.articles;
		});
	}

	function bootstrapApp() {
		return angular.element(document).ready(function() {
		    angular.bootstrap(document, ['myApp']);
		});
	}

}());