
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
                    $('p a').addClass('btn-small');
                    materialButton('.btn-effect, .btn, button, a');
                    _navigation('.navigation');
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