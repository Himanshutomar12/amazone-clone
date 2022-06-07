// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { firebase, initializeApp } from "firebase/app";
import {
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKHapw8_Ha0T9Bhvvar07w9lE57XnYhXA",
  authDomain: "clone-1aab8.firebaseapp.com",
  projectId: "clone-1aab8",
  storageBucket: "clone-1aab8.appspot.com",
  messagingSenderId: "808642805455",
  appId: "1:808642805455:web:e1e8b9520594e77b2a41ba",
  measurementId: "G-TJFZQDGX5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore();
//register
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//log in
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// invoked when user sign in, signOut or register
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setCurrentUser(user));
  });
  return currentUser;
}

//handle Authentication
export function logout() {
  return signOut(auth);
}

//
