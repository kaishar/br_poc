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
        text : 'Today',
        rotation : 0,
        y : 20,
        style : {
          color : 'red'
        }
      }
    }]
  },

  yAxis : {
    max : 1000000,
    min : 0
  },

  series : [{
    name : 'Shipments',
    data : [],
    marker : {
      enabled : false
    },
    dashStyle : 'solid',
    color : 'red'
  }, 
  {
    name : 'Activations',
    data : [],
    marker : {
      enabled : false
    },
    dashStyle : 'dash',
    color : 'red'
  }]
};