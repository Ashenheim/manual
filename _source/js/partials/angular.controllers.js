function mainCtrl($scope) {
	'use strict';

	$scope.routeList = routeList;
	$scope.articleList = articles;
};

function pagesCtrl($scope, $stateParams, $http) {
	var page = routeList.filter(function(out) {
		return out.name == $stateParams.id;
	})[0];

	$http.get('app/pages/' + page.template).success(function(res) {
		$scope.content = res;
	});
}

// function articleCtrl($scope, $stateParams, $http, $sce) {
// 	'use strict';

// 	var $id = $stateParams.id,
// 		$file = 'articles/' + $id,
// 		article = articles.filter(function(article) {
// 			return article.name == $stateParams.id;
// 		})[0],
// 		$content;


// 	if( article.chapters) {
// 		$file += '/index'
// 	}

// 	// markdown extension check
// 	if( article.markdown ) {
// 		$file += '.md';
// 	} else { 
// 		$file += '.html';
// 	}

// 	$http.get($file).success(function(res) {
// 		$content = res;

// 		if( article.markdown ) {
// 			$content = markdown.toHTML($content);
// 		}
// 		$scope.content = $sce.trustAsHtml($content);
// 	});

// };

function articleChapterCtrl($scope, $stateParams) {
	$scope.content = JSON.stringify($stateParams);
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

	console.log($file);

	$scope.content = "Hello world!";

	$http.get($file).success(function(res) {
		var $content = res;
		if( node.markdown ) {
			$content = markdown.toHTML($content);
		}
		$scope.content = $sce.trustAsHtml($content);
	});
}