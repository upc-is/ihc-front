google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create DataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string','Nombres')
    data.addColumn('number', 'Cantidad')
    data.addRows([ ['Jose Luna', 5], ['Maria del Pilar', 24], ['Jeremias Lucas', 22] ] );

    var options = {'title':'How Much Pizza I Ate Last Night',
        'width':700,
        'height':600,
        'backgroundColor': '#999999',
        'pieHole': 0.4};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
    chart.draw(data, options);

}




