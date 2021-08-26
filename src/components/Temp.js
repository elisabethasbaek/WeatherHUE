export default function Temp({temp}){
    var chooseUnit;

    if(document.cookie.split("=")[1] === "metric"){
        chooseUnit = "C";
    } 
    if(document.cookie.split("=")[1] === "imperial") {
        chooseUnit = "F";
    }

    return(
        <p className="weatherDetails__temp">{temp}&#186;{chooseUnit}</p>
    )
}