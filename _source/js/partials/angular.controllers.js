/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $http) {
	'use strict';

	var converted;

	$scope.routeList = routeList;
	// $scope.articleList = articles;

	$http.get('settings.json').success(function(data) {
		$scope.articleList = data.articles;
	})

    $rootScope.$on('$viewContentLoaded', function(event){
    	// Sets timout to force Prism to apply after DOM elements are rendered
        setTimeout(function(){
        	Prism.highlightAll();
        	var codeList = $('pre code');
	    }, 100);
    });

    $scope.convert = function(t) {
    	converted = t.split('_').join(' ');
    	converted = converted.charAt(0).toUpperCase() + converted.slice(1);

    	return converted;
    }
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

	// Get correct array
	var node = $scope.articleList.filter(function(node) {
		return node.name == $stateParams.id;
	})[0];

	/* Variables
	------------ */
	var $file = 'articles/' + node.name,
		scopeTitle = "";

	if (node.chapters) {
		$file += '/';
		if ($stateParams.chapterID) {
			$file += $stateParams.chapterID;
			scopeTitle += $stateParams.chapterID;
		} else {
			$file += 'index';
			scopeTitle += node.name;
		}
	} else {
		scopeTitle += node.name;
	}
	
	if (node.markdown) {
		$file += '.md';
	} else {
		$file += '.html';
	}

	$scope.title = scopeTitle;
	$scope.mainTitle = node.name;
	$scope.chapterTitle = $stateParams.chapterID;

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			var showDown = new showdown.Converter();
			$content = showDown.makeHtml($content);
		}
		$scope.content = $sce.trustAsHtml($content);
		$(window).trigger('pageLoaded');
	});
}