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

    // Navigation

    if($node.chapters) {

        var next,prev,currentIndex,nextIndex,prevIndex;

        function getChapterIndex() {
            var a = $node.chapters;
            var b = $object.chapter;
            var c;

            for(var i = 0; i < a.length; i++) {
                if(a[i].url === b) {
                    return i;
                }
            }
        };
        currentIndex = getChapterIndex();
        prevIndex = currentIndex - 1;
        prev = $node.chapters[prevIndex];
        nextIndex = currentIndex + 1;
        next = $node.chapters[nextIndex];
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
    $scope.navigation = {
        prev:prev,
        next:next
    };

    $http.get($file)
        .success(function(data) {
            var content = $markdown(data);
            $scope.content = content;
        })
        .error(function(err) {
            $scope.content = '<div class="error"><h3>404 - File Not Found</h3><code>' + $file + '</code></div>';
        });
}
