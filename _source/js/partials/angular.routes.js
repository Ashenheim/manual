function config($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('pages', {
            url: '/:id',
            templateUrl: 'app/templates/page.html',
            controller: 'pagesCtrl'
        });

    $stateProvider
        .state('articles', {
            url: '/articles/:id',
            templateUrl: 'app/templates/article.html',
            controller: 'articleCtrl'
        });

    $stateProvider
        .state('chapters', {
            url: '/articles/:id/:chapterID',
            templateUrl: 'app/templates/article.html',
            controller: 'articleCtrl'
        });

}
