(function() {
    'use strict';

    angular
        .module('voteApp')
        .factory('api', apiFactory);

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {
        return {
            createPoll: createPoll,
            getIdeas: getIdeas
        };

        function getIdeas() {
            return $http.get('/polls/api/get-ideas')
                .then(function(response) {
                        return response.data;
                    },
                    function(reason) {
                        console.log(reason);
                    });
        }

        function createPoll(poll) {
            return $http.post('/polls/api/create-poll', poll)
                .then(function(response) {
                        return response.data;
                    },
                    function(reason) {
                        console.log(reason);
                    });
        }
    }
}());