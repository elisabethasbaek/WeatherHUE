import "../style/Settings.scss";

export default function Settings(){
    function handleSubmit(){

    }

    return(
        <div className="settings">
            <h1 className="settings__heading">Settings</h1>

            <form onSubmit={handleSubmit} className="settings__form">
                <input type="text" placeholder="IP address"></input>
                <input type="text" placeholder="Username (API key)"></input>
                <input type="text" placeholder=""></input>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}