export default function Month({season}){
    var month = new Date().getMonth();

    if(month === 2 || month === 3 || month === 4){
        season = "./Spring.jpg";
        /* spring */
    }

    if(month === 5 || month === 6 || month === 7){
        season = "./Summer.jpg"
        /* summer */
    }

    if(month === 8 || month === 9 || month === 10){
        season = "./Autumn.jpg";
        /* autumn */
    }

    if(month === 11 || month === 0 || month === 1){
        season = "./Winter.jpg";
        /* winter */
    }
        
    return(
        <img src={season} alt="Seasonally appropriate landscape" className="backgroundImage" />
    )
}