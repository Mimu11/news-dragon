import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, logOut, signIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

};

export default AuthProvider;