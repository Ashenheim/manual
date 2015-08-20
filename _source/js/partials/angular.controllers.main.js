/* ====================================
 * Main Controller
==================================== */

function mainCtrl($scope, $rootScope, $stateParams, $http, $timeout) {
    'use strict';

    var converted;

    $scope.articles  = $articles;

    $scope.markdown = function(data) {
        var showDown = new showdown.Converter();
        showDown.setOption('tables', true)
        return showDown.makeHtml(data);
    }

    $scope.convertURL = function(t) {
        if (t) {
            var text = t.replace(/[^\w\s]/gi, '').replace(/ /g, '-').toLowerCase();
            return text;
        } else {
            console.log('%c $scope.convertURL: Error', 'background: #222; color: red;');
            return null;
        }
    }
};
