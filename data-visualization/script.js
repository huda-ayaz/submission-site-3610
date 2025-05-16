document.addEventListener("DOMContentLoaded", () => {
  const genres = ["Pop", "Rock", "Hip-Hop", "Jazz", "Classical", "Country", "Electronic"];
  const studentVotes = [15, 10, 8, 5, 3, 7, 4];

  const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: genres,
      datasets: [{
        label: 'Favorite Genres',
        data: studentVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(199, 199, 199, 0.7)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Favorite Music Genres (Doughnut Chart)'
        }
      }
    }
  });

  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: genres,
      datasets: [{
        label: 'Number of Votes',
        data: studentVotes,
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: 'Favorite Music Genres (Horizontal Bar Chart)'
        }
      },
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });
});
