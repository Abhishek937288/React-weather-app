export const InfoBox = ({ data }) => {

  let imageUrl = "";

if ( data.temp >= 35) {
  imageUrl = "./images/cloudyWeather.png";
} else if (data.temp >= 15) {
  imageUrl = "./images/normal.png";
} else {
  imageUrl = "./images/snowWeather.png";
}
  

  return (
    <div>
      <p>{data.city.toUpperCase()}</p>
      <img src={imageUrl} alt="" className="img" />
      <p> Tempreture : {data.temp}</p>
      <div className="temp"><p> MinTempreture : {data.temMin} </p>
      <p> MaxTempreture : {data.temMax}</p></div>
      <div className="feelsLike">
      <p>Humidity : {data.humidity}</p>
      <p>FeelsLike : {data.feelsLike}</p>
      </div>
      <p>weatherCondition : {data.weather}</p>
    </div>
  );
};
