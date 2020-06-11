google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback( dibujarChart );

function dibujarChart() {

    var listaPie = google.visualization.arrayToDataTable([
        ['Nombres', 'Cantidades'],
        ['Carlos', 10], ['Maria', 5], ['Jose', 8], ['Rosa maria' , 25]
    ]);
    var dataPie = new google.visualization.DataTable();
    dataPie.addColumn('string', 'Nombres');
    dataPie.addColumn('number', 'Cantidad');
    dataPie.addRows([['Carlos', 10], ['Maria', 5], ['Jose', 8], ['Rosa maria' , 25]]);

    var opcionesPie = { title: 'Probando Pie', width: 400, height: 300 };
    var chartito = new google.visualization.PieChart(document.getElementById('ihc-chart'));

    chartito.draw(dataPie, opcionesPie);
}