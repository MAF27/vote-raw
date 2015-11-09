'use strict';

/* Controllers */
/* global google */
google.load('visualization', '1', {
    packages: ['corechart']
});

/* global angular */
google.setOnLoadCallback(function() {
    angular.bootstrap(document.body, ['voteApp']);
});

angular
    .module('voteApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
