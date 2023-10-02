import React, { useState } from 'react';
import {queries} from "@testing-library/react";

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
                        <h1 className={"welcomeText"}> Log in to account</h1>
                        <p className={"formlabel"}>User name</p>
                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                        <p className={"formlabel"}>password</p>
                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            value={userPass}
                            onChange={handlePassWordChange}
                        />
                        <p className={"formlabel"}>company</p>
                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            value={company}
                            onChange={handleCompanyNameChange}
                        />
                        <p className={"formlabel"}>login type (admin or emp)</p>
                        <input
                            className={"enterfield"}
                            type="text"
                            id="myInput"
                            value={loginType}
                            onChange={handleLoginTypeChange}
                        />
                        <button onClick={handleLogin}> login</button>
                    </div>
                </div>

            </>

        );
    } else {
        return adminDash( {user})
    }
};



export default Home;