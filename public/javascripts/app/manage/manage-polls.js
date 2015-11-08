/* global angular */
(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('ManageCtrl', ManageCtrl);

    ManageCtrl.$inject = ['api', '$location'];

    function ManageCtrl(api, $location) {

        var vm = this;
        vm.url = "https://"+window.location.hostname;

        vm.deletePoll = function(pollId, index){
          console.log('Would delete poll with id ', pollId);
          vm.data.splice(index, 1);
        };
        
        vm.showStats = function(pollId){
            $location.path('/stats/' + pollId);
        };

        api.getPolls()
            .then(function(polls) {
                vm.data = polls;
            });
    }
}());