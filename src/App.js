import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import "./style/Search.scss";
import "./style/City.scss";
import "./style/BackgroundImage.scss";
import "./style/WeatherDetails.scss";

export default function App() {
    var [content, setContent] = useState([]);

    function handleSubmit(event){
        event.preventDefault();

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.search.value}&units=metric&appid=01ef0b0a8b733220771bbe668022c1b3`)
            .then(function (response) {
                setContent(response.data);
                console.log(response.data);
        });
    }

    var backgroundImageSrc;
    var cityColor = 
    function cityColor(color){
        document.querySelector(".city").style.color = color;
    }

    if(content.weather && (content.weather[0].id >= 200 && content.weather[0].id <= 299)){
        backgroundImageSrc = "./ThunderStorm.jpg";
        cityColor("#0A837F");
    }
    if(content.weather && (content.weather[0].id >= 300 && content.weather[0].id <= 499)){
        backgroundImageSrc = "./Drizzle.jpg";
        cityColor("#0A837F");
    }
    if(content.weather && (content.weather[0].id >= 500 && content.weather[0].id <= 599)){
        backgroundImageSrc = "./Rainy.jpg";
        cityColor("#0A837F");
    }
    if(content.weather && (content.weather[0].id >= 600 && content.weather[0].id <= 699)){
        backgroundImageSrc = "./Snowy.jpg";
        cityColor("#0A837F");
    }
    if(content.weather && (content.weather[0].id >= 700 && content.weather[0].id <= 799)){
        backgroundImageSrc = "./Misty.jpg";
        cityColor("#0A837F");
    }
    if(content.weather && content.weather[0].id === 800){
        backgroundImageSrc = "./Clear.jpg";
        cityColor("#FFBC11");
    }
    if(content.weather && (content.weather[0].id >= 800 && content.weather[0].id <= 803)){
        backgroundImageSrc = "./ScatteredClouds.jpg";
        cityColor("#FFBC11");
    }
    if(content.weather && (content.weather[0].id >= 804 && content.weather[0].id <= 810)){
        backgroundImageSrc = "./Cloudy.jpg";
        cityColor("#FFBC11");
    }

    return (
        <div className="App">
            <img src={backgroundImageSrc} alt="" className="backgroundImage"/>

            <form onSubmit={handleSubmit} className="search">
                <label htmlFor="" className="search__label">Search for your city: </label>
                <div className="search__input">
                    <input type="text" id="search" name="search" className=""></input>
                    <button type="submit" className="">Go</button>
                </div>
            </form>

            <h1 className="city">{content.name}</h1>
            
            <div className="weatherDetails">
                <p className="weatherDetails__temp">{content.main?.temp}&#186;C</p>
                <p className="weatherDetails__feelsLike">Feels like {content.main?.feels_like}&#186;C</p>
                <p className="weatherDetails__weather">{content.weather[0]?.main}</p>
                <p className="weatherDetails__details">{content.weather[0]?.description}</p>
            </div>
        </div>
    );
}
