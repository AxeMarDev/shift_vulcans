import eyeballIcon from "../Assets/eye-solid.png";
import React from "react";


const InputLabel = ({label,value, handleWhat, type, showPassword, togglePasswordVisibility,customPlaceholder}) =>{


    return(
        <div className="password-container">
            <input
                className={"w-full bg-white h-12 pl-2 text-black rounded-lg border-2 "}
                type={type === 'password' && showPassword ? 'text' : type || 'text'} // Toggle input type based on showPassword
                id="myInput"
                placeholder={customPlaceholder}
                value={value}
                onChange={(e)=> handleWhat(e,label)}
                style={{marginBottom: "8px"}}// space between fields
            />
            {type === 'password' && (
                <img
                    src={eyeballIcon}
                    alt="Show password"
                    className="absolute top-6 right-2 transform -translate-y-1/2 cursor-pointer"
                    style={{ width: '26px', height: '20px', filter: showPassword ? 'drop-shadow(0 0 5px rgba(65, 105, 225, 1.0))' : 'none'}} // Adjust the width and height here
                    onClick={togglePasswordVisibility}

                />
            )}
        </div>
    )
}
export default InputLabel