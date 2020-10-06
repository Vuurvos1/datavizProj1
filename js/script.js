// paralax code
const paralaxArr = document.querySelectorAll('.paralax');

window.addEventListener('scroll', () => {
  for (let i = 0; i < paralaxArr.length; i++) {
    const paralaxSpeed = paralaxArr[i].dataset.paralaxspeed;
    const posY = window.pageYOffset * paralaxSpeed;

    paralaxArr[i].style.transform = `translateY(${posY}px)`;
  }
});

const textCol = '#';

new Chart(document.querySelector('#pieChart1').getContext('2d'), {
  type: 'doughnut',
  data: {
    labels: [
      'Ja',
      'Nee',
      'Ja, bacteriën',
      'Geen idee',
      'Ja, earth like',
      'Ja, like the movies',
    ],

    datasets: [
      {
        label: '# of Votes',
        data: [48, 13, 12, 9, 6, 4],
        backgroundColor: [
          '#ff6358',
          '#ffd246',
          '#78d237',
          '#28b4c8',
          '#2d73f5',
          '#aa46be',
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'rgb(255, 99, 132)',
      },
    },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
  },
});

new Chart(document.querySelector('#barChart1').getContext('2d'), {
  type: 'bar',
  data: {
    labels: [
      'Geloofd buitenaards leven',
      'Geen buitenaards leven',
      'Geen idee',
    ],
    datasets: [
      {
        label: 'Aantal studenten',
        backgroundColor: '#ff6358',
        data: [70, 13, 9],
      },
      {
        label: 'Introvert',
        backgroundColor: '#2d73f5',
        data: [32, 6, 5],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Aantal studenten',
            fontColor: '#FFF',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: false,
            // labelString: 'Cijfer hoe kijk je naar de toekomst',
            fontColor: '#FFF',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
  // options: {
  //   barValueSpacing: 20,
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           min: 0,
  //         },
  //       },
  //     ],
  //   },
  // },
});

new Chart(document.querySelector('#bubbleChart1').getContext('2d'), {
  type: 'bubble',
  data: {
    // labels: 'Africa',

    // '#ff6358',
    // '#ffd246',
    // '#78d237',
    // '#28b4c8',
    // '#2d73f5',
    // '#aa46be',

    datasets: [
      {
        label: ['Tech'],
        backgroundColor: '#ff6358',
        data: [
          {
            x: 3,
            y: 10000,
            r: 1,
          },
          {
            x: 4,
            y: 3500,
            r: 3,
          },
          {
            x: 6,
            y: 2750,
            r: 6,
          },
          {
            x: 6,
            y: 25000,
            r: 1,
          },
          {
            x: 7,
            y: 4000,
            r: 1,
          },

          {
            x: 8,
            y: 3000,
            r: 6,
          },
          {
            x: 8,
            y: 25000,
            r: 1,
          },

          {
            x: 9,
            y: 4500,
            r: 3,
          },

          {
            x: 10,
            y: 3000,
            r: 1,
          },
        ],
      },
      {
        label: ['Visual'],
        backgroundColor: '#ffd246',
        data: [
          {
            x: 1,
            y: 100,
            r: 1,
          },
          {
            x: 1,
            y: 3000,
            r: 1,
          },

          {
            x: 3,
            y: 3500,
            r: 1,
          },

          {
            x: 6,
            y: 2200,
            r: 1,
          },
          {
            x: 6,
            y: 5000,
            r: 1,
          },

          {
            x: 7,
            y: 2750,
            r: 4,
          },
          {
            x: 7,
            y: 10000,
            r: 1,
          },

          {
            x: 8,
            y: 2750,
            r: 4,
          },
          {
            x: 8,
            y: 10000,
            r: 1,
          },

          {
            x: 9,
            y: 3500,
            r: 3,
          },

          {
            x: 10,
            y: 3250,
            r: 2,
          },
          {
            x: 10,
            y: 5000,
            r: 1,
          },
        ],
      },
      {
        label: ['Anders'],
        backgroundColor: '#78d237',
        data: [
          {
            x: 3,
            y: 3000,
            r: 1,
          },

          {
            x: 4,
            y: 8000,
            r: 1,
          },
          {
            x: 5,
            y: 2000,
            r: 2,
          },

          {
            x: 6,
            y: 2500,
            r: 1,
          },
          {
            x: 6,
            y: 4000,
            r: 2,
          },
          {
            x: 6,
            y: 10000,
            r: 1,
          },

          {
            x: 7,
            y: 2500,
            r: 4,
          },
          {
            x: 7,
            y: 5000,
            r: 3,
          },
          {
            x: 7,
            y: 17000,
            r: 3,
          },

          {
            x: 8,
            y: 3750,
            r: 2,
          },
          {
            x: 8,
            y: 5500,
            r: 5,
          },
          {
            x: 8,
            y: 6000,
            r: 1,
          },

          {
            x: 9,
            y: 3000,
            r: 4,
          },
          {
            x: 9,
            y: 13500,
            r: 4,
          },

          {
            x: 10,
            y: 15000,
            r: 4,
          },
        ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Happiness',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'GDP (PPP)',
          },
        },
      ],
    },
  },
});

/*
new Chart(document.getElementById('bubbleChart1'), {
  type: 'bubble',
  data: {
    labels: 'Africa',
    datasets: [
      {
        label: ['China'],
        backgroundColor: 'rgba(255,221,50,0.2)',
        borderColor: 'rgba(255,221,50,1)',
        data: [
          {
            x: 21269017,
            y: 5.245,
            r: 15,
          },
        ],
      },
      {
        label: ['Denmark'],
        backgroundColor: 'rgba(60,186,159,0.2)',
        borderColor: 'rgba(60,186,159,1)',
        data: [
          {
            x: 258702,
            y: 7.526,
            r: 10,
          },
        ],
      },
      {
        label: ['Germany'],
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderColor: '#000',
        data: [
          {
            x: 3979083,
            y: 6.994,
            r: 15,
          },
        ],
      },
      {
        label: ['Japan'],
        backgroundColor: 'rgba(193,46,12,0.2)',
        borderColor: 'rgba(193,46,12,1)',
        data: [
          {
            x: 4931877,
            y: 5.921,
            r: 15,
          },
        ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Happiness',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'GDP (PPP)',
          },
        },
      ],
    },
  },
});
*/
