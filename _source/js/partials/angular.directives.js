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
        restrict: 'A',
        controller: function($scope, $stateParams) {

            var current = $stateParams.chapterTitle,
                chapters = $scope.chapters,
                prev,
                next,
                $i;

            if(chapters) {
                $i = chapters.indexOf(current);
                prev = chapters[($i - 1)];
                next = chapters[($i + 1)];
            }

            $scope.nav = {
                prev: prev,
                next: next
            }
        }
    }
}

function stateLoadDir($rootScope) {
  return {
    restrict: 'E',
    template: "<div ng-show='isStateLoading' class='loading-indicator'>" +
    "<div class='loading-indicator-body'>" +
    "<h3 class='loading-title'>Loading...</h3>" +
    "<div class='spinner'><chasing-dots-spinner></chasing-dots-spinner></div>" +
    "</div>" +
    "</div>",
    replace: true,
    link: function(scope, elem, attrs) {
      scope.isStateLoading = false;

      $rootScope.$on('$stateChangeStart', function() {
        scope.isStateLoading = true;
      });
      $rootScope.$on('$stateChangeSuccess', function() {
        scope.isStateLoading = false;
      });
    }
  };
}
