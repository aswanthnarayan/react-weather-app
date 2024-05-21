import { useEffect, useState } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import MainSection from "./components/MainSection";
import ForecastSection from "./components/ForecastSection";
import axios from "axios";
import { formatBackground } from "./HelperFunctions";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Kannur");
  const [unit, setUnit] = useState("metric");
  // const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfde2aaedfc8653a33faef49878e89ce&units=${unit}`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, [city,unit]);

  const toggleToMetric = () => {
    setUnit("metric");
  };

  const toggleToImperial = () => {
    setUnit("imperial");
  };

  const backgroundClass = formatBackground(weatherData, unit);

  console.log(unit);

  return (
    <div
      className={`mx-auto max-w-screen-lg my-4 py-5 px-4 md:px-32 bg-gradient-to-br shadow-xl shadow-slate-500 ${backgroundClass}`}
    >
      <InputSection
        setCity={setCity}
        toggleToMetric={toggleToMetric}
        toggleToImperial={toggleToImperial}
      />
      {weatherData && <MainSection weatherData={weatherData} unit={unit} />}
      {weatherData && <ForecastSection unit={unit} weatherData={weatherData} />}
    </div>
  );
}

export default App;
