export default function Temp({temp, clazz}){
    var chooseUnit;

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
        /* function fundet på W3 */
    }

    var units = JSON.parse(getCookie("units"));

    /* if(document.cookie.split("=")[1] === "metric"){
        chooseUnit = "C";
    } 
    if(document.cookie.split("=")[1] === "imperial") {
        chooseUnit = "F";
    } */

    return(
        <p className={clazz}>{temp}&#186;{chooseUnit}</p>
    )
}