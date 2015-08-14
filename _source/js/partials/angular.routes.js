function config($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('articles/' + $articles[0].name);

    $stateProvider
        .state('articles', {
            url: '/articles/:id',
            templateUrl: 'app/templates/article.tpl.html',
            controller: 'articleCtrl'
        })
        .state('articles.chapters', {
            url: '/:chapterTitle',
            views: {
                '@': {
                    templateUrl: 'app/templates/article.tpl.html',
                    controller: 'articleCtrl'
                }
            }
        });
}