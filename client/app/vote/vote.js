/* global angular */
(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('VoteCtrl', VoteCtrl);

    VoteCtrl.$inject = ['api', '$routeParams', '$location', '$scope'];

    function VoteCtrl(api, $routeParams, $location, $scope) {

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
        
        vm.showVm = function(){
            console.log(vm);
        };
        
        vm.ready = function(){
            return vm.pollId !== null;
        };

        api.retrievePoll($routeParams.pollId)
            .then(function(data) {
                vm.data = data.poll;
                vm.pollId = data._id;
/*console.log('vote.js: success: ', vm);      */          
                $scope.$digest(); // Since refactoring retrievePoll as a promise, this is necessary in order to make Angular use the vm data when it's ready
            })
            .catch(function(err, status) {
                vm.pollId = null;
                vm.errmsg = err.error;
                $scope.$digest(); // Since refactoring retrievePoll as a promise, this is necessary in order to make Angular use the vm data when it's ready
/*console.log('vote.js: error: ', vm);                */
            });
    }

}());