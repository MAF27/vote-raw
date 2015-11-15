/* global angular */
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
            updateVotes: updateVotes,
            getPolls: getPolls,
            deletePoll: deletePoll
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
            var promise = new Promise(function(resolve, reject) {
                $http.get('/polls/api/retrieve-poll', { params: { pollId: pollId } })
                    .then(function success(response) {
/*console.log('api-service, retrievePoll: ', response);*/
                        resolve(response.data);
                    })
                    .catch(function error(reason, status) {
                        reject({
                            status: 500,
                            error: "Ooops. That poll does not exist. It may have been deleted by the author."
                        });
                    });
            });
            return promise;
        }

        function getPolls() {
            return $http.get('/polls/api/get-polls')
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

        function deletePoll(pollId) {
            var data = {
                'pollId': pollId
            };
            return $http.post('/polls/api/delete-poll', data)
                .then(function(response) {
                        return response.data;
                    },
                    function(reason) {
                        console.log(reason);
                    });
        }
    }
}());