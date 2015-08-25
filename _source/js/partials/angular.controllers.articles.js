/* ====================================
 * Article Controller
==================================== */

function articleCtrl($scope, $stateParams, $http, $markdown) {
    'use strict';


    /* ------------------------------------
        #Find arrays
    ------------------------------------ */

    var $object = $stateParams;

    // Get correct array
    var $node = $articles.filter(function(node) {
        return node.url == $object.article;
    })[0];

    function urlMatch(array,url) {

        var url = $object.chapter;

        if (array) {
            for (var i=0; i < array.length; i++) {
                if(array[i].url === url) {
                    return array[i].name;
                }
            }
        }
    };


    /* ------------------------------------
        #Create Variables
    ------------------------------------ */

    var titles = {
        article: $node.title || $node.name,
        chapter: urlMatch($node.chapters,$object.chapter)
    }

    // Filename
    var $file = 						'articles/' + $object.article + '/';
    if ($object.chapter) 				$file += $object.chapter;
    else 								$file += 'index';

    $file += '.md';

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
    $scope.icon = $node.icon;

    $http.get($file)
        .success(function(data) {
            var content = $markdown(data);
            $scope.content = content;
        })
        .error(function(err) {
            $scope.content = '<div class="error"><h3>404 - File Not Found</h3><code>' + $file + '</code></div>';
        });
}
