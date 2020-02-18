import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBiJsLAUzf-f4fSJABPAJNO-7z5H7R_tTo",
    authDomain: "just-clock-it-83972.firebaseapp.com",
    databaseURL: "https://just-clock-it-83972.firebaseio.com",
    projectId: "just-clock-it-83972",
    storageBucket: "just-clock-it-83972.appspot.com",
    messagingSenderId: "312243184818",
    appId: "1:312243184818:web:ad8d64abdfb9ca77af95ab",
    measurementId: "G-CJBX2FJNE1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;