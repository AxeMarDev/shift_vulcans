import React, {useEffect} from "react";
import screenDimension from "../api/ScreenDimensionStyling";

// @ts-ignore
import RailsBackend  from "../api/RailsBackend"
import {useNavigate} from "react-router-dom";


interface NavButtonProps{
    className:string
    changeActive:any
    isActive:[number, number]
    action?:()=>void
    setBackendAPI:any
}
const SignOut:React.FC<NavButtonProps> = ({className, isActive,setBackendAPI}) =>{
    const navigate = useNavigate();

    return(
        <div className={ screenDimension( "flex", "flex-row"," flex-col",700).style}>
            <button onClick={()=>{   setBackendAPI( new RailsBackend() );  navigate("/")     }} className={
                screenDimension( "",
                    `w-20  h-20 grid rounded-2xl content-center ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}`,
                    `${className} justify-start grid content-start p-2 rounded w-auto ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}` ,
                    700).style
            }>
                { !screenDimension( "","","",700).isDesktop ? ("S"): ( "signout" )}
            </button>
        </div>
    )
}


export default SignOut