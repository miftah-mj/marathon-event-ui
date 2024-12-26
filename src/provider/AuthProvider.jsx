import AuthContext from "../context/AuthContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import PropTypes from "prop-types";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = async (profile) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, profile);
            setUser({ ...auth.currentUser, ...profile });
        }
    };

    const signinWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Error signing in with Google", error);
        } finally {
            setLoading(false);
        }
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios
                    .post("https://marathon-event-api.vercel.app/jwt", user, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log("login", res.data);
                        setLoading(false);
                    });
            } else {
                axios
                    .post(
                        "https://marathon-event-api.vercel.app/logout",
                        {},
                        { withCredentials: true }
                    )
                    .then((res) => {
                        console.log("logout", res.data);
                        setLoading(false);
                    })
                    .catch((error) => console.log(error));
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signinUser,
        updateUserProfile,
        signinWithGoogle,
        signOutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
