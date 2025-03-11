import React from 'react'
import './WeatherInformations.css'

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

function WeatherInformations({ weather }) {
  const description = weather.weather[0].description
  const translatedDescription = weatherDescriptions[description] || description

  return (
    <div className='weather-container'>
      <h2>Informações do Tempo</h2>
      {weather.main ? (
        <div>
          <h2>{weather.name}</h2>

          <div className='weather-info'>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
            <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
          </div>

          <div>
            <p className='description'>{translatedDescription}</p>
          </div>

          <div className='details'>
            <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidade: {weather.main.humidity}%</p>
            <p>Pressão: {weather.main.pressure} h.Pa</p>
          </div>
        </div>
      ) : (
        <p>Nenhuma informação disponível</p>
      )}
    </div>
  )
}

export default WeatherInformations