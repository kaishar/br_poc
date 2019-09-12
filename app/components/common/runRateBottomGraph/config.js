export const runRateBottomGraph = {
  chart : {
    type : 'line',
    zoomType : 'x'
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
        y : 10,
        style : {
          color : 'red'
        }
      }
    }]
  },

  yAxis : {
    max : 10,
    min : 0
  },

  series : [{
    name : 'Avg Up-sell',
    data : [],
    marker : {
      enabled : false
    },
    dashStyle : 'dash',
    color : 'orange'
  }, 
  {
    name : 'Avg Channel Log',
    data : [],
    marker : {
      enabled : false
    },
    dashStyle : 'solid',
    color : 'orange'
  },
  {
    name : 'CLV weighting',
    data : [],
    marker : {
      enabled : false
    },
    dashStyle : 'solid',
    color : 'black'
  }]
};