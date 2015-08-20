

function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    'use strict';

    /* ------------------------------------
        Variable Functions
    ------------------------------------ */

    var prettyURL = {
        encode: function(string) { return string && string.replace(/ /g, "-").toLowerCase(); },
        decode: function(string) { return string && string.replace(/-/g, " ").toLowerCase(); },
        is: angular.isString,
        pattern: /[^/]+/
    };

    var articleView = {
        '@': {
            templateUrl: 'app/templates/article.tpl.html',
            controller: 'articleCtrl'
        }
    };


    /* ------------------------------------
        UI.Router
    ------------------------------------ */

    $urlRouterProvider.otherwise($articles[0].name);

    $urlMatcherFactoryProvider.type('pretty', prettyURL);

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
