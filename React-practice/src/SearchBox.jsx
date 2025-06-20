import { useState } from "react";
import "./app.css"

export const SearchBox = ({setWeatherInfo})=>{
    const[city, setCity]=useState("");

    const handleChnage = (e)=>{
        setCity(e.target.value);
    };

    const Submit = ()=>{
        setWeatherInfo(city);
        setCity("");
    }

    return(
        <div className="search-Box">
            <input type="text" value={city}  onChange={handleChnage} />     
             <button onClick={Submit}>Search</button>
        </div>
    )
}