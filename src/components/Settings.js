import "../style/Settings.scss";
import { useContext } from "react";
import SettingsContext from "../SettingsContext";

export default function Settings({input, username, light}){
    var {openClose, setOpenClose} = useContext(SettingsContext);

    function handleSubmit(event){
        /* var cookieName;
        var cookieValue = event.target.ip.value;
        var exdays = 30;
        const date = new Date();
        date.setTime(date.getTime()  + (exdays*24*60*60*1000));
        var expires = "expires="+date.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        console.log(document.cookie); */
    }

    return(
        <>
        <div className="settings">
            <button className="settings__close" onClick={() => setOpenClose(!openClose)}><i className="fas fa-times"></i></button>
            <h1 className="settings__heading">Settings</h1>

            <form onSubmit={handleSubmit} className="settings__form">
                <div className="formPair">
                    <label htmlFor="ip">Your IP address:</label>
                    <input type="text" id="ip" placeholder="IP address"></input>
                </div>

                <div className="formPair">
                    <label htmlFor="username">Your username:</label>
                    <input type="text" id="username" placeholder="Username (API key)"></input>
                </div>

                <div className="formPair">
                    <label htmlFor="light">Your light's number:</label>
                    <input type="text" id="light" placeholder="Light number"></input>
                </div>

                <button type="submit">Save</button>
            </form>

            <p className="settings__anno"><span className="far fa-copyright"></span> 2021</p>
        </div>
        </>
    )
}