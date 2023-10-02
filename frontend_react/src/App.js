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

function App() {
    // this will keep a state-driven array of employee
    const [employees ={
        items: [],
    }, setEmployees] = useState();

    const [user={
        username: "no user active",
        password: "no pass word",
        company: "nocompany",
        isLoggedIn: false,
    }, setUser] = useState();


    const handleEmployeeList = (data)=>{
        setEmployees({
            items: data,
        });
    }
    // Function to update isLoggedIn state
    const handleLoginTrue = (data) => {
        // Perform your login logic here and update the user state accordingly

        console.log(data.adminpassword)
        setUser({
            isLoggedIn: true,
            username: data.adminname,
            password: data.adminpassword,
            company: data.name,
        });

    };

    return (
        <Router>
            <div class={"router"}>
                <div class={"navbarRoot"}>
                    <Navbar user={user} />
                </div>
                <div class={"consoleroot"}>
                    <Routes>
                        <Route exact path='/' element={<Home user={user} handleLoginTrue={handleLoginTrue}/>} />
                        <Route path='/about' element={<About user={user} employees={employees} handleEmployeeList={handleEmployeeList}/>} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </div>

        </Router>
    );
}

export default App;
