import { useState } from "react";
import axios from "axios";

export default function Search(){
    var [content, setContent] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.search.value}&units=${document.cookie.split("=")[1]}&appid=01ef0b0a8b733220771bbe668022c1b3`)
        .then(function (response) {
            setContent(response.data);
            console.log(response.data);
        });
    }

    return(
        <form onSubmit={handleSubmit} className="search">
            <label htmlFor="" className="search__label">Search for your city: </label>
            <div className="search__input">
                <input type="text" id="search" name="search" className=""></input>
                <button type="submit" className="">Go</button>
            </div>
        </form>
    )
}