export default function Month({season}){
    var month = new Date().getMonth();

    if(month === 2 || month === 3 || month === 4){
        season = "./Spring.jpg";
    }

    if(month === 5 || month === 6 || month === 7){
        season = "./Summer.jpg"
    }

    if(month === 8 || month === 9 || month === 10){
        season = "./Autumn.jpg";
    }

    if(month === 11 || month === 0 || month === 1){
        season = "./Winter.jpg";
    }
        
    return(
        <img src={season} alt="pretty weather" className="backgroundImage" />
    )
}