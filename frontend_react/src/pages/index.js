import React, { useState } from 'react';
import {queries} from "@testing-library/react";
import eyeballIcon from '../Assets/eye-solid.png'; // Relative import path

function adminDash({user}){
    return(
        <div className={"consoleDisplayOuter"}>
            <div className={"consoleDisplayInner2"}>
                <p className={"welcomeText"}> welcome to {user.company} dashboard</p>
            </div>

        </div>

    )

}
function Home( {user, handleLoginTrue}) {

    // Function to handle changes in the input field
    const [userName, setInputValue] = useState('');
    const [userPass, setInputValue2] = useState('');
    const [company, setInputValue3] = useState('');
    const [loginType, setInputValue4] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUserNameChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePassWordChange = (event) => {
        setInputValue2(event.target.value);

    };
    const handleCompanyNameChange = (event) => {
        setInputValue3(event.target.value);

    };
    const handleLoginTypeChange = (event) => {
        setInputValue4(event.target.value);

    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getEyeIconClassName = () => {
        if (showPassword) {
          return 'eye-icon active'; // Apply the 'active' class for the glowing effect
        }
        return 'eye-icon';
    };

    const handleLogin = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            adminname: userName,
            adminpassword: userPass,
            companyname: company,
            // Add more parameters as needed
        });
        const url = `http://localhost:3000/company?${queryParams}`;
        // Make the API request
        fetch(url, {
            method: 'GET', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then((data) => {
                // Handle the API response data here
               // console.log(data);
                handleLoginTrue( data)

                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };
    if ( !user.isLoggedIn ) {

        return (
            <>
                <div className={"consoleDisplayInner"}>
                    <p className={"welcomeText"}></p>
                </div>
                <div className={"loginFormHolder"}>
                    <div className={"loginform"}>
                        <h1 className={"welcomeText"}>Login</h1>

                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            placeholder="Enter your username"
                            value={userName}
                            onChange={handleUserNameChange}
                        />

                        <div className='password-container'>
                        <input
                            className="password-field"
                            type={showPassword ? "text" : "password"}
                            id="myInput"
                            placeholder="Enter your password"
                            value={userPass}
                            onChange={handlePassWordChange}
                        />
                        <img
                            src={eyeballIcon}
                            alt="Eye Icon"
                            width="20"
                            height="15"
                            className={getEyeIconClassName()}
                            onClick={togglePasswordVisibility}
                        />
                        </div>

                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            placeholder="Enter your company name"
                            value={company}
                            onChange={handleCompanyNameChange}
                        />
                       
                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            placeholder="Enter your login type (admin or emp)"
                            value={loginType}
                            onChange={handleLoginTypeChange}
                        />
                        <button
                            onClick={handleLogin}
                            style={{
                                backgroundColor: '#007bff', // Background color
                                color: 'white', // Text color
                                border: 'none', // Remove border
                                borderRadius: '4px', // Add border radius
                                padding: '10px 20px', // Add padding
                                cursor: 'pointer', // Add cursor style
                                width: '75%', // Set the width to 50% of its parent
                                margin: '50px auto 0', // 20px top margin, auto horizontal centering, 0 bottom margin
                            }}
                            >
                            Login
                        </button>
                        <div>
                            <a href="#" className="forgot-password-link">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </div>

            </>

        );
    } else {
        return adminDash( {user})
    }
};



export default Home;