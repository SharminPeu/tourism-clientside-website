import React from "react";
import "./Login.css";
// import useFirebase from "./../../Hook/useFirebase";
// import useFirebase from "../hooks/useFirebase";
import { Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn,error } = useAuth();
  // console.log(handleGoogleLogin());

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
        {error}
      </div>
        <div className="box border border d-flex justify-content-center align-items-center">
          <button onClick={googleSignIn} className="btn w-75  btn-warning">
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



