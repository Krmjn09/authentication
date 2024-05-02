import react from "react";
import axios from "axios";
import "./weather.css";
const Weather = () => {
  const [weather, setWeather] = react.useState(null);
  react.useEffect(() => {
    axios.get("/api/weather").then((response) => {
      setWeather(response.data);
    });
  }, []);
  if (!weather) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Weather</h1>
      <p>{weather.weather}</p>
      <p>{weather.temperature}</p>
    </div>
  );
};
export default Weather;
