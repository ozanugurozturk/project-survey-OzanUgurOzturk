import React, { useState, useEffect } from 'react';
import './WeatherCard.css';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const apiKey = 'b99f308a84c42a7a2c701a26eba18058';
        const city = 'Stockholm';

        const CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(CURRENT_WEATHER_API_URL)
            .then((response) => response.json())
            .then((currentData) => {
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

                const currentTime = formatTime(new Date().getTime() / 1000);
                setCurrentTime(currentTime);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = '0' + date.getMinutes();
        return hours + ':' + minutes.substr(-2);
    };

    return (
        <div className="weather-card">
            {weatherData && (
                <div>
                    <div className="weather-header">
                        <h2 className="weather-title">Today's Weather in {weatherData.name}</h2>
                    </div>
                    <div className="weather-info">
                        <p>
                            Time: {currentTime} | Weather: {weatherData.temperature} °C / {weatherData.description}
                        </p>
                        <div className="sunrise-sunset">
                            <img src="src\assets\sunrise-weather.gif" alt="Sunrise" className="sunrise-icon" />
                            <p>{weatherData.sunrise}</p>
                            <img src="src\assets\sunset-weather.gif" alt="Sunset" className="sunset-icon" />
                            <p>{weatherData.sunset}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;