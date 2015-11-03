(function() {
    'use strict';

    angular
        .module('voteApp')
        .controller('CreatePollCtrl', CreatePollCtrl);

    function CreatePollCtrl() {

        var defaults = [{
            name: 'Best Director',
            options: [{
                    optionName: 'Hitchcock',
                    votes: 99
            },
                {
                    optionName: 'Charley Chaplin',
                    votes: 97
            }]
        }, {
            name: 'Next Megatrend',
            options: [{
                    optionName: 'Self Driving Cars',
                    votes: 9837
            },
                {
                    optionName: 'Self Feeding Animals',
                    votes: 4
            }]
        }];

/*        var which = Math.random() * (defaults.length - 1 - 0) + 0;
*/        var which = Math.round(Math.random());

        this.data = defaults[which];
    }

}());