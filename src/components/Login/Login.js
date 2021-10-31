import React from "react";
import "./Login.css";
// import useFirebase from "./../../Hook/useFirebase";
// import useFirebase from "../hooks/useFirebase";
import {  useHistory, useLocation } from 'react-router-dom';

import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const { googleSignIn,error } = useAuth();
  const { signInWithGoogle,setUser , setIsLoading} = useAuth();
  
  const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const handleGoogleLogin = () => {
  signInWithGoogle()
    .then((res) => 
      {
        setIsLoading(true)
        setUser(res.user)
        history.push(url)
      }
        )
    .catch((err) => console.log(err))
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div>
      {/* <div className="logo">
        <img
          className="p-2 w-25 mb-5"
          src="https://i.ibb.co/QvMLCj4/Group-1329.png"
          alt=""
        />
      </div> */}
      <div className=" login login-box w-25 m-auto">
      <div className="  text-danger" style={{ height: "50px" }}>
        {/* {error} */}
      </div>
      {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}
      
      
        <div className="box border border d-flex justify-content-center align-items-center">
          <button onClick={handleGoogleLogin} className="btn w-75  btn-warning">
            Google Sign In
          </button>
          {/* <p className="mt-3">
        New user? <Link className="text-decoration-none" to="/register">Register here</Link>
      </p> */}
          
        </div>
      </div>
      </div>
  
  );
};

export default Login;



