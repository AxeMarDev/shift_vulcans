import React from 'react';
import SwitchViews from "../components/SwitchViews";

function adminDash({user}){
    return(
        <div className={"consoleDisplayOuter"}>
            <div className={"consoleDisplayInner2"}>
                <p className={"welcomeText"}> welcome to {user.company} dashboard</p>
            </div>
        </div>
    )
}

function Home( {user, handleLoginTrue}) {
    if ( !user.isLoggedIn ) {
        return <SwitchViews handleLoginTrue={handleLoginTrue}/>
    } else {
        return adminDash({user})
    }
}

export default Home;