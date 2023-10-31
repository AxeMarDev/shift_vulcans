import Login from "./Login";
import Signup from "./Signup";
import React, {useState} from "react";

const SwicthViews = ({backendAPI, setBackendAPI}) =>{

    const [ changeview , setChangeView] = useState( true)

    return(
        <div className={"  flex w-screen h-screen  justify-center grid content-center "}>
            <div>
                {changeview ? (
                    <Login railsBackend={backendAPI} setRailsBackend={setBackendAPI}  setChangeView={setChangeView}/>
                ):(
                    <Signup railsBackend={backendAPI} setRailsBackend={setBackendAPI}  setChangeView={setChangeView}/>
                )}
            </div>
        </div>

    )
}

export default SwicthViews