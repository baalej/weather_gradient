import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Gradient from './components/Gradient';
import Form from './components/Form';
import Information from './components/Information';

function App() {
  const [weather, setWeather] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const getWeatherData = async (latitude, longitude, date) => {
    const response = await fetch(`https://api.brightsky.dev/weather?lat=${latitude}&lon=${longitude}&date=${date}`);
    const jsonResponse = await response.json();
    setWeather(jsonResponse.weather[12]);
  }

  const handleSubmit = ({latitude, longitude, date}) => {
    getWeatherData(latitude, longitude, date);
    setLatitude(latitude);
    setLongitude(longitude);
  }

  return (
    <div className="App">
      {/*<Header />*/}
      <Gradient
        weather={weather}
      />
      <Form
        handleOnSubmit={handleSubmit} 
      />
      <Information
        latitude={latitude}
        longitude={longitude}
        weather={weather}
      />
    </div>
  );
}

export default App;
