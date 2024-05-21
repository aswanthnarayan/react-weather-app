import React, { useState, useEffect } from "react";
import {
  convertTime,
  formatDate,
} from "../../src/HelperFunctions";
const ForecastSection = ({ unit, weatherData }) => {
  const [forecastByDay, setForecastByDay] = useState({});

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=bfde2aaedfc8653a33faef49878e89ce&units=metric`
      );
      const data = await response.json();

      const groupedByDay = data.list.reduce((acc, item) => {
        const date = formatDate(item.dt);
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {});

      setForecastByDay(groupedByDay);
    };

    fetchForecast();
  }, [weatherData]);

  console.log(forecastByDay);

  return (
    <div className="text-white">
      <div className="flex items-center justify-center my-6">
        <p className="text-xl uppercase">5 DAYS FORECAST </p>
      </div>
      <div className="space-y-4">
        {Object.keys(forecastByDay).map((date) => (
          <div key={date} className="flex flex-col">
            <div className="flex items-center">
              <p className="mr-4">{date}</p>
              <hr className="flex-grow my-1" />
            </div>
            <div className="flex flex-wrap justify-around gap-3">
              {forecastByDay[date].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 my-6"
                >
                  <p>{convertTime(item.dt)}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="icon"
                  />

                  <p>
                    {Math.floor(item.main.temp)} °
                    {unit === "metric" ? "C" : "F"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
