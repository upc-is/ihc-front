google.charts.load('current', {
    'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Downloads'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['Peru', 900]
    ]);

    var options = {
        backgroundColor: '#333741',
        datalessRegionColor: '#FFFFFF',
        colorAxis: {minValue: 0,  colors: ['#FFFFFF', '#0000FF']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}