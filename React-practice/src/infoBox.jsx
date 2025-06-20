export const InfoBox = ({data}) => {
  return (
    <div>
        <p>{data.city.toUpperCase()}</p>
        <p> Tempreture : {data.temp}</p>
        <p> MinTempreture {data.temMin} </p>
        <p> MaxTempreture {data.temMax}</p>
        <p>Humidity {data.humidity}</p>
        <p>FeelsLike {data.feelsLike}</p>
        <p>weatherCondition : {data.weather}</p>
    </div>
  );
};
