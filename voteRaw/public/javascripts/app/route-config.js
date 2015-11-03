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
        });
}
}());