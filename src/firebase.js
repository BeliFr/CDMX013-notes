// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfkN46c3OIkwY9_ZdVlMuuUjQRe2x-gc",
  authDomain: "u-note-belifr.firebaseapp.com",
  projectId: "u-note-belifr",
  storageBucket: "u-note-belifr.appspot.com",
  messagingSenderId: "270157630481",
  appId: "1:270157630481:web:a8e16179a77507c46875b0",
  measurementId: "G-ED6CNM0FX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export function uploadFile(file){
  const storageRef = ref(storage);
  uploadBytes(storageRef, file).then(snapshot => {
    console.log(snapshot)
  })
}
