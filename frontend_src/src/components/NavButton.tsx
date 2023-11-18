import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";



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
        <NavLink  to={`${to}` } className={"flex flex-col"}>
            <button onClick={handleChange} className={`${className} justify-start grid content-start p-2 rounded w-auto ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")} `}>{title}</button>
        </NavLink>
    )
}

export default NavButton