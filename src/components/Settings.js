import "../style/Settings.scss";

export default function Settings({hidden}){
    function close(){
        hidden = -1000;
    }

    function handleSubmit(){

    }

    return(
        <div className="settings" style={{zIndex: hidden}}>
            <button className="settings__close" onClick={close}><i className="fas fa-times"></i></button>
            <h1 className="settings__heading">Settings</h1>

            <form onSubmit={handleSubmit} className="settings__form">
                <div className="formPair">
                    <label htmlFor="ip">Your IP address:</label>
                    <input type="text" id="ip" placeholder="IP address"></input>
                </div>

                <div className="formPair">
                    <label htmlFor="username">Your username:</label>
                    <input type="text" id="username" placeholder="Username (API key)"></input>
                </div>

                <div className="formPair">
                    <label htmlFor=""></label>
                    <input type="text" id="" placeholder=""></input>
                </div>

                <button type="submit">Save</button>
            </form>

            <p className="settings__anno"><span class="far fa-copyright"></span> 2021</p>
        </div>
    )
}