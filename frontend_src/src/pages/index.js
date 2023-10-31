import React from 'react';
import SwitchViews from "../components/SwitchViews";

function adminDash({backendAPI}){
    return(
        <div className={"consoleDisplayOuter"}>
            <div className={"consoleDisplayInner2"}>
                <p className={"welcomeText"}> welcome to {backendAPI.auth.company} dashboard</p>
            </div>
        </div>
    )
}

function Home( { backendAPI, setBackendAPI }) {
    if ( !backendAPI.auth.isLoggedIn ) {
        return <SwitchViews backendAPI={backendAPI} setBackendAPI={ setBackendAPI}/>
    } else {
        return adminDash({backendAPI})
    }
}

export default Home;