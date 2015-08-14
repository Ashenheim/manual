function config($stateProvider, $urlRouterProvider) {
    'use strict';

    // $urlRouterProvider.otherwise('articles/' + $articles[0].name);
    $urlRouterProvider.otherwise('/');

    var articleView = {
        '@': {
            templateUrl: 'app/templates/article.tpl.html',
            controller: 'articleCtrl'
        }
    };

    $stateProvider
        .state('/', {
            url: '/',
            template: '<h1>Hello world!</h1>'
        })

    $stateProvider
        .state('articles', {
            url: '/articles/:id',
            views: articleView
        })
        .state('articles.chapters', {
            url: '/:chapterTitle',
            views: articleView
        });
}