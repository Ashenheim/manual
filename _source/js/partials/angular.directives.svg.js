/* ====================================
    Sidebar Directive
==================================== */
function svgDir() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '='
        },
        templateUrl: 'app/templates/svg.tpl.html',
        link: function(scope, element, attrs) {
            scope.svgLink= '#icon-' + scope.name;
            scope.svgClass = 'icon-' + scope.name;
        }
    }
}
