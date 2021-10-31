import React from "react";
import "./Login.css";
import { useHistory, useLocation } from 'react-router-dom';

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, setUser, setIsLoading } = useAuth();

  const history = useHistory()
  const location = useLocation()

  const url = location.state?.from || "/home"

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
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

      <div className=" container login login-box w-25 m-auto">
        <div className="  text-danger" style={{ height: "50px" }}>
        </div>

        <div className="box  d-flex justify-content-center align-items-center">
          <button onClick={handleGoogleLogin} className="btn w-75  btn-warning">
            Google Sign In
          </button>

        </div>
      </div>
    </div>

  );
};

export default Login;



