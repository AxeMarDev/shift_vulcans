import RailsBackend from "../api/RailsBackend";
import ShiftLogo from "../pages/images/shiftlogo.png";
import InputLabel from "./InputLabel";
import InputButton from "./InputButton";
import React from "react";
import ActiveUser from "../api/ActiveUser";
import screenDimension from "../api/ScreenDimensionStyling";

const Login = ({railsBackend,setRailsBackend, setChangeView }) =>{


    const handleFieldChange = (event, stringIn) => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfo ,  ...railsBackend.auth , [stringIn]: (event.target.value) } ))
    };


    const handleLogin = () => {
        railsBackend.getAuth().then( (response ) => (
            setRailsBackend( new RailsBackend({ ...railsBackend, auth: new ActiveUser({
                    isLoggedIn: true,
                    token: response.token,
                    username: response.employee.name,
                    company: response.company.name,
                    id: response.employee.id})
            }))
        ))
    }
    const handleTogglePasswordVisibility = () => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfo ,  ...railsBackend.auth , showPassword: !railsBackend.userInfo.showPassword } ))
    };

    return(
        <div className={ screenDimension( "pl-4 pr-4  rounded-2xl bg-white border-2 flex flex-col justify-center content-center", "w-screen h-screen","w-96",700).style }>

            <div className={"flex  content-center justify-center"}>
                <div className={"mt-5 mb-5 w-40  "}>
                    <img src={ShiftLogo} className={"w-auto "}/>
                </div>
            </div>
            <div className={"flex mb-4 content-center justify-center"}>
                <h1 className={"font-bold text-white"}>Sign into account</h1>
            </div>
            <InputLabel 
                label={"userName"} 
                value={railsBackend.userInfo.userName} 
                handleWhat={handleFieldChange} 
                position={1} 
                customPlaceholder="Enter your username"
            />
            <InputLabel 
                label={"password"} 
                value={railsBackend.userInfo.password} 
                handleWhat={handleFieldChange} 
                position={2}   type={'password'} 
                showPassword={railsBackend.userInfo.showPassword} 
                togglePasswordVisibility={handleTogglePasswordVisibility} 
                customPlaceholder="Enter your password"
            />
            <InputLabel 
                label={"companyName"} 
                value={railsBackend.userInfo.companyName} 
                handleWhat={handleFieldChange} 
                position={3} 
                customPlaceholder="Enter your company"
            />

            <div className={"flex mb-4 content-center justify-center"}>
                <button href="#" className="text-blue-500 ">Forgot Password?</button>
            </div>
            <InputButton handleWhat={handleLogin} text={"login"}/>

            <div className={"flex mb-4 content-center justify-center"}>
                <button className="text-blue-500 " onClick={()=>{
                    setRailsBackend( new RailsBackend( {  saved: railsBackend.userInfo, totalInfo: railsBackend.saved}  ))
                    setChangeView(false)}
                }>Or Create Account</button>
            </div>

        </div>
    )
}
export default Login