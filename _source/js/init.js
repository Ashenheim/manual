angular
    .module('routerApp', ['ui.router','ngSanitize'])
    .config(config)
    .controller('mainCtrl', mainCtrl)
    .controller('pagesCtrl', pagesCtrl)
    .controller('articleCtrl', articleCtrl)
    .directive('articlePage', articlePageDir);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['routerApp']);
});