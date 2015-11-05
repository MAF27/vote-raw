(function() {
    'use strict';

    angular
        .module('voteApp')
        .factory('api', apiFactory);

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {
        return {
            createPoll: createPoll,
            getIdeas: getIdeas,
            retrievePoll: retrievePoll,
            updateVotes: updateVotes
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

        function retrievePoll(pollId) {
            return $http.get('/polls/api/retrieve-poll', {
                    params: {
                        pollId: pollId
                    }
                })
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

        function updateVotes(pollId, index, votes) {
            var data = {
                pollId: pollId,
                index: index,
                votes: votes
            };
            return $http.post('/polls/api/update-votes', data)
                .then(function(response) {
                        return response.data;
                    },
                    function(reason) {
                        console.log(reason);
                    });
        }
    }
}());