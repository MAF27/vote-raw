(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('CreatePollCtrl', CreatePollCtrl);

    CreatePollCtrl.$inject = ['api'];

    function CreatePollCtrl(api) {

        var vm = this;
    
        vm.data = {
            title: '',
            placeholder: 'Best Director',
            options: [{
                    description: '',
                    placeholder: 'Hitchcock',
                    votes: 99
            },
                {
                    description: '',
                    placeholder: 'Charley Chaplin',
                    votes: 97
            }]
        };

        vm.createPoll = function(){
            api.createPoll(vm.data);
        };
    }

}());


/* [{
            title: 'Best Director',
            options: [{
                    optionName: 'Hitchcock',
                    votes: 99
            },
                {
                    optionName: 'Charley Chaplin',
                    votes: 97
            }]
        }, {
            title: 'Next Megatrend',
            options: [{
                    optionName: 'Self Driving Cars',
                    votes: 9837
            },
                {
                    optionName: 'Self Feeding Animals',
                    votes: 4
            }]
        }];
        */