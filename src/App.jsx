import React, { useState, useEffect } from 'react';
import SurveyForm from './components/SurveyForm';
import questions from './assets/questions.json';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const apiKey = 'b99f308a84c42a7a2c701a26eba18058';
    const city = 'Stockholm';

    const CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(CURRENT_WEATHER_API_URL)
      .then((response) => response.json())
      .then((currentData) => {
        // Display current weather data
        const sunrise = formatTime(currentData.sys.sunrise);
        const sunset = formatTime(currentData.sys.sunset);
        const temperature = Math.round(currentData.main.temp * 10) / 10;

        setWeatherData({
          name: currentData.name,
          country: currentData.sys.country,
          temperature: temperature,
          description: currentData.weather[0].description,
          sunrise: sunrise,
          sunset: sunset,
        });

        // Set the current time
        const currentTime = formatTime(new Date().getTime() / 1000);
        setCurrentTime(currentTime);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  // Helper function to format time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      {weatherData && (
        <div>
          <h2>Today's Weather in {weatherData.name}, {weatherData.country}</h2>
          <p>Current Time: {currentTime}</p>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Weather: {weatherData.description}</p>
          <p>Sunrise: {weatherData.sunrise}</p>
          <p>Sunset: {weatherData.sunset}</p>
        </div>
      )}
      <SurveyForm questions={questions} />
    </div>
  );
};

export default App;
