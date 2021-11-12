google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // 1. Creación de Array donde estan los datos a visualizar
    var data = google.visualization.arrayToDataTable([
        ['tareas', 'Hours per Day'],
        ['Trabajo',     14],
        ['Comer',      2],
        ['Commute',  1],
        ['Netflix', 2],
        ['Sleep',    5]
    ]);

    // 2. Opciones de visualización
    var options = {
        title: 'My Years Activities',
        pieHole: 0.6
    };
    // 3. En donde quiero que se visualice
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}