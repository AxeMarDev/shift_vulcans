import React, { useState } from 'react';
import {queries} from "@testing-library/react";
import eyeballIcon from '../Assets/eye-solid.png'; // Relative import path
import ShiftLogo from './images/shiftlogo.png'
import InputLabel from "../components/InputLabel";

function adminDash({user}){
    return(
        <div className={"consoleDisplayOuter"}>
            <div className={"consoleDisplayInner2"}>
                <p className={"welcomeText"}> welcome to {user.company} dashboard</p>
            </div>
        </div>

    )

}

function InputButton(handleWhat, text, passwordsMatch) {

        return (
        <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleWhat}>
            {text}
        </button>
        );
    
  }
// do not pass as object-fixed in precious push


function Signup({handleSignup,
                    credentials, SetCredentials,
                    passwordsMatch,setPasswordsMatch,
                    handleSetAccount, onFileChange}){

    const handleUpdateCredentials = (event, stringIn) =>{
        SetCredentials( {...credentials, [stringIn]:event.target.value })
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

                <InputLabel label={"userName"} value={credentials.userName} handleWhat={handleUpdateCredentials} position={1} />
                <InputLabel label={"password"} value={credentials.password} handleWhat={handleUpdateCredentials} position={2} type={'password'} />
                <InputLabel label={"confirmPassword"} value={credentials.confirmPassword} handleWhat={handleUpdateCredentials} position={3} type={'password'}/>
                <InputLabel label={"companyName"} value={credentials.companyName} handleWhat={handleUpdateCredentials} position={3} />
                <InputLabel label={"name"} value={credentials.name} handleWhat={handleUpdateCredentials} position={3} />
                <input type="file"  onChange={onFileChange}/>
                {InputButton(handleSignup, "Create Account",passwordsMatch)}

                <div className={"flex mb-4 content-center justify-center"}>
                    <button className="text-blue-500 " onClick={handleSetAccount}>Or Login</button>
                </div>
            </div>
        </>
    )
}

function Login({handleLogin,
                   credentials, SetCredentials,
                   showPasswordLogin,setShowPasswordLogin,handleSetAccount}){


    const handleFieldChange = (event, stringIn) => {
        SetCredentials({ ...credentials, [stringIn]: (event.target.value) })
    };

    const togglePasswordVisibility = () => {
        setShowPasswordLogin(!showPasswordLogin);
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
            <InputLabel label={"userName"} value={credentials.userName} handleWhat={handleFieldChange} position={1} />
            <InputLabel label={"password"} value={credentials.password} handleWhat={handleFieldChange} position={2} type={'password'} showPassword={showPasswordLogin} togglePasswordVisibility={togglePasswordVisibility}/>
            <InputLabel label={"companyName"} value={credentials.companyName} handleWhat={handleFieldChange} position={3} />

            <div className={"flex mb-4 content-center justify-center"}>
                <button href="#" className="text-blue-500 ">Forgot Password?</button>
            </div>
            {InputButton(handleLogin, "Login")}

            <div className={"flex mb-4 content-center justify-center"}>
                <button className="text-blue-500 " onClick={handleSetAccount}>Or Create Account</button>
            </div>


        </div>
    )
}
function Congrats({ handleSetAccount, setCreateAccountSuccess, goToDashboard}) {
    const handleButtonClick = () => {
        handleSetAccount();
        setCreateAccountSuccess(false);
      };
    const handleButtonClick2 = () => {
        setCreateAccountSuccess(false);
        goToDashboard();
      };
    return (
      <div className={"pl-4 pr-4 w-96 rounded-2xl bg-loginHolder flex flex-col justify-center content-center"}>
        <div className={"flex  content-center justify-center"}>
          <div className={"mt-5 mb-5 w-40  "}>
            <img src={ShiftLogo} className={"w-auto "} />
          </div>
        </div>
        <div className={"flex mb-4 content-center justify-center"}>
          <h1 className={"font-bold text-white"}>Congratulations!</h1>
        </div>
        <p className={"welcomeText"}>Your account has been created successfully.</p>
        <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleButtonClick}>
          Go to Login
        </button>
        <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleButtonClick2}>
          Go to Dashboard
        </button>
      </div>
    );
  }
function Home( {user, handleLoginTrue}) {

    // an idea for created a create account would be to add a state variable bounded to 'islogged' which would track if
    // the user wants to log in or create account.
    // if the user presses the create account nane. the state variable will change and we can have a conditional in the
    // html return of the Home() function that watches this

    // a state var that will track if the user wants to create account or log inm
    const [createAccount , setCreateAccount] = useState(false)
    const [createAccountSuccess , setCreateAccountSuccess] = useState(false);
    const [image, setImage] = useState("");
    const onFileChange = (e) => {
        const file = e.target.files[0]
        var value = ''

        if (file){
            const reader = new FileReader();
            reader.onload = (e) => {
                value = e.target.result.split(',')[1];
                setImage(value);
            };
            reader.readAsDataURL(file);
        }
    };

    const [ credentials={
        name: "", userName: "", password: "",
        companyName: "", showPassword: false, showConfirmPassword: false,
        confirmPassword: "",}, SetCredentials] = useState()
    const [passwordsMatch, setPasswordsMatch] = useState(false); // this can be handles by backend, by comparing strings and sending 400 code
    const [newvalues, setNewValue] =useState({
        name: "", userName: "", password: "",
        companyName: "", showPassword: false, showConfirmPassword: false,
        confirmPassword: "",})

    const handleSetAccount = () =>{
        setCreateAccount(!createAccount)
        let currentValues = credentials;
        SetCredentials(newvalues)
        setNewValue(currentValues)
    }

    const handleLogin = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            username: credentials.userName,
            password: credentials.password,
            companyName: credentials.companyName,
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
                handleLoginTrue( data)


                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };
    const goToDashboard = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            username: credentials.userName,
            password: credentials.password,
            companyName: credentials.companyName,
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
                console.log(data);
                handleLoginTrue( data)
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };


    const handleSignup = () => {
        // Construct the request data

        const queryParams = new URLSearchParams({
            name: credentials.name,
            username: credentials.userName,
            password: credentials.password,
            companyName: credentials.companyName,
        });
        const url = `http://localhost:3000/company?${queryParams}`;
        // Make the API request
        fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {userImage: image}
            )
        })
            .then((response)=> response.json() )
            .then((data) => {
                console.log("here")
                handleLogin()

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
                        {createAccountSuccess ? (Congrats({handleSetAccount, setCreateAccountSuccess, goToDashboard})):
                        !createAccount ? (
                            Login({
                                handleLogin,
                                credentials, SetCredentials,
                                handleSetAccount})):(
                            Signup({
                                handleSignup,
                                credentials, SetCredentials,
                                passwordsMatch,setPasswordsMatch,
                                handleSetAccount,onFileChange}))}
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