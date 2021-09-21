import React, { useState } from 'react';

const SunOrRain = () => {
  const [sun, setSun] = useState(true)

const handleClick = () => {
  if (sun === true) {
    setSun(false)
    console.log("rain");
  }
  if (sun === false) {
    setSun(true)
    console.log("sun");
  }
}

  return ( 
    <div>
      <h1>Sunny or not?</h1>
      <div className={sun === true ? "sun-image" : "rain-image"}></div>
      <button onClick={handleClick}>Click me!</button>
    </div>
   );
}
 
export default SunOrRain;