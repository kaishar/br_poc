let shipments = [2100, 34000, 144000, 189000, 350000, 554000, 650000],
  activations = [1000, 20000, 120000, 168000, 300000, 520000, 610000];

export const runRateGraph = {
  title : {
    text : 'Run Rate Graph'
  },

  xAxis : {
    min : 0,
    max : 13,
    maxPadding : 0,
    categories : ['0', '7', '21', '28', '35', '42', '49', '56', '63', '70', '77', '84', '91', '98'],
    plotLines : [{
      color : 'red',
      dashStyle : 'solid',
      value : 6,
      width : 2,
      label : {
        text : 'Today'
      }
    }]
  },

  yAxis : {
    max : 1000000,
    min : 0
  },

  series : [{
    name : 'Shipments',
    data : shipments,
    marker : {
      enabled : false
    },
    dashStyle : 'solid',
    color : 'red'
  }, 
  {
    name : 'Activations',
    data : activations,
    marker : {
      enabled : false
    },
    dashStyle : 'dash',
    color : 'red'
  }]
};