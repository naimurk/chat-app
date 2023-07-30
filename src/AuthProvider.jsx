import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const [currentUser, setCurrentUser]=useState({})
    useEffect(()=> {
      const unsubscribe =  onAuthStateChanged(auth,(user)=> {
          setCurrentUser(user)
          console.log(user);
        })
        return ()=> {
            unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;