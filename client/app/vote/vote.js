/* global angular */
(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('voteCtrl', voteCtrl);

    voteCtrl.$inject = ['api', '$routeParams', '$location'];

    function voteCtrl(api, $routeParams, $location) {

        var vm = this;

        vm.getVotes = function(index) {
            for (var i = 0; i < vm.data.options.length; i++) {

                if (vm.data.options[i].checked) {
                    api.updateVotes(vm.pollId, i, vm.data.options[i].votes + 1)
                        .then(),
                        function(reason) {
                            console.log(reason);
                        };
                }
            }
            $location.path('/stats/' + vm.pollId);
        };

        api.retrievePoll($routeParams.pollId)
            .then(function(pollRecord) {
                vm.data = pollRecord.poll;
                vm.pollId = pollRecord._id;
            }),
            function(reason) {
                console.log(reason);
            };
    }

}());