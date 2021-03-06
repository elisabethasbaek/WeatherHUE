import { useState, useEffect } from "react";
import axios from "axios";
import SettingsContext from "./SettingsContext";
import UnitsContext from "./UnitsContext";

import "./App.scss";
import "./style/Search.scss";
import "./style/City.scss";
import "./style/BackgroundImage.scss";
import "./style/WeatherDetails.scss";

import Result from "./pages/Result";
import Settings from "./components/Settings";
import FrontPage from "./components/FrontPage";
import Month from "./components/Month";
/* import Overlay from "./components/Overlay"; */
import UnitsButtons from "./components/UnitsButtons";
import SettingsButton from "./components/SettingsButton";

export default function App() {
    var [content, setContent] = useState([]);
    var [openClose, setOpenClose] = useState(false);
    var [unitsCookie, setUnitsCookie] = useState([]);
    var [userInfo, setUserInfo] = useState([]);
    var backgroundImageSrc;
    var cityColor;
    var hours = new Date().getHours();

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(function(){
        setUnitsCookie(getCookie("units"))
    }, [setUnitsCookie]);

    useEffect(function(){
        setUserInfo(JSON.parse(getCookie("UserInfo")))
    }, [setUserInfo]);
    
    /* fetch for weather api: */
    function handleSubmit(event){
        event.preventDefault();
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.search.value}&units=${unitsCookie}&appid=01ef0b0a8b733220771bbe668022c1b3`)
        .then(function (response) {
            setContent(response.data);
            console.log(response.data);
        });
    }

    /* fetch for philips hue: */
    const setLight = async (hue, sat, bri) => {
        try{
            return await axios.put(`https://${userInfo.IPAddress}/api/${userInfo.Username}/lights/${userInfo.Light}/state`, {
                hue: parseInt(hue),
                sat: parseInt(sat),
                bri: parseInt(bri)
            });
            
        } catch(err){
            console.log(err);
        }
    }

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
        setLight(25000, 200, 150);

        if((hours >= 21 && hours <= 24) || (hours >= 0 && hours <= 5)){
            backgroundImageSrc = "./ClearNight.jpg";
            cityColor = "#0A837F";
        }

        if(hours >= 6 && hours <= 20){
            backgroundImageSrc = "./Clear.jpg";
            cityColor = "#FFBC11";
        }
        /* problem: den ved kun hvorvidt det er dag eller nat hvor brugeren
        befinder sig, og ikke om det er dag eller nat ved den lokation
        som brugeren har s??gt efter */
    }
    if(content.weather && (content.weather[0].id >= 800 && content.weather[0].id <= 803)){
        setLight(38000, 250, 150);
        backgroundImageSrc = "./ScatteredClouds.jpg";
        cityColor = "#FFBC11";

    }
    if(content.weather && (content.weather[0].id >= 804 && content.weather[0].id <= 810)){
        backgroundImageSrc = "./Cloudy.jpg";
        cityColor = "#FFBC11";
        setLight(10000, 254, 254);
    }
        
    return (
        <main className="App">
            <SettingsContext.Provider value={{openClose, setOpenClose}}>
            <UnitsContext.Provider value={{openClose, setOpenClose}}>
                
                {/* cookie form overlay: */}
                {/* {document.cookie === "units=metric" || document.cookie === "units=imperial"
                ? <Overlay hidden="-1000" /> 
                : <Overlay hidden="1000" />} */}

                {/* settings: */}
                {openClose && <Settings />}

                {/* background image: */}
                {content.length === 0
                ? <Month />
                : <img src={backgroundImageSrc} alt="Current weather conditions" className="backgroundImage"/>
                }

                {/* search form: */}
                <form onSubmit={handleSubmit} className="search">
                    <label htmlFor="" className="search__label">Search for your city: </label>
                    <div className="search__input">
                        <input type="text" id="search" name="search" className=""></input>
                        <button type="submit" className="">Go</button>
                    </div>
                </form>
                
                {/* show front page or result of search: */}
                {content.length === 0
                ? <FrontPage />
                : <Result content={content} color={cityColor} />}

                {/* open settings: */}
                <SettingsButton />
                
                {/* fahrenheit or celcius: */}
                <UnitsButtons />
            </UnitsContext.Provider>
            </SettingsContext.Provider>
        </main>
    );
}
