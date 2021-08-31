import { useState, useEffect } from "react";

export default function Result({content, color}){
    var [unitsCookie, setUnitsCookie] = useState([]);
    var chooseUnit;

    /* console.log(content.timezone / 3600);
    console.log(new Date().getUTCHours()); */

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
        setUnitsCookie(getCookie("units"));
    }, [setUnitsCookie]);

    if(unitsCookie === "metric"){
        chooseUnit = "C";
    } 
    if(unitsCookie === "imperial") {
        chooseUnit = "F";
    }

    return(
        <>
            <h1 className="city" style={{color: color}}>{content.name}</h1>
            
            <div className="weatherDetails">
                <p className="weatherDetails__temp">{content.main?.temp}&#186;{chooseUnit}</p>
                <div className="weatherDetails__feelsLike">
                    <p className="feelsLike">Feels like </p>
                    <p className="tempSmall">{content.main?.feels_like}&#186;{chooseUnit}</p>
                </div>
                <p className="weatherDetails__weather">{content.weather && content.weather[0].main} / {content.weather && content.weather[0].description}</p>
            </div>
        </>
    )
}