/* ====================================
    Angular Routes
==================================== */

function config($stateProvider, $urlRouterProvider) {
    'use strict';

    /* ------------------------------------
        Functions & Variables
    ------------------------------------ */

    var articleView = {
        '@': {
            templateUrl: 'app/templates/article.tpl.html',
            controller: 'articleCtrl'
        }
    };


    /* ------------------------------------
        UI.Router
    ------------------------------------ */

    $urlRouterProvider.otherwise($articles[0].url);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/pages/home.html'
        });

    $stateProvider
        .state('articles', {
            url: '/{article}',
            views: articleView
        })
        .state('articles.chapters', {
            url: '/{chapter}',
            views: articleView
        });
}
