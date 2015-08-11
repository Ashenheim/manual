function prismDir() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.ready(function() {

            	setTimeout(function() {
					Prism.highlightAll()
            	}, 200);
            });
        }
    }
}

function sidebarDir() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/includes/sidebar.html'
    }
}

function navigationBarDir() {
    return {
        restrict: 'E',
        scope: {
            id: "=output"
        },
        replace: true,
        templateUrl: 'app/templates/navigation-bar.html',
        controller: function($scope, $stateParams) {

            var node =  $articles.filter(function(node) {
                return node.name == $stateParams.id;
            })[0];

            $scope.leading = node.name;
            $scope.chapters = node.chapters;
        }
    }
}