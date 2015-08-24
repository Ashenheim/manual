(function() {

    /* ------------------------------------
        Angular
    ------------------------------------ */
    angular
        .module('myApp', ['ui.router','ngSanitize','ngAnimate','embedCodepen'])
        .config(config)
        .controller('mainCtrl', mainCtrl)
        .controller('articleCtrl', articleCtrl)
        .directive('incSidebar', sidebarDir)
        .directive('contentWatch', articleDir)
        .factory('$markdown', markdownFtry);


    /* ------------------------------------
        Initialization
    ------------------------------------ */
    fetchData().then(bootstrapApp);

    function stringToURL(t) {
        var text = t.replace(/[^\w\s]/gi, '').replace(/ +(?= )/g,'').replace(/ /g, '-').toLowerCase();

        return text;
    }

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get('articles/articles.yml').success(function(data) {
            var YML = jsyaml.load(data);
            var articles = YML.articles;

            // Create URL's from names
            for (i=0; i < articles.length; i++) {
                articles[i].url = stringToURL(articles[i].name);

                if ( articles[i].chapters) {
                    for (f=0; f < articles[i].chapters.length; f++) {
                        articles[i].chapters[f].url = stringToURL(articles[i].chapters[f].name);
                    }
                }
            }

            return $articles = articles;
        });
    }

    function bootstrapApp() {
        return angular.element(document).ready(function() {
            angular.bootstrap(document, ['myApp']);
        });
    }

    // setInterval(function() {
    //     $('html').toggleClass('overlay-is-active');
    // },1000);

})();
