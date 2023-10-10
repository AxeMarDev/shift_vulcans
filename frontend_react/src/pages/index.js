import React, { useState } from 'react';
import {queries} from "@testing-library/react";
import eyeballIcon from '../Assets/eye-solid.png'; // Relative import path
import ShiftLogo from './images/shiftlogo.png'

function adminDash({user}){
    return(
        <div className={"consoleDisplayOuter"}>
            <div className={"consoleDisplayInner2"}>
                <p className={"welcomeText"}> welcome to {user.company} dashboard</p>
            </div>
        </div>

    )

}

function InputButton(handleWhat){

    return(
        <>
            <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleWhat}> Login </button>
        </>
    )
}
// do not pass as object-fixed in precious push
function TopInputLabel(label,value, handleWhat, position, type){
    return(
        <input
            className=
            { position === 1?(
                "w-full bg-loginHolder h-12 pl-2  text-white rounded-t-lg border-black border-solid border"
            ): position ===2 ? (
                "w-full bg-loginHolder h-12 pl-2 text-white border-t-0 border-solid border-black border"
            ):(
                "w-full bg-loginHolder h-12 pl-2 text-white border-t-0 rounded-b-lg border-black border-solid border"
            ) }

            type={type || "text"} // Set the input type to the specified type or default to "text"
            id="myInput"
            placeholder={label}
            value={value}
            onChange={handleWhat}
        />
    )
}

function Signup({handleSignup,
                    name, setName,
                    userName,setInputValue,
                    userPass,setInputValue2,
                    company,setInputValue3,
                    showPassword,setShowPassword,handleSetAccount}){

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
            <div className={"pl-4 pr-4 w-96 rounded-2xl bg-loginHolder flex flex-col justify-center content-center"}>

                <div className={"flex  content-center justify-center"}>
                    <div className={"mt-5 mb-5 w-40  "}>
                        <img src={ShiftLogo} className={"w-auto "}/>
                    </div>
                </div>
                <div className={"flex mb-4 content-center justify-center"}>
                    <h1 className={"font-bold text-white"}>Sign into account</h1>
                </div>


                {TopInputLabel("enter username", userName,handleUserNameChange,1)}
                {TopInputLabel( "Enter your password",userPass, handlePassWordChange,2,'password')}
                {TopInputLabel("Enter your company name",company, handleCompanyNameChange,2)}
                {TopInputLabel( "Enter your  name",name, handleNameChange,3)}
                {InputButton(handleSignup)}


                <div className={"flex mb-4 content-center justify-center"}>
                    <button className="text-blue-500 " onClick={handleSetAccount}>Create account</button>
                </div>


            </div>
        </>
    )
}

function Login({handleLogin,
                   userName,setInputValue,
                   userPass,setInputValue2,
                   company,setInputValue3,
                   showPassword,setShowPassword, handleSetAccount}){


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
        <div className={"pl-4 pr-4 w-96 rounded-2xl bg-loginHolder flex flex-col justify-center content-center"}>

            <div className={"flex  content-center justify-center"}>
                <div className={"mt-5 mb-5 w-40  "}>
                    <img src={ShiftLogo} className={"w-auto "}/>
                </div>
            </div>
            <div className={"flex mb-4 content-center justify-center"}>
                <h1 className={"font-bold text-white"}>Sign into account</h1>
            </div>



            {TopInputLabel( "enter username", userName,handleUserNameChange,1)}
            {TopInputLabel( "Enter your password",userPass, handlePassWordChange,2,'password')}
            {TopInputLabel( "Enter your company name",company, handleCompanyNameChange,3)}
            {InputButton(handleLogin)}

            <div className={"flex mb-4 content-center justify-center"}>
                <button href="#" className="text-blue-500 ">Forgot Password?</button>
                <p className="text-blue-500 ">*</p>
                <button className="text-blue-500 " onClick={handleSetAccount}>Login</button>
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
                console.log(data);
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
        console.log("hello")
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

                <div className={"  flex w-screen h-screen  justify-center grid content-center "}>
                    <div>
                        { !createAccount?
                            Login({
                                handleLogin,
                                userName,setInputValue,
                                userPass,setInputValue2,
                                company,setInputValue3,
                                showPassword,setShowPassword,handleSetAccount}):
                            Signup({
                                handleSignup, name, setName,
                                userName,setInputValue,
                                userPass,setInputValue2,
                                company,setInputValue3,
                                showPassword,setShowPassword,handleSetAccount})}

                    </div>

                </div>

            </>
        );
    } else {
        return (
            adminDash({user})
        );
    }
};



export default Home;