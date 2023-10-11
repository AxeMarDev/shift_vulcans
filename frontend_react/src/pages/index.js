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

function InputButton(handleWhat, text) {
    return (
      <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleWhat}>
        {text}
      </button>
    );
  }
// do not pass as object-fixed in precious push
function TopInputLabel(label,value, handleWhat, position, type, showPassword, togglePasswordVisibility){

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
            onChange={handleWhat}
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

function Signup({handleSignup,
                    name, setName,
                    userName,setInputValue,
                    userPass,setInputValue2,
                    company,setInputValue3,
                    showPassword,setShowPassword,handleSetAccount, onFileChange}){

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
                    <h1 className={"font-bold text-white"}>Create an account</h1>
                </div>


                {TopInputLabel("enter username", userName,handleUserNameChange,1)}
                {TopInputLabel( "Enter your password",userPass, handlePassWordChange,2,'password', showPassword, togglePasswordVisibility)}
                {TopInputLabel("Enter your company name",company, handleCompanyNameChange,2)}
                {TopInputLabel( "Enter your  name",name, handleNameChange,3)}
                <input type="file"  onChange={onFileChange}/>
                {InputButton(handleSignup, "Create Account")}


                <div className={"flex mb-4 content-center justify-center"}>
                    <button className="text-blue-500 " onClick={handleSetAccount}>Or Login</button>
                </div>


            </div>
        </>
    )
}

function Login({handleLogin,
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
            {TopInputLabel( "Enter your password",userPass, handlePassWordChange,2,'password', showPassword, togglePasswordVisibility)}
            {TopInputLabel( "Enter your company name",company, handleCompanyNameChange,3)}
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
function Home( {user, handleLoginTrue}) {

    // an idea for created a create account would be to add a state variable bounded to 'islogged' which would track if
    // the user wants to log in or create account.
    // if the user presses the create account nane. the state variable will change and we can have a conditional in the
    // html return of the Home() function that watches this

    // a state var that will track if the user wants to create account or log inm
    const [createAccount , setCreateAccount] = useState(false)

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
            body: JSON.stringify(
                {userImage: image}
            )
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
                                showPassword,setShowPassword,handleSetAccount,onFileChange})}

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