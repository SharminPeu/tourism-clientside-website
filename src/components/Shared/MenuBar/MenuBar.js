import React from 'react';
// import './Menubar.css'
import './MenuBar.css'

import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

//set  all options in menubar
const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container menubar-container mt-3 mb-2">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex justify-content-center  ">
                    <span className="navbar-brand text-white  fw-bold ms-2" >TourHub</span>
                </div>
                <div className="collapse navbar-collapse  d-flex align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Link to="/home" className="items text-white fw-bold">
                            <li>Home</li>
                        </Link>
                        {/* <Link to="/booking/bookingId" className="items text-white fw-bold">
                            <li>Book Package</li>
                        </Link> */}

                        {/* <Link to="/register" className="items text-white fw-bold">
                            <li>Register</li>
                            
                        </Link> */}
            
                        
                           
                           {user.email &&
                               
                                <Link to="/myOders" className="items text-white fw-bold">
                            <li>My Oders</li>
                        </Link> }
{user.email &&
    <Link to="/addService" className="items text-white fw-bold">
                           <li>Add Service</li>
                       </Link>
}
{
    user.email &&
        <Link to="/manageOders" className="items text-white fw-bold">
                               <li>Manage All Oders</li>
                           </Link>
    
}
{user.email && <span className="fw-bold mt-2" style={{color:'lightblue'}}>{user.displayName} </span>}

{user.email ?

    <button className=" mx-2 border-0 btn btn-light" onClick={logOut}>Log Out </button>
    :
    <Link to="/login" className="items text-white fw-bold">
        <li>Login</li>
    </Link>
}
                            
                    
                           
                        
                        {/* <Link to="/doctors" className="items text-white fw-bold">
                            <li>Doctors</li>
                        </Link> */}

                        {/* <Link to="/appointment" className="items text-white fw-bold">
                            <li>Appointment</li>
                        </Link> */}

                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default MenuBar;