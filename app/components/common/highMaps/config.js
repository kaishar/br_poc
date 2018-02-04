const ukMap = require('../../../data/gb-all.geo');
const europeMap = require('../../../data/europe.geo');

import _ from 'lodash';

// const test = () => {
//   let data = _.uniqBy(ukMap.features, function(o) {
//     return o.properties.region;
//   });

//   console.log(JSON.stringify(data, 0, 2));
// };

// test();


export const unitedKingdom = {
  chart : {
    spacingBottom : 20
  },
  title : {
    text : ''
  },
  // colors : ['#ff4d4d', '#ffff80', '#994d00'],
  mapNavigation : {
    enabled : true
  },

  legend : {
    enabled : true,
    title : {
      text : 'Regional Map View',
      style : {
        color : 'black'
      }
    },
    align : 'right',
    backgroundColor : 'white',
    borderWidth : 1,
    floating : false,
    layout : 'vertical',
    verticalAlign : 'middle',
    itemCheckboxStyle : {
      height : '20px',
      position : 'absolute',
      width : '20px'
    }
  },

  plotOptions : {
    map : {
      allAreas : false,
      joinBy : ['hc-a2', 'code'],
      dataLabels : {
        enabled : true,
        color : 'black',
        style : {
          fontWeight : 'bold'
        }
      },
      mapData : ukMap,
      tooltip : {
        headerFormat : '',
        pointFormat : '{point.name}: <b>{series.name}</b>'
      }
    }
  },
  series : [
    {
      name : 'ASR',
      data : ['EN'].map((code) => {
        return { code : code };
      })
    },
    {
      name : 'Avg Channel Log',
      data : ['SC'].map((code) => {
        return { code : code };
      })
    },
    {
      name : 'Avg up-sell',
      data : ['NI', 'WA'].map((code) => {
        return { code : code };
      })
    }
  ]
};

export const europe = {
  chart : {
    spacingBottom : 20
  },
  title : {
    text : 'Europe time zones'
  },

  legend : {
    enabled : true
  },

  plotOptions : {
    map : {
      allAreas : false,
      joinBy : ['iso-a2', 'code'],
      dataLabels : {
        enabled : true,
        color : 'white',
        style : {
          fontWeight : 'bold'
        }
      },
      mapData : europeMap,
      tooltip : {
        headerFormat : '',
        pointFormat : '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series : [{
    name : 'UTC',
    data : ['IE', 'IS', 'GB', 'PT'].map((code) => {
      return { code : code };
    })
  }, {
    name : 'UTC + 1',
    data : ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map((code) => {
      return { code : code };
    })
  }]
};