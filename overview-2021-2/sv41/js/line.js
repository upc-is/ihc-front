google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'ihc'],
        ['2004',  1000,      400, 600],
        ['2005',  1170,      460, 800],
        ['2006',  660,       1120, 500],
        ['2007',  1030,      540, 1300]
    ]);
    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}