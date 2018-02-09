export const donutGraph = {
  chart : {
    type : 'pie'
  },
  title : {
    text : 'Total SoH'
  },
  plotOptions : {
    pie : {
      shadow : false
    }
  },
  tooltip : {
    formatter : function() {
      return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
    }
  },
  series : [{
    type : 'pie',
    innerSize : '70%',
    data : [{
      name : 'Warehouse SoH',
      y : 45,
      color : '#e4c54c'
    },
    {
      name : 'In Transit',
      y : 5,
      color : '#ff5b5b'
    },
    {
      name : 'Channel SoH',
      y : 55,
      color : '#e52d2d' 
    }]
  }]    
};