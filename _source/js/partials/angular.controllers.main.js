/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $stateParams, $http, $timeout) {
    'use strict';

    var converted;

    $scope.routeList = routeList;
    $scope.articles  = $articles;

    $scope.markdown = function(data) {
        var showDown = new showdown.Converter();
        showDown.setOption('tables', true)
        return showDown.makeHtml(data);
    }

    $scope.convert = function(t) {
        if (t) {
            converted = t.split('_').join(' ');
            converted = converted.charAt(0).toUpperCase() + converted.slice(1);
            return converted;
        }
    }

    $scope.convertURL = function(t) {
        if (t) {
            var text = t.replace(/ /g, '_').toLowerCase();

            return text;
        }
    }
};