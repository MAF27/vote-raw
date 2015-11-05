(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('voteCtrl', voteCtrl);

    voteCtrl.$inject = ['api', '$routeParams'];

    function voteCtrl(api, $routeParams) {

        var vm = this;
        
        vm.incVote = function (index) {
            vm.data.options[index].votes++;
            api.updateVotes(vm.pollId, index, vm.data.options[index].votes)
                .then(),
                function(reason) {
                    console.log(reason);
                };
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