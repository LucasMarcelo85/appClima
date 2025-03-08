import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformations/WeatherInformations.jsx'
import WeatherInformations5Day from './components/WeatherInformations5Day/WeatherInformations5Day.jsx'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Day, setWeather5Day] = useState()
  const inputRef = useRef()

  async function searchCity(){
    console.log(inputRef.current.value)
    const City = inputRef.current.value
    const Key = "5c18de2c274edf35b8275437c2f8ddbc"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Key}&units=metric`
    const url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${Key}&units=metric`

    try {
      const apiInfo = await axios.get(url)
      setWeather5Day(apiInfo5Day.data)
      setWeather(apiInfo.data)
      console.log('Weather data:', apiInfo.data)

      const apiInfo5Day = await axios.get(url5Day)
      setWeather5Day(apiInfo5Day.data)
      console.log('5 Day Weather data:', apiInfo5Day.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather} />}
      {weather5Day && <WeatherInformations5Day weather5Day={weather5Day} />}
    </div>
  )
}

export default App
