import { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { InfoBox } from "./infoBox";
import "./app.css";

export const Weather = () => {
  const [data, setData] = useState({
     city : "",
        temp: "",
        temMin:"",
        temMax: "",
        humidity: "",
        feelsLike: "",
        weather: "",
  });
  const [isError, setIsError] = useState(false);

  const setWeatherInfo = async (city) => {
    const apiKey = "6b9e03bf95094db6f64c22811403227d";
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const response = await data.json();
      const result =  {
        city : city ,
        temp: response.main.temp,
        temMin: response.main.temp_min,
        temMax: response.main.temp_max,
        humidity: response.main.humidity,
        feelsLike: response.main.feels_like,
        weather: response.weather[0].description,
      };
      
      setData(result);
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };
  
  useEffect(() => {
    setWeatherInfo("Mumbai");   
  }, []);

  return (
    <div className="weather">
      <SearchBox setWeatherInfo={setWeatherInfo}/>
        {
      isError ? (
        <p>No data found</p>
      ) : (
        <InfoBox data={data} />
      )
    }
    </div>
  );
};
