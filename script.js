// Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

// const messages = [
//     'Сообщение номер 1',
//     'Сообщение номер 2',
//     'Сообщение номер 3',
//     'Сообщение номер 4',
//     'Сообщение номер 5'
//   ];
  
//   messages.forEach((message, index) => {
//     setTimeout(() => {
//       console.log(message);
//     }, (index + 1) * 2000);
//   });
  

//   Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.

function updateClock() {
    const now = new Date();
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);
    const timeFull = hours + '<span class="blink">:</span>' + minutes + '<span class="blink">:</span>' + seconds;
    document.getElementById('clock').innerHTML = timeFull;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  


  ///////////погода
  const clock = document.getElementById('clock')
  const weather = document.getElementById('weather')
  const actualWeather = document.getElementById('actual-weather')

clock.addEventListener('mouseover', () => {
  weather.classList.remove('none'); 
});

clock.addEventListener('mouseout', () => {
  setTimeout(() => {
    weather.classList.add('none');
  }, 1500); 
});
    
  const city = "Minsk";
  const apiKey = "31e317c69034405b046f44f15c1886a1";
  
  function getWeatherByCity(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather[0].description;
        actualWeather.textContent = `${temperature}°C и ${weatherDescription}`;
      })
      .catch(error => {
        console.error("Ошибка при получении данных о погоде:", error);
      });
  }
  
  getWeatherByCity(city);