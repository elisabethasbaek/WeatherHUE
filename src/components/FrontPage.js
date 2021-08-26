import "../style/FrontPageHeading.scss";

export default function FrontPage(){
    return(
        <div className="frontPage">
            <h2 className="frontPage__subheader">get the current weather</h2>
            <h1 className="frontPage__header" >Search for your city</h1>
            <p className="frontPage__description">Access current weather for over 200.000 cities around the world</p>
        </div>
    )
}