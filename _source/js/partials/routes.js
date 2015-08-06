angular
    .module('routerApp', ['ui.router','ngSanitize'])
    .config(config)
    .controller('mainCtrl', mainCtrl)
    .controller('articleCtrl', articleCtrl);

var routeList = [
    {
        name: 'home',
        url: '/home',
        template: 'pages/home.md'
    },{
        name: 'about',
        url: '/about',
        template: 'pages/about.md'
    }
];

var articles = [
     { name: "npm" },
     { name: "bower" },
     { name: "command-prompt" }
];

function mainCtrl($scope) {
    'use strict';

    $scope.routes = routeList;
    $scope.articleList = articles;
}

function articleCtrl($scope, $location) {
    $scope.title = "Hanna";
    $scope.content = "Content";

    console.log($location.$$path);
}

function getFile($file) {
    $.get( $file, function(data) {
        console.log(data);
        return data;
    });
}

function config($stateProvider, $urlRouterProvider) {
    'use strict';

    var _content;

    $urlRouterProvider.otherwise('/home');

    // Create pages
    for(var i = 0; i < routeList.length; i++) {

        var _state = routeList[i];

        $stateProvider.state( _state.name, {
            url:  _state.url,
            templateUrl: _state.template
        });
    };

    // Create content list
    for (var i=0; i < articles.length; i++) {
        var _item = articles[i];
        var _file = 'articles/' + _item.name + '.md';

        console.log(_file);

        $stateProvider.state( _item.name, {
            url: '/' + _item.name,
            templateUrl: 'page.html',
            controller: function($scope, $sce, $http) {
                $http.get(_file)
                    .success(function(res) {
                        _content = markdown.toHTML(res);
                        console.log(_content);
                        $scope.title = _item.name;
                        $scope.content = $sce.trustAsHtml(_content);
                    });
            }
        });
    }

}
