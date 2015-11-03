'use strict';

angular
    .module('voteApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.otherwise({redirectTo: '/'});
    }]);