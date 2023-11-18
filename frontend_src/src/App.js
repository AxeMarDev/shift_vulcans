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


function App() {
    
    const [backendAPI, setBackendAPI ] = useState( new RailsBackend() )

    let [activeButton, setActiveButton] = useState(0)

    return (
        <Router>
            <div className={screenDimension( "flex",  "flex-col"," flex-row ", 700).style}>

                <Navbar user={backendAPI.auth} >
                    <NavButton title={"employee"} to={"/employees"} className={"text-black "} isActive={[activeButton,0]} changeActive={setActiveButton}/>
                    <NavButton title={"settings"} to={"/admin"} className={"text-black"} isActive={[activeButton,1]} changeActive={setActiveButton}/>
                    <NavButton title={"calendar"} to={"/calendar"} className={"text-black"} isActive={[activeButton,2]} changeActive={setActiveButton}/>
                    <NavButton title={"Pay Calculator"} to={"/paycalc"} className={"text-black"} isActive={[activeButton,3]} changeActive={setActiveButton}/>
                    <NavButton title={"signout"} to={"/"} className={"text-black"} isActive={[activeButton,4]} changeActive={setActiveButton}/>
                </Navbar>

                { backendAPI.auth.isLoggedIn ? (

                    <div className={ screenDimension( `w-full h-auto bg-white`,  "","",700 ).style }>
                        <Routes>
                            <Route exact path='/' element={<Home setBackendAPI={setBackendAPI} backendAPI={backendAPI}/>} />
                            <Route path='/employees' element={<Employees backendAPI={backendAPI}/>} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/calendar' element={<Cal />} />
                            <Route path='/paycalc' element={<Calc />} />
                        </Routes>
                    </div>
                ): (
                    <div className={`w-full pl-0 h-screen`}>
                        <Routes>
                            <Route exact path='/' element={<Home setBackendAPI={setBackendAPI} backendAPI={backendAPI} />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
