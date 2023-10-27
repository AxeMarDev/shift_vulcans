import RailsBackend from "../api/RailsBackend";
import ShiftLogo from "../pages/images/shiftlogo.png";
import InputLabel from "./InputLabel";
import InputButton from "./InputButton";
import React from "react";

const Signup = ({railsBackend, setRailsBackend, handleLoginTrue, setChangeView}) =>{

    const onFileChange = (e) => {
        const file = e.target.files[0]
        var value = ''

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
        setRailsBackend( new RailsBackend( { ...railsBackend.userInfoLogin, ...railsBackend.controller , [stringIn]: (event.target.value) } ))
    };
    const handleSignup = () =>{
        railsBackend.addCompanyWithUser().then( (response) => {
            console.log(response)
            railsBackend.getAuth().then( (response ) => (
                handleLoginTrue( response)
            ))
        })
    }

    return(
        <>
            <div className={"pl-4 pr-4 w-96 rounded-2xl bg-loginHolder flex flex-col justify-center content-center"}>

                <div className={"flex  content-center justify-center"}>
                    <div className={"mt-5 mb-5 w-40  "}>
                        <img src={ShiftLogo} className={"w-auto "}/>
                    </div>
                </div>

                <div className={"flex mb-4 content-center justify-center"}>
                    <h1 className={"font-bold text-white"}>Create an account</h1>
                </div>

                <InputLabel label={"userName"} value={railsBackend.userInfoSignup.userName} handleWhat={handleFieldChange} position={1} />
                <InputLabel label={"password"} value={railsBackend.userInfoSignup.password} handleWhat={handleFieldChange} position={2} type={'password'} />
                <InputLabel label={"confirmPassword"} value={railsBackend.userInfoSignup.confirmPassword} handleWhat={handleFieldChange} position={3} type={'password'}/>
                <InputLabel label={"companyName"} value={railsBackend.userInfoSignup.companyName} handleWhat={handleFieldChange} position={3} />
                <InputLabel label={"name"} value={railsBackend.userInfoSignup.name} handleWhat={handleFieldChange} position={3} />
                <label className="custom-file-upload bg-blue-700">
                    <input type="file" onChange={onFileChange} accept="image/*" />
                    Upload Profile Picture
                </label>

                <InputButton handleWhat={handleSignup} text={ "Create Account"} passwordsMatch={true}/>

                <div className={"flex mb-4 content-center justify-center"}>
                    <button className="text-blue-500 " onClick={()=>setChangeView(true)}>Or Login</button>
                </div>
            </div>
        </>
    )
}

export default Signup