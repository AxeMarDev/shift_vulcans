import eyeballIcon from "../Assets/eye-solid.png";
import React from "react";


const InputLabel = ({label,value, handleWhat, position, type, showPassword, togglePasswordVisibility}) =>{
    const handleTogglePasswordVisibility = () => {
        togglePasswordVisibility(!showPassword);
    };
    return(
        <div className="password-container">
            <input
                className=
                    { position === 1?(
                        "w-full bg-loginField h-12 pl-2 text-white rounded-lg border-black border-solid border"
                    ): position ===2 ? (
                        "w-full bg-loginField h-12 pl-2 text-white rounded-lg border-black border-solid border"
                    ):(
                        "w-full bg-loginField h-12 pl-2 text-white rounded-lg border-black border-solid border"
                    ) }

                type={type === 'password' && showPassword ? 'text' : type || 'text'} // Toggle input type based on showPassword
                id="myInput"
                placeholder={label}
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
                    onClick={handleTogglePasswordVisibility}

                />
            )}
        </div>
    )
}
export default InputLabel