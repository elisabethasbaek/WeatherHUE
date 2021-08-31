import "../style/UnitsButtons.scss";

export default function Units(){
    function handleUnits(event){
        const date = new Date();
        date.setTime(date.getTime()  + (30*24*60*60*1000));
        var expires = "expires="+date.toUTCString();
        document.cookie = "units=" + event.target.dataset.unit + ";" + expires + ";path=/";
        console.log(document.cookie);
    }

    return(
        <div className="unitsButton">
            <button className="unitsButton__metric" data-unit="metric" onClick={handleUnits}>&#186;C</button>
            <button className="unitsButton__imperial" data-unit="imperial" onClick={handleUnits}>&#186;F</button>
        </div>
    )
}