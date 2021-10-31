
import initAuth from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile
  // createUserWithEmailAndPassword,
} from "firebase/auth";


import { useEffect, useState } from "react";

initAuth();

const useFirebase = () => {
  const [user , setUser]=useState({})
  const [isLoading , setIsLoading] =useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth , (user)=> {
       console.log(user);
         if(user){
              
             setUser(user)
         } else{
             setUser({})
         }
         setIsLoading(false)
    })
     return ()=> unsubscribe()
},[])


 const signInWithGoogle=()=> {
  return  signInWithPopup(auth, googleProvider)

 }
 const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name

  }).then(() => {
    const newUser={...user, displayName: name} // recommend
   setUser(newUser)
    
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

 const logOut=()=> {
   setIsLoading(true);
     console.log("logouttttt");
    signOut(auth)
    .then(() => {
        setUser({})
      }).finally(()=>setIsLoading(false))
  // const [user, setUser] = useState({});
  // const [error, setError] = useState("");

  // const googleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       setUser(result.user);
        
  //       // console.log(result.user);
  //       setError("");
  //     })
  //     .catch((error) => setError(error.message));
  // };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //       // const uid = user.uid;
  //     }
  //      else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  // const logOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({});
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
    }

  return {
    user,setUser,
    signInWithGoogle,
    isLoading,
    setIsLoading,
    logOut,
    updateName
  };
};

export default useFirebase;