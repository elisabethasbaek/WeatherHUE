import Temp from "../components/Temp";

export default function Result({content, color}){
    return(
        <>
            <h1 className="city" style={{color: color}}>{content.name}</h1>
            
            <div className="weatherDetails">
                <Temp temp={content.main?.temp} clazz="weatherDetails__temp" />
                <div className="weatherDetails__feelsLike">
                    <p className="feelsLike">Feels like </p>
                    <Temp temp={content.main?.feels_like} clazz="tempSmall" />
                </div>
                <p className="weatherDetails__weather">{content.weather && content.weather[0].main} / {content.weather && content.weather[0].description}</p>
            </div>
        </>
    )
}