// Función de Callback, que es invocado por el Google charts para dibujar
function drawChart() {
    drawTrendlines();
    drawPieChart();
    drawWordTrees();
}
function drawPieChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Nitrogen', 0.51],
        ['Oxygen', 0.21],
        ['Other', 0.08],
        ['Oro', 0.2]
    ]);
    var options = {'title':'Chemical Elements',
        'width':400,
        'height':300,
        'is3D': true,
        'backgroundColor': '#DDDDDD'};
    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, options);
}
function drawTrendlines() {
    var data = google.visualization.arrayToDataTable([
        ['Diameter', 'Age'],
        [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]]);

    var options = {
        title: 'Age of sugar maples vs. trunk diameter, in inches',
        hAxis: {title: 'Diameter'},
        vAxis: {title: 'Age'},
        legend: 'none',
        trendlines: { 0: {} }    // Draw a trendline for data series 0.
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
function drawWordTrees() {
    var data = google.visualization.arrayToDataTable(
        [ ['Phrases'],
            ['cats are better than dogs'],
            ['cats eat kibble'],
            ['cats are better than hamsters'],
            ['cats are awesome'],
            ['cats are people too'],
            ['cats eat mice'],
            ['cats meowing'],
            ['cats in the cradle'],
            ['cats eat mice'],
            ['cats in the cradle lyrics'],
            ['cats eat kibble'],
            ['cats for adoption'],
            ['cats are family'],
            ['cats eat mice'],
            ['cats are better than kittens'],
            ['cats are evil'],
            ['cats are weird'],
            ['cats eat mice'],
        ]
    );

    var options = {
        wordtree: {
            format: 'implicit',
            word: 'cats'
        }
    };

    var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
    chart.draw(data, options);
}
function drawMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Population'],
        ['China', 'China: 1,363,800,000'],
        ['India', 'India: 1,242,620,000'],
        ['US', 'US: 317,842,000'],
        ['Indonesia', 'Indonesia: 247,424,598'],
        ['Brazil', 'Brazil: 201,032,714'],
        ['Pakistan', 'Pakistan: 186,134,000'],
        ['Nigeria', 'Nigeria: 173,615,000'],
        ['Bangladesh', 'Bangladesh: 152,518,015'],
        ['Russia', 'Russia: 146,019,512'],
        ['Japan', 'Japan: 127,120,000']
    ]);

    var options = {
        showTooltip: true,
        showInfoWindow: true
    };

    var map = new google.visualization.Map(document.getElementById('chart_map'));

    map.draw(data, options);
}