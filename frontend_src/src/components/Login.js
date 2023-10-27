import RailsBackend from "../api/RailsBackend";
import ShiftLogo from "../pages/images/shiftlogo.png";
import InputLabel from "./InputLabel";
import InputButton from "./InputButton";
import React from "react";

const Login = ({railsBackend,setRailsBackend, handleLoginTrue, setChangeView }) =>{


    const handleFieldChange = (event, stringIn) => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfoLogin, ...railsBackend.controller , [stringIn]: (event.target.value) } ))
    };

    const handleChangeView = () => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfoLogin , logInOrSignUp: true } ))
        console.log(railsBackend.controller.logInOrSignUp)
    }

    const handleLogin = () => {
        railsBackend.getAuth().then( (response ) => (
            handleLoginTrue( response)
        ))
    }

    return(
        <div className={"pl-4 pr-4 w-96 rounded-2xl bg-loginHolder flex flex-col justify-center content-center"}>

            <div className={"flex  content-center justify-center"}>
                <div className={"mt-5 mb-5 w-40  "}>
                    <img src={ShiftLogo} className={"w-auto "}/>
                </div>
            </div>
            <div className={"flex mb-4 content-center justify-center"}>
                <h1 className={"font-bold text-white"}>Sign into account</h1>
            </div>
            <InputLabel label={"userName"} value={railsBackend.userInfoLogin.userName} handleWhat={handleFieldChange} position={1} />
            <InputLabel label={"password"} value={railsBackend.userInfoLogin.password} handleWhat={handleFieldChange} position={2} type={'password'} showPassword={railsBackend.userInfoLogin.showPassword} />
            <InputLabel label={"companyName"} value={railsBackend.userInfoLogin.companyName} handleWhat={handleFieldChange} position={3} />

            <div className={"flex mb-4 content-center justify-center"}>
                <button href="#" className="text-blue-500 ">Forgot Password?</button>
            </div>
            <InputButton handleWhat={handleLogin} text={"login"}/>

            <div className={"flex mb-4 content-center justify-center"}>
                <button className="text-blue-500 " onClick={()=>setChangeView(false) }>Or Create Account</button>
            </div>

        </div>
    )
}
export default Login