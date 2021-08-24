import Units from "../components/Units";

export default function Result({content}){
    return(
        <>
            <h1 className="city">{content.name}</h1>
            
            <div className="weatherDetails">
                <Units temp={content.main?.temp} />
                <p className="weatherDetails__feelsLike">Feels like <span>{content.main?.feels_like}&#186;C</span></p>
                <p className="weatherDetails__weather">{content.weather && content.weather[0].main} / {content.weather && content.weather[0].description}</p>
            </div>
        </>
    )
}