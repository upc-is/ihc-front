google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback( dibujarChart );

function dibujarChart() {

    var listaPie = google.visualization.arrayToDataTable([
        ['Nombres', 'Cantidades'],
        ['Carlos', 10], ['Maria', 5], ['Jose', 8], ['Rosa maria' , 25]
    ]);

    var opcionesPie = { title: 'Probando Pie', width: 400, height: 300 };
    var chart = new google.visualization.PieChart(document.getElementById('ihc-chart'));

    chart.draw(listaPie, opcionesPie);
}