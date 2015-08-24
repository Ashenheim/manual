/* ====================================
    Article Directive
==================================== */
function articleDir($timeout, $document) {

    function link(scope, element, attrs) {
        var watcher = scope.$watch('content', function(val) {
            if(val) {
                element.html(val);
                $timeout(function() {
                    Prism.highlightAll();
                    materialButton();
                    events.pub('navigation', "Navigation init");
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
