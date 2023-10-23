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


function sideBarAppear(user){
    return(
        <div className={"navbarRoot"}>
            <Navbar user={user} />
        </div>
    )
}
function App() {
    // this will keep a state-driven array of employee
    const [employees ={
        items: [],
    }, setEmployees] = useState();

    // this will keep a state-driven information of admin user
    const [user={
        username: "no user active",
        token: "no token",
        company: "nocompany",
        isLoggedIn: false,
    }, setUser] = useState();

    // this will update the state driver employee list information. Without this it would not update views
    const handleEmployeeList = (data)=>{
        setEmployees({
            items: data,
        });
    }

    // this will update the state drive for loggin admin in . Without this it would not update views
    const handleLoginTrue = (data) => {
        // Perform your login logic here and update the user state accordingly

        //npmconsole.log(data.adminpassword);

        setUser({
            isLoggedIn: true,
            token: data.token,
            username: data.employee.name,
            company: data.company.name,
        });

    };

    return (
        <Router>
            <div className={"router"}>

                { user.isLoggedIn ? ( sideBarAppear(user)) : (<></>) }

                { user.isLoggedIn ? (
                    <div className={`w-full pl-80  h-auto`}>
                        <Routes>
                            <Route exact path='/' element={<Home user={user} handleLoginTrue={handleLoginTrue}/>} />
                            <Route path='/about' element={<About user={user} employees={employees} handleEmployeeList={handleEmployeeList}/>} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                    </div>
                ): (
                    <div className={`w-full pl-0 h-screen`}>
                        <Routes>
                            <Route exact path='/' element={<Home user={user} handleLoginTrue={handleLoginTrue}/>} />
                        </Routes>
                    </div>
                )}
            </div>

        </Router>
    );
}

export default App;