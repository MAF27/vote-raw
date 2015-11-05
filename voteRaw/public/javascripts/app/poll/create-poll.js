(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('CreatePollCtrl', CreatePollCtrl);

    CreatePollCtrl.$inject = ['api'];

    function CreatePollCtrl(api) {

        var vm = this;

        api.getIdeas()
            .then(function(idea) {
                vm.data = idea;
            });

        vm.createPoll = function() {
            api.createPoll(vm.data)
                .then(function(response) {
                        vm.poll_id = response;
                    },
                    function(reason) {
                        console.log(reason);
                    });
        };

        vm.addOption = function() {
            vm.data.options.push({
                description: '',
                placeholder: 'Yet one more choice',
                votes: 0
            });
        };
    }

}());