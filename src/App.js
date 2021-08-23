import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

export default function App() {
    var [content, setContent] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.city.value);

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.city.value}&appid=01ef0b0a8b733220771bbe668022c1b3`)
            .then(function (response) {
                setContent(response.data);
                console.log(response.data);
        });
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="city">
                <label htmlFor="" className="city__label">Search for your city: </label>
                <div className="city__input">
                    <input type="text" id="city" name="city" className=""></input>
                    <button type="submit" className="">Search</button>
                </div>
            </form>
        </div>
    );
}
