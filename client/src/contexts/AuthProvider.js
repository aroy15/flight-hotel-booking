import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update Profile
    const updateUserProfile = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
        })
    }

    // Verify Email
    const verifyEmail = () =>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    // Google Signin
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // login with password
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Forget Password
    const resetPassword = email =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // Logout
    const logout = () =>{
        setLoading(true);
        localStorage.removeItem('flight-hotel-token')
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })

        return () => unsubscribe
    },[])

    const authInfo  = {
        createUser,
        updateUserProfile,
        verifyEmail,
        signInWithGoogle,
        resetPassword,
        login,
        logout,
        loading,
        setLoading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;