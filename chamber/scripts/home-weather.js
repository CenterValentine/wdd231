// https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=c227cf622f8c509b0a729e4764d1295f
// https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=c227cf622f8c509b0a729e4764d1295f
// id list temp, weatherConditions, tempHigh, tempLow, humidity, sunrise, sunset


// 32.791473403431624, -80.0416506709279

const longitude = -80.0416506709279;
const latitude = 32.791473403431624;

async function getWeatherData() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=c227cf622f8c509b0a729e4764d1295f`);
    const data = await response.json();
    // console.log(data);
    return data;
}

async function getForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=24&units=imperial&appid=c227cf622f8c509b0a729e4764d1295f`);
    const data = await response.json();
    // console.log(data);
    return data;
}

async function processForecast(forecastData) {
    const forecast = forecastData.list;
    // console.log(forecast);
    let day1Temps = [];
    let day2Temps = [];
    let day3Temps = [];



    let forecastDate1Base = new Date(forecast[0].dt_txt);
    forecastDate1Base.setHours(23, 59, 59, 999);

    let forecastDate2Base = new Date(forecastDate1Base);
    forecastDate2Base.setDate(forecastDate2Base.getDate() + 1);

    let forecastDate3Base = new Date(forecastDate2Base);
    forecastDate3Base.setDate(forecastDate3Base.getDate() + 1);


    forecast.forEach((forecast) => {

        let forecastDate = new Date(forecast.dt_txt);


        if (forecastDate <= forecastDate1Base) {
            // console.log('Day 1');
            day1Temps.push(forecast.main.temp);
        }
        else if (forecastDate <= forecastDate2Base) {
            // console.log('Day 2');
            day2Temps.push(forecast.main.temp);
        }
        else if (forecastDate <= forecastDate3Base) {
            // console.log('Day 3');
            day3Temps.push(forecast.main.temp);
        }
        else {
            // console.log('Day 4');
        }
        // console.log('sortFactor: ',sortFactor);
        // console.log('dateSortFactor: ',forecast.dt_txt);
    });

    async function averageTemps(dayTemps) {
        value = await Math.round(dayTemps.reduce((a, b) => a + b, 0) / dayTemps.length, 2);
        return value
    }

    const day1Avg = await averageTemps(day1Temps);
    day1DoW = 'Today';
    console.log('Day 1 Avg: ', day1Avg);


    const day2Avg = await averageTemps(day2Temps);
    console.log('Day 2 Avg: ', day2Avg);
    day2DoW = 'Tomorrow';


    const day3Avg = await averageTemps(day3Temps);
    console.log('Day 3 Avg: ', day3Avg);
    day3DoW = new Date(forecastDate3Base).toLocaleDateString('en-US', { weekday: 'long' });



    return await [[day1Avg, day1DoW], [day2Avg, day2DoW], [day3Avg, day3DoW]];

};


async function processWeather() {
    const weatherData = await getWeatherData();
    const forecastData = await getForecast();
    console.log('Weather: ', weatherData);
    console.log('Forecast', forecastData);

    let newForecastData = await processForecast(forecastData);

    console.log('New Forecast Data: ', newForecastData);
    displayWeather(weatherData, newForecastData);
    // process weather data

};



async function displayWeather(weatherData, newForecastData) {

    temp = weatherData.main.temp;
    weatherConditions = weatherData.weather[0].description.split(' ').map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1);

    }).join(' ');

    console.log(weatherConditions);

    tempHigh = weatherData.main.temp_max;
    tempLow = weatherData.main.temp_min;
    humidity = weatherData.main.humidity;
    sunrise = weatherData.sys.sunrise;
    sunset = weatherData.sys.sunset;
    icon = weatherData.weather[0].icon;

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();


    console.log(sunsetTime);

    document.getElementById('temp').textContent = `Temperature: ${temp}°F`;
    document.getElementById('weatherConditions').textContent = `Conditions: ${weatherConditions}`;
    document.getElementById('tempHigh').textContent = `High: ${tempHigh}°F`;
    document.getElementById('tempLow').textContent = `Low: ${tempLow}°F`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('sunrise').textContent = `Sunrise: ${sunriseTime}`;
    document.getElementById('sunset').textContent = `Sunset: ${sunsetTime}`;
    console.log(icon);
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById('day1').innerHTML = `${newForecastData[0][1]}: <b>${newForecastData[0][0]}°F</b>`;
    document.getElementById('day2').innerHTML = `${newForecastData[1][1]}: <b>${newForecastData[1][0]}°F</b>`;
    document.getElementById('day3').innerHTML = `${newForecastData[2][1]}: <b>${newForecastData[2][0]}°F</b>`;


};




processWeather();