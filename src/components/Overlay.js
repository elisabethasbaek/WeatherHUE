import "../style/Overlay.scss";

export default function Overlay({hidden}){
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
        <div className="overlay" style={{zIndex: hidden}}>
            <div className="overlay__text">
                <h1 className="heading">Which units do you prefer?</h1>
                <div>
                    <button className="metric" data-unit="metric" onClick={handleUnits}>Metric (&#186;C)</button>
                    <button className="imperial" data-unit="imperial" onClick={handleUnits}>Imperial (&#186;F)</button>
                </div>
            </div>
        </div>
    )
}