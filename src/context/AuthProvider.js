import React, { createContext } from 'react';
// import useAuth from '../hooks/useAuth';
// import useFirebase from '../hooks/useFirebase.js';\
// import useFirebase from '../hooks/useFirebase';
import useFirebase from '../hooks/useFirebase';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContexts =useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;