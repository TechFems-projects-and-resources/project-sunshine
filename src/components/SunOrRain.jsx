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
    <div className="container">
      <div className="title">
        <h1>Sunny or not?</h1>
      </div>
      <div
        className={`background-image ${
          image === "rain-image" ? "rain-image" : "sun-image"
        }`} alt="weather" 
      >
        <img className={image} alt="" />
      </div>
      <div>
        <button className="button" onClick={handleClick}>Click me!</button>
      </div>
    </div>
  );
};

export default SunOrRain;
