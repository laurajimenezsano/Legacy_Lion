d3.csv('static/data/state_merged.csv', function(err, rows){
    // function unpack(rows, key) {return rows.map(function(row) { return row[key]; });
    //                             }
    function filter_and_unpack(rows, key, year) {return rows.filter(row => row['year'] == year).map(row => row[key])
                                  }
  var frames = []
  var slider_steps = []
                                
  var n = 8;
  var num = 2011;
  for (var i = 0; i <= n; i++) {
  var z = filter_and_unpack(rows, 'pct_ch', num)
  var locations = filter_and_unpack(rows, 'postal', num)
  frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
  slider_steps.push ({
  label: num.toString(),
  method: "animate",
  args: [[num], {
  mode: "immediate",
  transition: {duration: 300},
  frame: {duration: 300}
  }
  ]
  })
  num = num + 1
  }
  
  var data = [{
  type: 'choropleth',
  locationmode: 'USA-states',
  locations: frames[0].data[0].locations,
  z: frames[0].data[0].z,
  text: frames[0].data[0].locations,
  zauto: true,
  // zmin: 1.083420898143626,
  // zmax: 2.264056148855058
  // autocolorscale: true
  }];
  
  var layout = {
  title: 'Population Growth per State in the USA, 2010 to 2019 (%)',
  geo:{
  scope: 'usa',
  countrycolor: 'rgb(255, 255, 255)',
  showland: true,
  landcolor: 'rgb(217, 217, 217)',
  showlakes: true,
  lakecolor: 'rgb(255, 255, 255)',
  subunitcolor: 'rgb(255, 255, 255)',
  lonaxis: {},
  lataxis: {}
  },
  updatemenus: [{
  x: 0.1,
  y: 0,
  yanchor: "top",
  xanchor: "right",
  showactive: false,
  direction: "left",
  type: "buttons",
  pad: {"t": 10, "r": 10},
  buttons: [{
  method: "animate",
  args: [null, {
  fromcurrent: true,
  transition: {
  duration: 200,
  },
  frame: {
  duration: 500
  }
  }],
  label: "Play"
  }, {
  method: "animate",
  args: [
  [null],
  {
  mode: "immediate",
  transition: {
    duration: 0
  },
  frame: {
    duration: 0
  }
  }
  ],
  label: "Pause"
  }]
  }],
  sliders: [{
  active: 0,
  steps: slider_steps,
  x: 0.1,
  len: 0.9,
  xanchor: "left",
  y: 0,
  yanchor: "top",
  pad: {t: 1, b: 1},
  currentvalue: {
  visible: true,
  prefix: "Year:",
  xanchor: "right",
  font: {
  size: 20,
  color: "#666"
  }
  },
  transition: {
  duration: 300,
  easing: "cubic-in-out"
  }
  }]
  };
  Plotly.newPlot('plot_two', data, layout).then(function() {
  Plotly.addFrames('plot_two', frames);
  });
  })