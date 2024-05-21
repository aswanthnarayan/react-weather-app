export function convertTime(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(",", " ");
}

export function convertToUnit(temp, unit) {
  return unit === "imperial"
    ? Math.floor((temp * 9) / 5 + 32)
    : Math.floor(temp);
}

export function formatBackground(weatherData, unit) {
    const threshold = unit === "metric" ? 20 : 68;
    if (!weatherData) {
      return "from-cyan-600 to-blue-700";
    }
    if (weatherData.main.temp <= threshold) {
      return "from-cyan-600 to-blue-700";
    } else {
      return "from-yellow-600 to-orange-700";
    }
  }
  
