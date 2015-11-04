(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('CreatePollCtrl', CreatePollCtrl);

    CreatePollCtrl.$inject = ['api'];

    function CreatePollCtrl(api) {

        var vm = this;

       api.getIdeas()
        .then(function(idea){
             vm.data = idea;
        });

        vm.createPoll = function(){
            api.createPoll(vm.data);
        };
    }

}());