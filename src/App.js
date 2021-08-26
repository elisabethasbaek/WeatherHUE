import { useState } from "react";
import axios from "axios";

import "./App.scss";
import "./style/Search.scss";
import "./style/City.scss";
import "./style/BackgroundImage.scss";
import "./style/WeatherDetails.scss";
import "./style/UnitsButtons.scss";
import Result from "./pages/Result";

export default function App() {
    var [content, setContent] = useState([]);
    var backgroundImageSrc;
    var cityColor;
    
    function handleUnits(event){
        var cookieName = "units";
        var cookieValue = event.target.dataset.unit;
        var exdays = 30;
        const date = new Date();
        date.setTime(date.getTime()  + (exdays*24*60*60*1000));
        var expires = "expires="+date.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        console.log(document.cookie);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.search.value}&units=${document.cookie.split("=")[1]}&appid=01ef0b0a8b733220771bbe668022c1b3`)
        .then(function (response) {
            setContent(response.data);
            console.log(response.data);
        });
    }

    const setLight = async (hue, sat, bri) => {
        try{
            return await axios.put("https://192.168.8.100/api/0XBlGLtpVQGbYSpcweaVrbi7hNe1nGgkE5DENQ6I/lights/11/state", {
                hue: parseInt(hue),
                sat: parseInt(sat),
                bri: parseInt(bri)
            });
            
        } catch(err){
            console.log(err);
        }
    }

    /* function cityColor(color){
        document.querySelector(".city").style.color = color;
    } */

    if(content.weather && (content.weather[0].id >= 200 && content.weather[0].id <= 299)){
        backgroundImageSrc = "./ThunderStorm.jpg";
        cityColor = "#0A837F";
        setLight(65600, 254, 180);
    }
    if(content.weather && (content.weather[0].id >= 300 && content.weather[0].id <= 499)){
        backgroundImageSrc = "./Drizzle.jpg";
        cityColor = "#0A837F";
        setLight(31000, 254, 80);
    }
    if(content.weather && (content.weather[0].id >= 500 && content.weather[0].id <= 599)){
        backgroundImageSrc = "./Rainy.jpg";
        cityColor = "#0A837F";
        setLight(47800, 254, 150);
    }
    if(content.weather && (content.weather[0].id >= 600 && content.weather[0].id <= 699)){
        backgroundImageSrc = "./Snowy.jpg";
        cityColor = "#0A837F";
        setLight(44000, 254, 254);
    }
    if(content.weather && (content.weather[0].id >= 700 && content.weather[0].id <= 799)){
        backgroundImageSrc = "./Misty.jpg";
        cityColor = "#0A837F";
        setLight(4500, 254, 190);
    }
    if(content.weather && content.weather[0].id === 800){
        backgroundImageSrc = "./Clear.jpg";
        cityColor = "#FFBC11";
        setLight(25000, 200, 150);
    }
    if(content.weather && (content.weather[0].id >= 800 && content.weather[0].id <= 803)){
        backgroundImageSrc = "./ScatteredClouds.jpg";
        cityColor = "#FFBC11";
        setLight(38000, 250, 150);
    }
    if(content.weather && (content.weather[0].id >= 804 && content.weather[0].id <= 810)){
        backgroundImageSrc = "./Cloudy.jpg";
        cityColor = "#FFBC11";
        setLight(10000, 254, 254);
    }
        
    return (
        <main className="App">
            <img src={backgroundImageSrc} alt="" className="backgroundImage"/>

            <form onSubmit={handleSubmit} className="search">
                <label htmlFor="" className="search__label">Search for your city: </label>
                <div className="search__input">
                    <input type="text" id="search" name="search" className=""></input>
                    <button type="submit" className="">Go</button>
                </div>
            </form>

            {content.length === 0
            ? <h1>WHAZZUP BITCH</h1>
            : <Result content={content} color={cityColor} />}

            <div className="unitsButton">
                <button className="unitsButton__metric" data-unit="metric" onClick={handleUnits}>&#186;C</button>
                <button className="unitsButton__imperial" data-unit="imperial" onClick={handleUnits}>&#186;F</button>
            </div>
        </main>
    );
}
