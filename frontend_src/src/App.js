import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Employees from './pages/Employees';
import Admin from './pages/admin';
import Cal from './pages/calendar';
import Calc from './pages/paycalc';
import { useState } from 'react';
import RailsBackend  from "./api/RailsBackend";
import screenDimension from "./api/ScreenDimensionStyling";
import NavButton from "./components/NavButton";
import SignOut from "./components/SignOut";
import ResponsiveDiv from "./components/ResponsiveDiv";



function App() {
    
    const [backendAPI, setBackendAPI ] = useState( new RailsBackend() )

    let [activeButton, setActiveButton] = useState(0)

    return (
        <Router>
            <div className={screenDimension( "flex",  "flex-col"," flex-row ", 700).style}>

                <Navbar user={backendAPI.auth} >
                    <NavButton 
                        title={"employee"} 
                        to={"/employees"} 
                        className={"text-black "} 
                        isActive={[activeButton,0]} 
                        changeActive={setActiveButton}
                    />
                    <NavButton 
                        title={"settings"} 
                        to={"/admin"} 
                        className={"text-black"} 
                        isActive={[activeButton,1]} 
                        changeActive={setActiveButton}
                    />
                    <NavButton 
                        title={"calendar"} 
                        to={"/calendar"} 
                        className={"text-black"} 
                        isActive={[activeButton,2]} 
                        changeActive={setActiveButton}
                    />
                    <NavButton 
                        title={"Pay Calculator"}
                        to={"/paycalc"} 
                        className={"text-black"} 
                        isActive={[activeButton,3]} 
                        changeActive={setActiveButton}
                    />
                    <SignOut
                        className={"text-black"} 
                        isActive={[activeButton,4]} 
                        changeActive={setActiveButton}
                        setBackendAPI={setBackendAPI}
                    />
                </Navbar>

                { backendAPI.auth.isLoggedIn ? (
                    <ResponsiveDiv styleBoth={"w-full h-auto bg-white"}>
                        <Routes>
                            <Route path='/' element={<Home setBackendAPI={setBackendAPI} backendAPI={backendAPI}/>} />
                            <Route path='/employees' element={<Employees backendAPI={backendAPI}/>} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/calendar' element={<Cal />} />
                            <Route path='/paycalc' element={<Calc />} />
                        </Routes>
                    </ResponsiveDiv>
                ): (
                    <div className={`w-full pl-0 h-screen`}>
                        <Routes>
                            <Route path='/' element={<Home setBackendAPI={setBackendAPI} backendAPI={backendAPI} />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
