'use strict';
// eslint-disable-next-line no-unused-vars
const { Sequelize } = require(`sequelize`);

module.exports = function(sequelize, DataTypes) {
  const MovieSearch = sequelize.define(`MovieSearch`, {
    genre: {
      type: DataTypes.STRING
    }
  });

  return MovieSearch;
};
// Generate Movie Chart (demo data) //

var chart = document.getElementById("myChart");
var myChart = new Chart(chart, {
  type: 'doughnut',
  data: {
    labels: ['Action','Adventure', 'Animation', 'Comedy', 'Crime','Documentary','Drama','Family','Fantasy','History','Horror','Music','Mystery','Romance','Science Fiction','TV Movie','Thriller','War', 'Western'],
    datasets: [{
      label: 'Genre by Popularity',
      data: [12, 19, 0, 0,0,0,10,12,15,2,11,13,4,7,8,15,13,9,10],
      backgroundColor: [
        'rgba(33, 102, 206, 0.58)',
        'rgba(12, 108, 242, 0.79)',
        'rgb(190,217,244)',
        'rgba(51, 191, 204, 0.79)',
        'rgb(3, 4, 94)',
        'rgb(2, 62, 138)',
        'rgb(0, 119, 182)',
        'rgb(0, 150, 199)',
        'rgb(0, 180, 216)',
        'rgb(72, 202, 228)',
        'rgb(144, 224, 239)',
        'rgb(173, 232, 244)',
        'rgb(202, 240, 248)',
        'rgb(16, 103, 118)',
        'rgb(15, 131, 141)',
        'rgb(14, 159, 164)',
        'rgb(7, 186, 213)',
        'rgb(1, 186, 239)',
        'rgb(2, 156, 204)',
        'rgb(2, 125, 169)'
        
      ],
     
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});