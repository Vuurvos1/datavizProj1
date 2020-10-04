const ctx1 = document.getElementById('Chart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
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

const ctx2 = document.getElementById('Chart2').getContext('2d');
const myBarChart = new Chart(ctx2, {
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
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});
