AOS.init();

// paralax code
const paralaxArr = document.querySelectorAll('.paralax');

window.addEventListener('scroll', () => {
  for (let i = 0; i < paralaxArr.length; i++) {
    const paralaxSpeed = paralaxArr[i].dataset.paralaxspeed;
    const posY = window.pageYOffset * paralaxSpeed;

    paralaxArr[i].style.transform = `translateY(${posY}px)`;
  }
});

const textCol = '#fff';
const textSize = '14';

const red = '#ff6358';
const yellow = '#ffd246';
const green = '#78d237';
const blue = '#28b4c8';
const darkBlue = '#2d73f5';
const purple = '#aa46be';

new Chart(document.querySelector('#pieChart1').getContext('2d'), {
  type: 'doughnut',
  data: {
    labels: [
      'Yes!',
      'No life out there',
      'Yes, bacteria',
      'No clue',
      'Yes, earth like',
      'Yes, Aliens like the movies',
    ],

    datasets: [
      {
        label: '# of Votes',
        data: [48, 13, 12, 9, 6, 4],
        backgroundColor: [red, yellow, green, blue, darkBlue, purple],
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: textCol,
      },
    },
  },
});

new Chart(document.querySelector('#barChart1').getContext('2d'), {
  type: 'bar',
  data: {
    labels: [
      'Yes alien life',
      'No alien life',
      'No clue',
    ],
    datasets: [
      {
        label: 'Amount of Students',
        backgroundColor: red,
        data: [70, 13, 9],
      },
      {
        label: 'Introvert',
        backgroundColor: darkBlue,
        data: [32, 6, 5],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: textCol,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: 'Amount of Students',
            fontSize: textSize,
            fontColor: textCol,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: false,
            // labelString: 'Cijfer hoe kijk je naar de toekomst',
            fontColor: textCol,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
    },
  },
});

new Chart(document.querySelector('#bubbleChart1').getContext('2d'), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['Tech'],
        backgroundColor: red,
        data: [
          {
            x: 3,
            y: 10000,
            r: 3,
          },
          {
            x: 4,
            y: 3500,
            r: 9,
          },
          {
            x: 6,
            y: 2750,
            r: 18,
          },
          {
            x: 6,
            y: 25000,
            r: 3,
          },
          {
            x: 7,
            y: 4000,
            r: 3,
          },

          {
            x: 8,
            y: 3000,
            r: 18,
          },
          {
            x: 8,
            y: 25000,
            r: 3,
          },

          {
            x: 9,
            y: 4500,
            r: 9,
          },

          {
            x: 10,
            y: 3000,
            r: 3,
          },
        ],
      },
      {
        label: ['Visual'],
        backgroundColor: yellow,
        data: [
          {
            x: 1,
            y: 100,
            r: 3,
          },
          {
            x: 1,
            y: 3000,
            r: 3,
          },

          {
            x: 3,
            y: 3500,
            r: 3,
          },

          {
            x: 6,
            y: 2200,
            r: 3,
          },
          {
            x: 6,
            y: 5000,
            r: 3,
          },

          {
            x: 7,
            y: 2750,
            r: 12,
          },
          {
            x: 7,
            y: 10000,
            r: 3,
          },

          {
            x: 8,
            y: 2750,
            r: 12,
          },
          {
            x: 8,
            y: 10000,
            r: 3,
          },

          {
            x: 9,
            y: 3500,
            r: 9,
          },

          {
            x: 10,
            y: 3250,
            r: 6,
          },
          {
            x: 10,
            y: 5000,
            r: 3,
          },
        ],
      },
      {
        label: ['Other'],
        backgroundColor: green,
        data: [
          {
            x: 3,
            y: 3000,
            r: 3,
          },

          {
            x: 4,
            y: 8000,
            r: 3,
          },
          {
            x: 5,
            y: 2000,
            r: 6,
          },

          {
            x: 6,
            y: 2500,
            r: 3,
          },
          {
            x: 6,
            y: 4000,
            r: 6,
          },
          {
            x: 6,
            y: 10000,
            r: 3,
          },

          {
            x: 7,
            y: 2500,
            r: 12,
          },
          {
            x: 7,
            y: 5000,
            r: 9,
          },
          {
            x: 7,
            y: 17000,
            r: 9,
          },

          {
            x: 8,
            y: 3750,
            r: 6,
          },
          {
            x: 8,
            y: 5500,
            r: 15,
          },
          {
            x: 8,
            y: 6000,
            r: 3,
          },

          {
            x: 9,
            y: 3000,
            r: 12,
          },
          {
            x: 9,
            y: 13500,
            r: 12,
          },

          {
            x: 10,
            y: 15000,
            r: 12,
          },
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: textCol,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'How much do you want to earn a month?',
            fontColor: textCol,
            fontSize: textSize,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Grade for the Futre (1-10)',
            fontColor: textCol,
            fontSize: textSize,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
    },
  },
});

new Chart(document.querySelector('#chart4').getContext('2d'), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['Introvert'],
        backgroundColor: red,
        data: [
          {
            x: 1,
            y: 4,
            r: 3,
          },
          {
            x: 4,
            y: 4,
            r: 3,
          },
          {
            x: 6,
            y: 4,
            r: 3,
          },
          {
            x: 7,
            y: 4,
            r: 6,
          },

          {
            x: 7,
            y: 5,
            r: 3,
          },

          {
            x: 3,
            y: 6,
            r: 3,
          },
          {
            x: 6,
            y: 6,
            r: 3,
          },

          {
            x: 7,
            y: 6,
            r: 9,
          },
          {
            x: 8,
            y: 6,
            r: 3,
          },
          {
            x: 9,
            y: 6,
            r: 3,
          },
          {
            x: 10,
            y: 6,
            r: 6,
          },
          // 7
          {
            x: 9,
            y: 7,
            r: 3,
          },
          {
            x: 9,
            y: 7,
            r: 9,
          },
          {
            x: 9,
            y: 7,
            r: 6,
          },
          // 8
          {
            x: 4,
            y: 8,
            r: 3,
          },
          {
            x: 7,
            y: 8,
            r: 6,
          },
          {
            x: 8,
            y: 8,
            r: 9,
          },
          // 9
          {
            x: 8,
            y: 9,
            r: 6,
          },
        ],
      },
      {
        label: ['Extrovert'],
        backgroundColor: yellow,
        data: [
          {
            x: 10,
            y: 5,
            r: 3,
          },
          // 6
          {
            x: 7,
            y: 6,
            r: 3,
          },
          {
            x: 10,
            y: 6,
            r: 3,
          },
          // 7
          {
            x: 7,
            y: 7,
            r: 12,
          },
          {
            x: 9,
            y: 7,
            r: 6,
          },
          // 8
          {
            x: 7,
            y: 8,
            r: 6,
          },
          {
            x: 7,
            y: 8,
            r: 12,
          },
          {
            x: 8,
            y: 8,
            r: 15,
          },
          {
            x: 8,
            y: 8,
            r: 3,
          },
          // 9
          {
            x: 8,
            y: 9,
            r: 3,
          },
          // 10
          {
            x: 10,
            y: 10,
            r: 3,
          },
          {
            x: 10,
            y: 10,
            r: 3,
          },
        ],
      },
      {
        label: ['Other'],
        backgroundColor: green,
        data: [
          {
            x: 3,
            y: 5,
            r: 3,
          },
          {
            x: 4,
            y: 5,
            r: 3,
          },
          //6
          {
            x: 1,
            y: 6,
            r: 6,
          },
          {
            x: 3,
            y: 6,
            r: 3,
          },
          {
            x: 4,
            y: 6,
            r: 3,
          },
          {
            x: 5,
            y: 6,
            r: 3,
          },
          {
            x: 6,
            y: 6,
            r: 12,
          },
          {
            x: 8,
            y: 6,
            r: 3,
          },
          //7
          {
            x: 4,
            y: 7,
            r: 3,
          },
          {
            x: 6,
            y: 7,
            r: 9,
          },
          {
            x: 7,
            y: 7,
            r: 9,
          },
          {
            x: 8,
            y: 7,
            r: 3,
          },
          {
            x: 9,
            y: 7,
            r: 3,
          },
          {
            x: 10,
            y: 7,
            r: 3,
          },
          // 8
          {
            x: 5,
            y: 8,
            r: 3,
          },
          {
            x: 7,
            y: 8,
            r: 6,
          },
          {
            x: 8,
            y: 8,
            r: 12,
          },
          {
            x: 9,
            y: 8,
            r: 6,
          },
          {
            x: 10,
            y: 8,
            r: 3,
          },
          // 9
          {
            x: 6,
            y: 9,
            r: 6,
          },
          {
            x: 9,
            y: 9,
            r: 3,
          },
          {
            x: 10,
            y: 9,
            r: 3,
          },
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: textCol,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'What grade do the students give their health',
            fontColor: textCol,
            fontSize: textSize,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'What grade do you give the future? (1-10)',
            fontColor: textCol,
            fontSize: textSize,
          },
          ticks: {
            beginAtZero: true,
            fontColor: textCol,
          },
        },
      ],
    },
  },
});

const dataX = [
  {
    type: 'sunburst',
    ids: [
      'Yes alien life',
      'No alien life',
      'No clue',

      'Yes alien life - Electronic',
      'Yes alien life - None',
      'Yes alien life - Hip Hop',
      'Yes alien life - Metal',
      'Yes alien life - Other',
      'Yes alien life - Pop',
      'Yes alien life - R&B',
      'Yes alien life - Rap',
      'Yes alien life - Rock',

      'No Alien life - None',
      'No Alien life - Hip hop',
      'No Alien life - Metal',
      'No Alien life - Other',
      'No Alien life - Pop',
      'No Alien life - Rap',
      'No Alien life - Rock',

      'No clue - None' ,
      'No clue - Hip Hop' ,
      'No clue - Metal' ,
      'No clue - Other' ,
      'No clue - Pop' ,
      'No clue - R&B' ,
    ],
    labels: [
      'Yes alien life',
      'No alien life',
      'No clue',

      'Electronic',
      'None',
      'Hip Hop',
      'Metal',
      'Other',
      'Pop',
      'R&B',
      'Rap',
      'Rock',

      'None',
      'Hip Hop',
      'Metal',
      'Other',
      'Pop',
      'Rap',
      'Rock',

      'None',
      'Hip Hop',
      'Metal',
      'Other',
      'Rock',
      'Pop',
      'R&B',
    ],
    parents: [
      '',
      '',
      '',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',
      'Yes alien life',

      'No alien life',
      'No alien life',
      'No alien life',
      'No alien life',
      'No alien life',
      'No alien life',
      'No alien life',

      'No clue',
      'No clue',
      'No clue',
      'No clue',
      'No clue',
      'No clue',
    ],
    values:  [
              0, 0, 0, 
              22, 5, 11, 10 ,6, 8, 6, 2, 6,
              1, 2, 1, 3, 4, 1, 1, 2,
              1, 1, 1, 2, 2, 1, 1
            ],

    outsidetextfont: { size: 20, color: '#377eb8' },
    // leaf: {opacity: 0.4},
    marker: { line: { width: 2 } },
  },
];

// var data = [{
//   type: "sunburst",
//   labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
//   parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
//   values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
//   outsidetextfont: {size: 20, color: "#377eb8"},
//   leaf: {opacity: 0.4},
//   marker: {line: {width: 2}},
// }];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t: 0},
//   width: 500,
//   height: 500
// };


const layout = {
  margin: { l: 0, r: 0, b: 0, t: 0 },
  plot_bgcolor: 'black',
  paper_bgcolor: '#111628',
  sunburstcolorway: ['#636efa', '#ef553b', '#00cc96'],
};

Plotly.newPlot('sunburst1', dataX, layout);
