/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $stateParams, $http, $timeout) {
	'use strict';

	var converted;

	$scope.routeList = routeList;
	$scope.articles  = $articles;

	$(window)
		.on('toggleNav', function() {
			$('html').toggleClass('navigation-is-active');
		})
		.on('hideNav', function() {
			$('html').removeClass('navigation-is-active');
		});

	$('.hamburger').on('click', function(event) {
		$(window).trigger('toggleNav');
	})

	$scope.convert = function(t) {
		if (t) {
			converted = t.split('_').join(' ');
			converted = converted.charAt(0).toUpperCase() + converted.slice(1);
			return converted;
		}
	}

	$rootScope.$on('$viewContentLoaded', function(event){
		$timeout(function() {

			materialButton('.btn-effect, .btn, button');
			Prism.highlightAll();
			_navigation('.navigation');

		},500);
	});
};


/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http, $sce) {
	'use strict';

	var object = $stateParams;

	console.log(object);

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
	if(node.icon) $scope.icon = node.icon;

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			var showDown = new showdown.Converter();
			$content = showDown.makeHtml($content);
		}
		$scope.content = $sce.trustAsHtml($content);
	});
}