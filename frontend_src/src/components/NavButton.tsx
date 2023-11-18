import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import screenDimension from "../api/ScreenDimensionStyling";



interface NavButtonProps{
    title:string
    to:string
    className:string
    changeActive:any
    isActive:[number, number]
}
const NavButton:React.FC<NavButtonProps> = ({title,to,className, isActive, changeActive}) =>{

    const handleChange = () =>{
        console.log(isActive[1])
        changeActive(isActive[1])
    }

    return(
        <NavLink  to={`${to}` } className={ screenDimension( "flex", "flex-row"," flex-col",700).style}>
            <button onClick={handleChange} className={
                screenDimension( "",
                    `w-20  h-20 grid rounded-2xl content-center ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}`,
                    `${className} justify-start grid content-start p-2 rounded w-auto ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}` ,
                    700).style
            }>
                { !screenDimension( "","","",700).isDesktop ? ( title[0]): ( title )}
            </button>
        </NavLink>
    )
}

export default NavButton