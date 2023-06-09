import {useContext, createContext, useState, useEffect} from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword, 
     signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from "firebase/auth";


const UserAuthContext = createContext();

export function UserAuthContextProvider({children}){

    const [user,setUser]=useState({});

    function signup(email,password){
       return  createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }
    function signInwithgoogle(){
        const googleProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    }
    function resetPassword(email){
        return sendPasswordResetEmail(auth,email);
    }
    //to let component know firebase if user is logged in or not we use onAuthStateChanged as we have to use it only once we use useEffect with no/empty dependency array
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>(
                setUser(currentUser)
        ))
        return (()=>{unsubscribe();})
    })

    return(
        <UserAuthContext.Provider value={{user,signup,login,logout,signInwithgoogle,resetPassword}}>
            {children}
        </UserAuthContext.Provider>

    )
}
export function useUserAuthContext(){
    return useContext(UserAuthContext);
}
