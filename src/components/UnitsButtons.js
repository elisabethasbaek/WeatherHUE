import "../style/UnitsButtons.scss";

export default function UnitsButtons(){
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

    return(
        <div className="unitsButton">
            <button className="unitsButton__metric" data-unit="metric" onClick={handleUnits}>&#186;C</button>
            <button className="unitsButton__imperial" data-unit="imperial" onClick={handleUnits}>&#186;F</button>
        </div>
    )
}