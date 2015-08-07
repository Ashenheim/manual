function mainCtrl($scope) {
	'use strict';

	$scope.routeList = routeList;
	$scope.articleList = articles;

	$scope.countOf = function(text) {
		var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
		return s ? s.length : '';
	};
};

function pagesCtrl($scope, $stateParams, $http) {
	var page = routeList.filter(function(out) {
		return out.name == $stateParams.id;
	})[0];

	$http.get('app/pages/' + page.template).success(function(res) {
		$scope.content = res;
	});
}

function articleCtrl($scope, $stateParams, $http, $sce) {
	'use strict';

	console.log(JSON.stringify($stateParams));

	// Get correct array
	var node = articles.filter(function(node) {
		return node.name == $stateParams.id;
	})[0];

	/*
		Generate filename
		----------------- */
	var $file = 'articles/' + node.name;
	if (node.chapters) {
		$file += '/';
		if ($stateParams.chapterID) {
			$file += $stateParams.chapterID;
		} else {
			$file += 'index';
		}
	}
	if (node.markdown) {
		$file += '.md';
	} else {
		$file += '.html';
	}

	$scope.title = node.name;
	$scope.chapterTitle = $stateParams.chapterID;

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			var showDown = new showdown.Converter();
			$content = showDown.makeHtml($content);
		}
		$scope.content = $sce.trustAsHtml($content);
	});
}