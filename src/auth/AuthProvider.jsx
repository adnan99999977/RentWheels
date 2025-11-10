import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  //  Google Sign-In
  const signInViaGoogle = async () => {
    setLoading(true);
    try {
      return await signInWithPopup(auth, provider);
    } finally {
      setLoading(false);
    }
  };

  //  Sign-In via Email & Password
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Register New User
  const registerUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  //  Sign Out
  const logOut = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  // Update Profile
  const updateUser = (photoURL) => {
    if (!auth.currentUser) return Promise.reject("No user logged in");
    return updateProfile(auth.currentUser, { photoURL });
  };

  //  Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    signInViaGoogle,
    signInUser,
    registerUser,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
