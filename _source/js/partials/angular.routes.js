function config($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise($articles[0].name);
    // $urlRouterProvider.otherwise('/');

    var articleView = {
        '@': {
            templateUrl: 'app/templates/article.tpl.html',
            controller: 'articleCtrl'
        }
    };

    $stateProvider
        .state('articles', {
            url: '/:id',
            views: articleView
        })
        .state('articles.chapters', {
            url: '/:chapterTitle',
            views: articleView
        });
}