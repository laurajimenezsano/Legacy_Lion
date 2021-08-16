// collect data jason to read 
d3.json('static/data/grouped_migration.json', function(err, data){

    
    years = []
    years2 = []
    total_migration = []
    change_perc = []
  
    for (i in data.year) {
        years.push(data.year[i])
        total_migration.push(data.total[i])
    };
  
    for (let i = 1; i < years.length; i++) {
        years2.push(data.year[i])
        change_perc.push(data.change[i]);
    };
  
    // console.log(change_perc);
    // console.log(total_migration);
    
    
    var trace1 = {
        x: years,
        y: total_migration,
        name: 'people relocating',
        type: "bar"
        };
  
    var trace2 = {
        x: years2,
        y: change_perc,
        name: '% change',
        yaxis: 'y2',
        type: 'line'
        };
  
    // Create the data array for the plot
    var data = [trace1,trace2];
  
    // Define the plot layout
    var layout = {
        title: "Migration Between States in the USA",
        xaxis: { title: "Year", range:[2009,2020] },
        yaxis: { title: "Total No. of People Relocating",
                range: [6000000,8000000]
            },
        yaxis2: {
            title: '% Change',
            range: [0,12],
            overlaying: 'y',
            side: 'right'
          },
        showlegend: true,
      legend: {"orientation": "h",
                x: 0,
                y: 1}
        };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot_one", data, layout);
  
  });