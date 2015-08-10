angular
    .module('routerApp', ['ui.router','ngSanitize'])
    .config(config)
    .controller('mainCtrl', mainCtrl)
    .controller('pagesCtrl', pagesCtrl)
    .controller('articleCtrl', articleCtrl);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['routerApp']);
});