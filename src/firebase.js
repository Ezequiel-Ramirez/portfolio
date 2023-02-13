
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0tMij29qN8c7qwrRqZhsvyDNiVXSaT78",
  authDomain: "portfolio-758ab.firebaseapp.com",
  projectId: "portfolio-758ab",
  storageBucket: "portfolio-758ab.appspot.com",
  messagingSenderId: "313450693636",
  appId: "1:313450693636:web:01ab0fcb6a47c941dc6151"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);