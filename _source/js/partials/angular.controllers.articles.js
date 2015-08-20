/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http) {
	'use strict';


	/* ------------------------------------
		#Find arrays
	------------------------------------ */

	var $object = $stateParams;

	// Get correct array
	var $node = $articles.filter(function(node) {
		return $scope.convertURL(node.name) == $object.article;
	})[0];

	function urlMatch(array,url) {

		var url = $object.chapter;

		if (array) {
			for (var i=0; i < array.length; i++) {
				if($scope.convertURL(array[i]) === url) {
					return array[i];
				}
			}
		}
	};

	console.log($node.name);


	/* ------------------------------------
		#Create Variables
	------------------------------------ */

	var titles = {
		article: $node.name,
		chapter: urlMatch($node.chapters,$object.chapter)
	}

	// Filename
	var $file = 						'articles/' + $object.article + '/';
	if ($object.chapter) 				$file += $object.chapter;
	else 								$file += 'index';

	if ($node.markdown)					$file += '.md';
	else								$file += '.html';

	// $file = $file.replace(/ /g, '-').toLowerCase();

	/* ------------------------------------
		#Scopes
	------------------------------------ */

	$scope.title = {
		article: titles.article,
		chapter: titles.chapter
	};
	$scope.chapters = $node.chapters;
	$scope.file = $file;
	$scope.icon = $node.icon;
	$scope.array = $node;

	if($node.icon) $scope.icon = $node.icon;

	$http.get($file)
		.success(function(res) {
			var $content = res;
			if( $node.markdown ) {
				$content = $scope.markdown($content);
			}
			$scope.content = $content;
		})
		.error(function(err) {
			$scope.content = '<div class="error"><h3>404 - File Not Found</h3><code>' + $file + '</code></div>';
		});
}
