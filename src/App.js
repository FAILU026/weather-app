import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [search, setSearch] = useState("chennai");
  const [data, setData] = useState('');

  const fetchData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7db7f4dc24f41ff2956b0ddce4ddf5da&units=metric`);
    const result = await res.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  },[search]);

  const handleSearch = (e) => {
    setSearch(e.target.previousElementSibling.value);
  }

  return (
    <>
      <div className="App">
        <div className="weather-card">
          <div className="search">
            <input type="search" placeholder="enter city name"  spellCheck="false" />
            <button className='btn' onClick={handleSearch}>Search</button>
          </div>
          <div className="weather">
            <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
            <h1 className="temp">{data?.main?.temp}°C </h1>
            <h2 className="city">{data?.name}</h2>
            <div className="details">
              <div style={{ display: 'flex' }} className="col">
                <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" alt="humidity" />
                <div className="info">
                  <p className="humidity">{data?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" alt="wind speed" />
                <div className="info">
                  <p className="wind">{data?.wind?.speed} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
