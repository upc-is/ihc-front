export {drawCharts}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {
    drawPieChart()
    drawAxisTickColors()
}

function drawPieChart() {

    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Project Type');
    data.addColumn('number', 'Thousands of Requests');
    data.addRows([
        ['Automation', 3],
        ['Event Processing', 1],
        ['Gamification', 1],
        ['Geofencing', 1],
        ['Internet Of Things', 2]
    ]);

    // Set chart options
    const options = {
        'title': 'Technology Projects by Type',
        'width': 500,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data, options);

    // Redraw chart on window resize
    $(window).resize(function () {
        chart.draw(data, options);
    });

}

function drawAxisTickColors() {

    // Create the data table.
    const data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    // Set chart options
    const options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '40%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'City',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };

    // Instantiate and draw our chart, passing in some options.
    const chart = new google.visualization.BarChart(document.getElementById('axis_tick_div'));
    chart.draw(data, options);

    // Redraw chart on window resize
    $(window).resize(function () {
        chart.draw(data, options);
    });

}
