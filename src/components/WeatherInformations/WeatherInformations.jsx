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
    "overcast clouds": "céu completamente nublado"
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