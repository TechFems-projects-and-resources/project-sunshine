import React, { useState } from 'react';

const SunOrRain = () => {
  const [weather, setWeather] = useState("sun")

const handleClick = () => {
  if (weather === "sun") {
    setWeather("rain")
    console.log("rain");
  }
  if (weather === "rain") {
    setWeather("sun")
    console.log("sun");
  }
}

  return ( 
    <div>
      <h1>Sunny or not?</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
   );
}
 
export default SunOrRain;