// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8OajKiG_VUhCSNB0s9gZijvP2LfhQ3_4",
    authDomain: "challenge-34e47.firebaseapp.com",
    projectId: "challenge-34e47",
    storageBucket: "challenge-34e47.appspot.com",
    messagingSenderId: "19856366916",
    appId: "1:19856366916:web:3c0bf1299ee0e9cf05cb11",
    measurementId: "G-PK5C10TV4B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};