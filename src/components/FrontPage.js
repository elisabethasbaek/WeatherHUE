import "../style/FrontPageHeading.scss";

export default function FrontPage({color}){
    var month = new Date().getMonth();

    if(month === 2 || month === 3 || month === 4){
        color = "#E8B4C9";
        /* spring */
    }

    if(month === 5 || month === 6 || month === 7){
        color = "#F4D801";
        /* summer */
    }

    if(month === 8 || month === 9 || month === 10){
        color = "#F9A90C";
        /* autumn */
    }

    if(month === 11 || month === 0 || month === 1){
        color = "#0A837F";
        /* winter */
    }

    return(
        <div className="frontPage">
            <div className="frontPage__header">
                <p style={{color: color}}>Search</p>
                <p style={{color}}>for</p>
                <p style={{color}}>your</p>
                <p style={{color}}>city</p>
            </div>
            <h1 className="frontPage__subheader">Get the current weather</h1>
            <p className="frontPage__description">Access present weather for over 200.000 cities around the world</p>
        </div>
    )
}