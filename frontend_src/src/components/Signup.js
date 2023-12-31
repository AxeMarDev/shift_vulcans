import RailsBackend from "../api/RailsBackend";
import ShiftLogo from "../pages/images/shiftlogo.png";
import InputLabel from "./InputLabel";
import InputButton from "./InputButton";
import React from "react";
import ActiveUser from "../api/ActiveUser";
import screenDimension from "../api/ScreenDimensionStyling";

const Signup = ({railsBackend, setRailsBackend, setChangeView}) =>{

    const onFileChange = (e) => {
        const file = e.target.files[0]
        let value = ''

        if (file){
            const reader = new FileReader();
            reader.onload = (e) => {
                value = e.target.result.split(',')[1];
                setRailsBackend( new RailsBackend( { ...railsBackend, image: value } ))
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFieldChange = (event, stringIn) => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfo, saved: railsBackend.saved , [stringIn]: (event.target.value) } ))
    };
    const handleSignup = () =>{
        railsBackend.addCompanyWithUser().then( (response) => {
            console.log(response)
            railsBackend.getAuth().then( (response ) => (
                setRailsBackend( new RailsBackend({ ...railsBackend, auth: new ActiveUser({
                        isLoggedIn: true,
                        token: response.token,
                        username: response.employee.name,
                        company: response.company.name,
                        id: response.employee.id})
                }))
            ))
        })
    }
    const handleTogglePasswordVisibility = () => {
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfo ,  ...railsBackend.auth , showPassword: !railsBackend.userInfo.showPassword } ))
    };


    return(
        <div>
            <div className={ screenDimension( "pl-4 pr-4  rounded-2xl bg-white border-2 flex flex-col justify-center content-center", "w-screen h-screen","w-96",700).style}>

                <div className={"flex  content-center justify-center"}>
                    <div className={"mt-5 mb-5 w-40  "}>
                        <img src={ShiftLogo} className={"w-auto "}/>
                    </div>
                </div>

                <div className={"flex mb-4 content-center justify-center"}>
                    <h1 className={"font-bold text-white"}>Create an account</h1>
                </div>

                <InputLabel label={"userName"} value={railsBackend.userInfo.userName} handleWhat={handleFieldChange} position={1}
                            customPlaceholder="Enter your username" />
                <InputLabel label={"password"} value={railsBackend.userInfo.password} handleWhat={handleFieldChange} position={2} type={'password'} showPassword={railsBackend.userInfo.showPassword} togglePasswordVisibility={handleTogglePasswordVisibility}
                            customPlaceholder="Enter your password" />
                <InputLabel label={"confirmPassword"} value={railsBackend.userInfo.confirmPassword} handleWhat={handleFieldChange} position={3} type={'password'} showPassword={railsBackend.userInfo.showPassword} togglePasswordVisibility={handleTogglePasswordVisibility}
                            customPlaceholder="confirm password" />
                <InputLabel label={"companyName"} value={railsBackend.userInfo.companyName} handleWhat={handleFieldChange} position={3}
                            customPlaceholder="Enter your company name" />
                <InputLabel label={"name"} value={railsBackend.userInfo.name} handleWhat={handleFieldChange} position={3}
                            customPlaceholder="Enter your name" />
                <InputLabel label={"position"} value={railsBackend.userInfo.position} handleWhat={handleFieldChange} position={3}
                            customPlaceholder="Enter your position" />
                <label className="custom-file-upload bg-blue-700">
                    <input type="file" onChange={onFileChange} accept="image/*" />
                    <p>Upload Profile Picture</p>
                </label>
                <InputButton handleWhat={handleSignup} text={"Create Account"} passwordsMatch={true}/>

                <div className={"flex mb-4 content-center justify-center"}>
                    <button className="text-blue-500 " onClick={()=>{
                        setRailsBackend( new RailsBackend( {  saved: railsBackend.userInfo, totalInfo: railsBackend.saved}  ))
                        setChangeView(true)}}>Or Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup