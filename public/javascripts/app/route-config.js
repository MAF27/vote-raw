/* global angular */
(function(){

'use strict';

angular
    .module('voteApp')
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/create', {
            templateUrl: '/javascripts/app/poll/create-poll.html',
            controller: 'CreatePollCtrl',
            controllerAs: 'vm'
        })
        .when('/vote/:pollId', {
            templateUrl: '/javascripts/app/vote/vote.html',
            controller: 'voteCtrl',
            controllerAs: 'vm'
        })
        .when('/manage', {
            templateUrl: '/javascripts/app/manage/manage-polls.html',
            controller: 'ManageCtrl',
            controllerAs: 'vm'
        })
        .when('/stats/:pollId', {
            templateUrl: '/javascripts/app/stats/stats.html',
            controller: 'statsCtrl',
            controllerAs: 'vm'
        })
        .when('/test', {
            templateUrl: '/javascripts/app/test.html'
        });
}
}());