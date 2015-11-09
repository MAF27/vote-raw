/* global angular */
(function() {

    'use strict';

    angular
        .module('voteApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: '/app/create/create-poll.html',
                controller: 'CreatePollCtrl',
                controllerAs: 'vm'
            })
            .when('/vote/:pollId', {
                templateUrl: '/app/vote/vote.html',
                controller: 'voteCtrl',
                controllerAs: 'vm'
            })
            .when('/manage', {
                templateUrl: '/app/manage/manage-polls.html',
                controller: 'ManageCtrl',
                controllerAs: 'vm'
            })
            .when('/stats/:pollId', {
                templateUrl: '/app/stats/stats.html',
                controller: 'statsCtrl',
                controllerAs: 'vm'
            });
    }
}());