(function() {
    'use strict';

    /* global angular, google */
    angular
        .module('voteApp')
        .controller('StatsCtrl', StatsCtrl);

    StatsCtrl.$inject = ['api', '$routeParams', '$scope'];

    function StatsCtrl(api, $routeParams, $scope) {
        var vm = this;

        vm.drawChart = function() {
            var data = new google.visualization.DataTable();

            data.addColumn('string', 'Option');
            data.addColumn('number', 'Votes');
            
            for (var i = 0; i < vm.data.options.length; i++) {
            data.addRows([[vm.data.options[i].description, vm.data.options[i].votes]]);
            }
            var options = {
                legend: 'none',
                colors: [ '#9A3900'], 
                bar: {
                    groupWidth: '95%'
                },
                vAxis: {
                    gridlines: {
                        count: 4
                    },
                    format:'#0'
                },
                hAxis: {
                    showTextEvery: 1
                },
                animation: {
                    duration: 1500,
                    easing: 'out',
                    startup: true
                }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));
            chart.draw(data, options);
        };
        
        vm.showVm = function(){
            console.log(vm);
        };

        api.retrievePoll($routeParams.pollId)
            .then(function(data) {
                vm.data = data.poll;
/*console.log('stats.js, succes. vm: ', vm, vm.data.title);                */
                $scope.$digest(); // Since refactoring retrievePoll as a promise, this is necessary in order to make Angular use the vm data when it's ready
                vm.drawChart();
            }),
            function(reason) {
                console.log(reason);
            };
    }
}());