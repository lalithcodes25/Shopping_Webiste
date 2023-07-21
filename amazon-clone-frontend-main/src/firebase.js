import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh6qzlsPkboEsYEPlSS_Dzc8klB1QfQpE",
  authDomain: "clone-f81bf.firebaseapp.com",
  projectId: "clone-f81bf",
  storageBucket: "clone-f81bf.appspot.com",
  messagingSenderId: "20161618455",
  appId: "1:20161618455:web:aa73dd80d18dedbc7f3252",
  measurementId: "G-2B40RKH9DB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};