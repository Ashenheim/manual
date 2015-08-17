/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $stateParams, $http, $timeout) {
	'use strict';

	var converted;

	$scope.routeList = routeList;
	$scope.articles  = $articles;



	$scope.markdown = function(data) {
		var showDown = new showdown.Converter();
		showDown.setOption('tables', true)
		return showDown.makeHtml(data);
	}

	$scope.convert = function(t) {
		if (t) {
			converted = t.split('_').join(' ');
			converted = converted.charAt(0).toUpperCase() + converted.slice(1);
			return converted;
		}
	}
};


/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http, $sce) {
	'use strict';

	var object = $stateParams;

	// Get correct array
	var node = $articles.filter(function(node) {
		return node.name == $stateParams.id;
	})[0];

	/* ------------------------------------
		#Create Variables
	------------------------------------ */

	// Title
	var $title = 						node.title || node.name;
	if (object.chapterTitle)			$title = object.chapterTitle;

	// Filename
	var $file = 						'articles/' + node.name + '/';
	if (object.chapterTitle) 			$file += object.chapterTitle;
	else 								$file += '/index';

	if (node.markdown)					$file += '.md';
	else								$file += '.html';

	/* ------------------------------------
		#Scopes
	------------------------------------ */

	$scope.title = $title;
	$scope.mainTitle = node.title || node.name;
	$scope.chapterTitle = object.chapterTitle;
	$scope.chapters = node.chapters;

	if(node.icon) $scope.icon = node.icon;

	$http.get($file)
		.success(function(res) {
			var $content = res;
			if( node.markdown ) {
				$content = $scope.markdown($content);
			}
			$scope.content = $sce.trustAsHtml($content);
		})
		.error(function(err) {
			$scope.content = '<div class="error"><h3>404 - Not Found</h3><code>' + $file + '</code></div>';
		});
}
