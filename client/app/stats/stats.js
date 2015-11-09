(function() {
    'use strict';

    /* global angular, google */
    angular
        .module('voteApp')
        .controller('statsCtrl', statsCtrl);

    statsCtrl.$inject = ['api', '$routeParams'];

    function statsCtrl(api, $routeParams) {
        var vm = this;

        vm.drawChart = function() {
            var data = new google.visualization.DataTable();

            data.addColumn('string', 'Option');
            data.addColumn('number', 'Votes');
            
            for (var i = 0; i < vm.data.options.length; i++) {
            data.addRows([[vm.data.options[i].description, vm.data.options[i].votes]]);
            }
            var options = {
                title: 'Votes for poll "' + vm.data.title + '"',
                legend: 'none',
                bar: {
                    groupWidth: '95%'
                },
                vAxis: {
                    gridlines: {
                        count: 4
                    }
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

        api.retrievePoll($routeParams.pollId)
            .then(function(pollRecord) {
                vm.data = pollRecord.poll;
                vm.drawChart();
            }),
            function(reason) {
                console.log(reason);
            };
    }
}());