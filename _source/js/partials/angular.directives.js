
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