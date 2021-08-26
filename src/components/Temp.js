export default function Temp({temp, clazz}){
    var chooseUnit;

    if(document.cookie.split("=")[1] === "metric"){
        chooseUnit = "C";
    } 
    if(document.cookie.split("=")[1] === "imperial") {
        chooseUnit = "F";
    }

    return(
        <p className={clazz}>{temp}&#186;{chooseUnit}</p>
    )
}