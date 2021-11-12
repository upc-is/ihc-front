google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // El Array con los Datos a Visualizar
    var data = google.visualization.arrayToDataTable([
        ['Tarea', 'Horas por dia'],
        ['Trabajar',     14],
        ['Comer',      3],
        ['hablar',  1],
        ['Netflix', 1],
        ['Dormir',    5],
        ['Manejar',    1],
        ['Caminar',    1]
    ]);
    // Opciones de configuración
    var options = {
        title: 'Mis actividades diarias',
        is3D: true,
        backgroundColor: '#EEEEFF'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}