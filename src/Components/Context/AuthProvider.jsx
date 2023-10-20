/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        return signOut(auth)
    }
    
    const singWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleUpdateProfile = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        logout,
        handleUpdateProfile,
        singWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;