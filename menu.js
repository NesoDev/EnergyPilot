// Obtener datos de la API
fetch('https://api.mockaroo.com/api/947e1bf0?count=7&key=71d1e230', {
  headers: {
    'X-API-Key': '71d1e230'
  }
})
.then(response => response.json())
.then(data => {
  // Calcular la suma de los valores del primer gráfico
  const total = data[0].kwh_1 + data[0].kwh_2 + data[0].kwh_3 + data[0].kwh_4 + data[0].kwh_5 + data[0].kwh_6 + data[0].kwh_7;

  // Mostrar la suma en el primer y segundo gráfico
  document.getElementById('pricetotal').textContent = total.toFixed(2) + ' kWh';
  document.getElementById('pricetotal2').textContent = total.toFixed(2);

  // Crear el primer gráfico
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [{
        data: [data[0].kwh_1, data[0].kwh_2, data[0].kwh_3, data[0].kwh_4, data[0].kwh_5, data[0].kwh_6, data[0].kwh_7],
        borderWidth: 4.9,
        fill: false,
        borderColor: 'rgba(80, 10, 163, 0.8)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value, index, ticks) {
              return value + ' kWh';
            },
            stepSize: 2 ,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            font: {
              size: 12,
              family: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 18,
              weight: 600
            }
          }
        }
      },
      backgroundColor: ['rgb(63, 81, 181)'],
      elements: {
        line: {
          tension: 3,
          cubicInterpolationMode: 'monotone',
        }
      }
    }
  });

  

  const suma1 = total*0.3979;
  const suma2 = total*0.1059;
  const suma3 = total*0.0747;
  const suma4 = total*0.1118;
  const suma5 = total*0.2185;
  const suma6 = total*0.0908;
  
  document.getElementById('kwh1').textContent = suma1.toFixed(2) + ' kWh';
  document.getElementById('kwh2').textContent = suma2.toFixed(2) + ' kWh';
  document.getElementById('kwh3').textContent = suma3.toFixed(2) + ' kWh';
  document.getElementById('kwh4').textContent = suma4.toFixed(2) + ' kWh';
  document.getElementById('kwh5').textContent = suma5.toFixed(2) + ' kWh';
  document.getElementById('kwh6').textContent = suma6.toFixed(2) + ' kWh';
  
  const ctx2 = document.getElementById('myChart2');
  
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Aire acondicionado','Refrigeradora','Lavadora','Televisores','Cámaras de seguridad','Luces LED'],
      datasets: [{
        data: [suma1, suma2, suma3, suma4, suma5, suma6],
        borderRadius: 5,
        cutout: 90,
        backgroundColor: [
          'rgb(255, 55, 55)', // Rojo vivo intenso
          'rgb(255, 204, 0)', // Amarillo anaranjado vivo
          'rgb(0, 204, 102)', // Verde intenso
          'rgb(51, 102, 255)', // Azul intenso
          'rgb(255, 51, 204)', // Rosa vivo intenso
          'rgb(153, 51, 255)' // Púrpura vivo intenso
        ]      
        ,      
        hoverOffset: 4,
        spacing: 8,
        borderColor:[
          'rgb(23, 23, 23)'
        ],
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
});
  
function irAHome() {
  window.location.href = "login.html";
}