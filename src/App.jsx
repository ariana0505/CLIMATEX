import { useState } from 'react'
import {WeatherForm} from './components/WeatherForm';
//import WeatherInfo from './components/WeatherInfo';
//accb6ad0ec1f2649f67009bcf6830490 
import React from 'react'

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = async(city)=> {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) { // Código 200 indica que la solicitud fue exitosa
        setWeatherData(data);
      } else {
        console.error('Ciudad no encontrada');
        setWeatherData(null); // Limpia los datos si hay un error
      }
    } catch (error) {
      console.error('Error al obtener el clima', error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
        fetchWeather(city);
    }
  }
  return (
    <>
    <WeatherForm />
    </>

  )
}
