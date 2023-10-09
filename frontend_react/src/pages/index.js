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
function Signup({handleSignup,
                    name, setName,
                    userName,setInputValue,
                    userPass,setInputValue2,
                    company,setInputValue3,
                    showPassword,setShowPassword}){

    const handleUserNameChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePassWordChange = (event) => {
        setInputValue2(event.target.value);

    };
    const handleCompanyNameChange = (event) => {
        setInputValue3(event.target.value);

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    return(
        <>
            <div className={"loginform"}>
                <h1 className={"welcomeText"}>Signup</h1>

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
                    placeholder="Enter your  name"
                    value={name}
                    onChange={handleNameChange}
                />

                <button
                    onClick={handleSignup}
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
        </>
    )
}

function Login({handleLogin,
                   userName,setInputValue,
                   userPass,setInputValue2,
                   company,setInputValue3,
                   showPassword,setShowPassword}){


    const handleUserNameChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePassWordChange = (event) => {
        setInputValue2(event.target.value);

    };
    const handleCompanyNameChange = (event) => {
        setInputValue3(event.target.value);

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
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
    )
}
function Home( {user, handleLoginTrue}) {

    // an idea for created a create account would be to add a state variable bounded to 'islogged' which would track if
    // the user wants to log in or create account.
    // if the user presses the create account nane. the state variable will change and we can have a conditional in the
    // html return of the Home() function that watches this

    // a state var that will track if the user wants to create account or log inm
    const [createAccount , setCreateAccount] = useState(false)

    const handleSetAccount = () =>{
        setCreateAccount(!createAccount)
    }

    // Function to handle changes in the input field
    const [userName, setInputValue] = useState('');
    const [userPass, setInputValue2] = useState('');
    const [company, setInputValue3] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');




    const getEyeIconClassName = () => {
        if (showPassword) {
            return 'eye-icon active'; // Apply the 'active' class for the glowing effect
        }
        return 'eye-icon';
    };
    const handleLogin = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            username: userName,
            password: userPass,
            companyName: company,
            // Add more parameters as needed
        });
        const url = `http://localhost:3000/authenticate?${queryParams}`;
        // Make the API request
        fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
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
    const handleSignup = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            name: name,
            username: userName,
            password: userPass,
            companyName: company,
            // Add more parameters as needed
        });
        const url = `http://localhost:3000/company?${queryParams}`;
        // Make the API request
        fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then((data) => {
                // Handle the API response data here
                // console.log(data);
                handleLogin()
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
                    { !createAccount?
                        Login({
                        handleLogin,
                        userName,setInputValue,
                        userPass,setInputValue2,
                        company,setInputValue3,
                        showPassword,setShowPassword}):
                        Signup({
                        handleSignup, name, setName,
                        userName,setInputValue,
                        userPass,setInputValue2,
                        company,setInputValue3,
                        showPassword,setShowPassword})}
                </div>
                <button onClick={handleSetAccount}>switch</button>
            </>
        );
    } else {
        return (
            adminDash({user})
        );
    }
};



export default Home;