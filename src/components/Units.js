export default function Units({temp}){
    return(
        <p className="weatherDetails__temp">{temp}&#186;{document.cookie.split("=")[1] === "metric" ? "C" : "F"}</p>
    )
}