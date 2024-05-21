import React from "react";
import { convertTime, convertToUnit } from "../HelperFunctions";
import { formatDate } from "../HelperFunctions";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";

const MainSection = ({ weatherData, unit }) => {
  const { name, main, weather, sys, wind, dt, id } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;
  const icon = weather[0].icon;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const sunrise = convertTime(sys.sunrise);
  const sunset = convertTime(sys.sunset);
  const localTime = convertTime(dt);
  const currentDate = formatDate(dt);
  
  return (
    <div className="flex flex-col gap-3 text-white">
      <div className="flex flex-col justify-center items-center gap-3 my-3 text-center">
        <p className="text-lg md:text-xl font-extralight">
          {currentDate} | Local time : {localTime}
        </p>
        <p className="text-2xl md:text-3xl uppercase font-bold">
          {name},{sys.country}
        </p>
        <p className="text-lg md:text-xl font-light text-blue-200">
          {weatherDescription}
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="currentWeather"
          />
        </div>
        <p className="text-4xl md:text-6xl">
          {convertToUnit(temperature, unit)}°{unit === "metric" ? "C" : "F"}
        </p>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex gap-2 items-center">
            <FaThermometerEmpty size={20} />
            <p>
              Feels Like: {convertToUnit(main.feels_like, unit)} °
              {unit === "metric" ? "C" : "F"}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BiSolidDropletHalf size={20} />
            <p>Humidity: {humidity}%</p>
          </div>
          <div className="flex gap-2 items-center">
            <FiWind size={20} />
            <p>Wind: {windSpeed} m/s</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 md:gap-12 my-3 text-center">
        <div className="flex gap-2 items-center">
          <GiSunrise size={30} />
          <p>Sunrise: {sunrise}</p>
        </div>
        <div className="flex gap-2 items-center">
          <GiSunset size={30} />
          <p>Sunset: {sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
