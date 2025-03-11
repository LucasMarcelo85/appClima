import React from 'react'
import './WeatherInformations5Day.css'

const weatherDescriptions = {
  "clear sky": "céu limpo e ensolarado",
  "few clouds": "algumas nuvens no céu",
  "scattered clouds": "nuvens espalhadas pelo céu",
  "broken clouds": "nuvens parcialmente cobertas",
  "shower rain": "chuva leve e passageira",
  "rain": "chuva constante",
  "thunderstorm": "tempestade com trovões",
  "snow": "neve caindo",
  "mist": "névoa densa",
  "overcast clouds": "céu completamente nublado",
  "light rain": "chuva leve",
  "moderate rain": "chuva moderada",
  "heavy intensity rain": "chuva intensa",
  "light snow": "neve leve",
  "heavy snow": "neve intensa",
  "light intensity drizzle": "garoa leve",
  "drizzle": "garoa",
  "heavy intensity drizzle": "garoa intensa",
  "thunderstorm with light rain": "tempestade com chuva leve",
  "thunderstorm with rain": "tempestade com chuva",
  "thunderstorm with heavy rain": "tempestade com chuva intensa",
  "thunderstorm with light drizzle": "tempestade com garoa leve",
  "thunderstorm with drizzle": "tempestade com garoa",
  "thunderstorm with heavy drizzle": "tempestade com garoa intensa"
}

function WeatherInformations5Day({ weather5Day }) {
  let dailyForecast = {}

  for (let forecast of weather5Day.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {
      weekday: 'long'
    })
    return newDate
  }

  return (
    <div className='weather-container'>
      <div className='weather-list'>
        <p>Previsão dos próximos 5 dias</p>
        {next5DaysForecast.map(forecast => (
          <div key={forecast.dt} className='weather-item'>
            <p>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" />
            <p>{weatherDescriptions[forecast.weather[0].description] || forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherInformations5Day