import { useContext } from "react";
import SettingsContext from "../SettingsContext";
import "../style/SettingsButton.scss";

export default function SettingsButton(){
    var {openClose, setOpenClose} = useContext(SettingsContext);


    return(
        <button className="settingsButton" onClick={() => setOpenClose(!openClose)}>
            <span className="fas fa-cog"></span>
        </button>
    )
}