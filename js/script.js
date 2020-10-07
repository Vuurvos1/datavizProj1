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
      'Geloofd buitenaards leven',
      'Geen buitenaards leven',
      'Geen idee',
    ],
    datasets: [
      {
        label: 'Aantal studenten',
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
            display: true,
            labelString: 'Aantal studenten',
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
        backgroundColor: yellow,
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
        backgroundColor: green,
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
    legend: {
      labels: {
        fontColor: fontColor,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Hoeveel wil je verdienen?',
            fontColor: fontColor,
          },
          ticks: {
            beginAtZero: true,
            fontColor: fontColor,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Cijfer aan de toekomst (1-10)',
            fontColor: fontColor,
          },
          ticks: {
            beginAtZero: true,
            fontColor: fontColor,
          },
        },
      ],
    },
  },
});
