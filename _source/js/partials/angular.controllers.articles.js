/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http) {
	'use strict';

	var $object = $stateParams;

	// Get correct array
	var $node = $articles.filter(function($node) {
		return $node.name == $object.article;
	})[0];


	console.log($node);

	/* ------------------------------------
		#Create Variables
	------------------------------------ */

	// Title
	var $title = 						$node.title || $node.name;
	if ($object.chapter)				$title = $object.chapter;

	// Filename
	var $file = 						'articles/' + $node.name + '/';
	if ($object.chapter) 				$file += $object.chapter;
	else 								$file += '/index';

	if ($node.markdown)					$file += '.md';
	else								$file += '.html';

	$file = $file.replace(/ /g, '-').toLowerCase();

	/* ------------------------------------
		#Scopes
	------------------------------------ */

	$scope.title = $title;
	$scope.mainTitle = $node.title || $node.name;
	$scope.chapterTitle = $object.chapter;
	$scope.chapters = $node.chapters;
	$scope.file = $file;

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
