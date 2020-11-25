var barChartData = {
    datasets: [{
        backgroundColor: window.chartColors.green,
        data: [
            17
        ]
    },
    {

        backgroundColor: window.chartColors.grey,
        data: [
            2
        ]
    },
    {
        backgroundColor: window.chartColors.ocean,
        data: [
            26
        ]
    }, {
        backgroundColor: window.chartColors.blue,
        data: [
            55
        ]
    }
    ]
};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                display: false,
                labels: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
};
