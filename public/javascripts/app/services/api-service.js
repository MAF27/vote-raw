(function() {
    'use strict';

    angular
        .module('voteApp')
        .factory('api', apiFactory);

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {
        return {
            createPoll: createPoll
        };

        function createPoll(poll) {
            return $http.post('/polls/api/create-poll', poll)
                .then(function(response) {
                    return response.data;
                });
        }
    }
}());