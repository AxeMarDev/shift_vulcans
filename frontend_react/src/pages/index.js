
import React , { useState } from 'react';
 
const Home = () => {
    // Function to handle changes in the input field
    const [userName, setInputValue] = useState('');
    const [UserPass, setInputValue2] = useState('');
    const [company, setInputValue3] = useState('');
    const handleUserNameChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePassWordChange = (event) => {
        setInputValue2(event.target.value);

    };

    const handleCompanyNameChange = (event) => {
        setInputValue3(event.target.value);

    };

    return (
        <>
            <div className={"consoleDisplayInner"}>
                <p className={"welcomeText"}></p>
            </div>
            <div className={"loginFormHolder"}>
                <div className={"loginform"}>
                    <h1 className={"welcomeText"} > Log in to account</h1>
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
                        value={UserPass}
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
                        value={userName}
                        onChange={handlePassWordChange}
                    />
                </div>
            </div>

        </>

    );
};
 
export default Home;