/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $http) {
	'use strict';

	var converted;

	$scope.routeList = routeList;

	$http.get('settings.yml').success(function(data) {
		var YML = jsyaml.load(data);
		$scope.articleList = YML.articles;
	})

	$scope.articleList = $articles;

    $scope.convert = function(t) {
    	converted = t.split('_').join(' ');
    	converted = converted.charAt(0).toUpperCase() + converted.slice(1);
    	return converted;
    }

    $rootScope.$on('$stateChangeStart',
		function(event, toState, toParams, fromState, fromParams){
			
		});
};


/* ====================================
 * Page Controller
==================================== */

function pagesCtrl($scope, $stateParams, $http) {
	var page = routeList.filter(function(out) {
		return out.name == $stateParams.id;
	})[0];

	$http.get('app/pages/' + page.template).success(function(res) {
		$scope.content = res;
	});
}


/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http, $sce, $timeout) {
	'use strict';

	var object = $stateParams;

	// Get correct array
	var node = $articles.filter(function(node) {
		return node.name == $stateParams.id;
	})[0];

	/* ------------------------------------
		#Create Variables
	------------------------------------ */
	
	var $title = node.name;

	if (object.chapterTitle)
		$title = object.chapterTitle


	// Filename
	var $file = 'articles/' + node.name;
	if (node.chapters)
		$file += '/';
		if ($stateParams.chapterTitle)
			$file += $stateParams.chapterTitle;
		else
			$file += '/index';
	
	if (node.markdown)
		$file += '.md';
	else
		$file += '.html';

	/* ------------------------------------
		#Scopes
	------------------------------------ */

	$scope.title = $title;
	$scope.mainTitle = node.name;
	$scope.chapterTitle = $stateParams.chapterTitle;

	if(node.icon) {
		console.log(node.icon);
		$scope.icon = node.icon;
	}

	// console.log($title);

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			var showDown = new showdown.Converter();
			$content = showDown.makeHtml($content);
		}
		$scope.content = $sce.trustAsHtml($content);
	});
}