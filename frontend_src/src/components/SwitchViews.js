import Login from "./Login";
import Signup from "./Signup";
import React, {useState} from "react";
import RailsBackend from "../api/RailsBackend";

const SwicthViews = ({handleLoginTrue}) =>{

    const [ railsBackend , setBackend ] = useState( new RailsBackend({}))
    const [ changeview , setChangeView] = useState( true)

    return(
        <div className={"  flex w-screen h-screen  justify-center grid content-center "}>
            <div>
                {changeview ? (
                    <Login railsBackend={railsBackend} setRailsBackend={setBackend} handleLoginTrue={handleLoginTrue} setChangeView={setChangeView}/>
                ):(
                    <Signup railsBackend={railsBackend} setRailsBackend={setBackend} handleLoginTrue={handleLoginTrue} setChangeView={setChangeView}/>
                )}
            </div>
        </div>

    )
}

export default SwicthViews