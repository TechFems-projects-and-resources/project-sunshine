import React, { useState } from "react";

const SunOrRain = () => {
  const [image, setImage] = useState("sun-image");

  const handleClick = () => {
    if (image === "sun-image") {
      setImage("rain-image");
      console.log("rain");
    }
    if (image === "rain-image") {
      setImage("sun-image");
      console.log("sun");
    }
  };

  return (
    <div>
      <h1>Sunny or not?</h1>
      <div className="background-image">
        <img src={image} alt="weather" />
      </div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default SunOrRain;
