function articlePageDir() {
    return {
        restrict: 'E',
        scope: {
            title: '=',
            content: '='
        },
        templateUrl: 'app/templates/article.html',
        transclude: true,
        controller: function($scope) {
            console.log($scope.title)
        }
    }
}