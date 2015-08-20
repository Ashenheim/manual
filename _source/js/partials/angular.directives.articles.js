/* ====================================
    Article Directive
==================================== */
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
        // Remove the watcher
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
