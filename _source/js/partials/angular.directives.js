
function sidebarDir() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/includes/sidebar.html'
    }
}

function headerDir() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/includes/header.html'
    }
}

function chaptersDir() {
    return {
        restrict: 'E',
        scope: {
            id: "=output"
        },
        replace: true,
        templateUrl: 'app/templates/chapters.tpl.html',
        controller: function($scope, $stateParams) {

            var node =  $articles.filter(function(node) {
                return node.name == $stateParams.id;
            })[0];

            $scope.leading = node.name;
            $scope.chapters = node.chapters;
        }
    }
}


function buttonDir() {
    return {
        restrict: 'C',
        template: '<ng-transclude></ng-transclude>',
        replace: true,
        transclude: true,
        link: function(scope, element, attrs) {
            element.addClass('btn');
            materialButton(element);
            console.log('added button');
        }
    }
}

function articleDir($timeout, $document) {

    function link(scope, element, attrs) {
        var watcher = scope.$watch('content', function(newValue) {
            if(newValue) {
                element.html(newValue);
                $timeout(function() {
                    Prism.highlightAll();
                    materialButton();
                    navigation();
                });
            }
        });

        scope.$on('$destroy', watcher);
    }

    return {
        restrict: 'A',
        replace: true,
        scope: {
            content: '='
        },
        link: link
    }
}

function articleNavDir() {
    return {
        restrict: 'E',
        template: '<h3>{{chapter}}</h3>',
        replace: true,
        controller: function($scope, $stateParams) {

            var current = $stateParams.chapterTitle;
            var chapters = $scope.chapters;
            if(current && chapters) {
                var indexOf = chapters.indexOf(current);
                var indexOf = chapters[0];
                console.log(indexOf);
            }
        }
    }
}
