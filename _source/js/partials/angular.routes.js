function config($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise(routeList[0].url);

    $stateProvider
        .state('pages', {
            url: '/:id',
            templateUrl: 'app/templates/page.html',
            controller: 'pagesCtrl'
        })
        .state('articles', {
            url: '/articles/:id',
            templateUrl: 'app/templates/article-page.html',
            controller: 'articleCtrl'
        })
        .state('chapters', {
            url: '/articles/:id/:chapterTitle',
            templateUrl: 'app/templates/article-page.html',
            controller: 'articleCtrl'
        });
}