import React, { useRef, useState } from 'react';
import './App.css';
import Card from './Card';
import Error from './Error';

function App() {

  const API = 'https://api.weatherapi.com/v1/current.json?key=96a6648db917417c9cf103521211504&q='
  const AQI = '&aqi=yes'

  let locationRef = useRef()
  let [error, setError] = useState(false)
  let [info, setInfo] = useState([])
  let [start, setStart] = useState(false)

  async function getLocation() {
    let val = locationRef.current.value
    if (!val || val.length === 0) val = 'Manila, Philippines'
    let APIcall = API + val + AQI
    try {
        let response = await fetch(APIcall)
        let data = await response.json()
        setInfo([data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.current.air_quality.pm10])
        setStart(true)
        setError(false)
    }
    catch (e) {
        setError(true)
    }
}

  return (
    <div className="container">
      <h1>Weather and Pollution Info</h1>
      <div className="location">
        <p>Location: </p>
        <input ref={locationRef} type="text" placeholder="Manila, Philippines" id="location" />
      </div>
      <button onClick={getLocation}>Get info</button>
      {error &&
      <Error />
      }
      {!error && start &&
        <Card info={info} />
      }
    </div>
  );
}

export default App;
