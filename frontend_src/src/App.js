import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Admin from './pages/admin';
import Login from './pages/login';
import { useState } from 'react';
import RailsBackend from "./api/RailsBackend";

function sideBarAppear(user){
    return(
        <div className={"navbarRoot"}>
            <Navbar user={user} />
        </div>
    )
}

function App() {

    const [employees , setEmployees ] = useState({ items: [] })
    const [backendAPI, setBackendAPI ] = useState( new RailsBackend() )

    const handleEmployeeList = (data)=>{
        setEmployees({
            items: data,
        });
    }

    return (
        <Router>
            <div className={"router"}>

                { backendAPI.auth.isLoggedIn ? ( sideBarAppear(backendAPI.auth)) : (<></>) }

                { backendAPI.auth.isLoggedIn ? (
                    <div className={`w-full pl-80  h-auto`}>
                        <Routes>
                            <Route exact path='/' element={<Home setBackendAPI={setBackendAPI} backendAPI={backendAPI}/>} />
                            <Route path='/about' element={<About backendAPI={backendAPI} employees={employees} handleEmployeeList={handleEmployeeList}/>} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/login' element={<Login />} />
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
