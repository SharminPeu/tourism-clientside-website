
import initAuth from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
  // createUserWithEmailAndPassword,
} from "firebase/auth";


import { useEffect, useState } from "react";

initAuth();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        
        // console.log(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // const uid = user.uid;
      }
       else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleGithubLogin = () => {
  //   signInWithPopup(auth, githubProvider)
  //     .then((result) => {
  //       setUser(result.user);
  //       setError("");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  // const handleUserRegister = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };

  // const handleUserLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };

  return {
    googleSignIn,
    user,
    logOut
  };
};

export default useFirebase;