/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $stateParams, $http, $timeout) {
	'use strict';

	var converted;

	$scope.routeList = routeList;
	$scope.articles  = $articles;

	$scope.convert = function(t) {
		converted = t.split('_').join(' ');
		converted = converted.charAt(0).toUpperCase() + converted.slice(1);
		return converted;
	}

	$rootScope.$on('$viewContentLoaded', function(event){
		$timeout(function() {

			var buttons = "",
					buttons = $('.btn-effect, .btn, button');

			console.log(buttons.length);
			materialButton(buttons);
			Prism.highlightAll()

		},500);
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
	
	var $title = node.name;
	if (node.title)
		$title = node.title

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
		$scope.icon = node.icon;
	}

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			var showDown = new showdown.Converter();
			$content = showDown.makeHtml($content);
		}
		$scope.content = $sce.trustAsHtml($content);
	});
}