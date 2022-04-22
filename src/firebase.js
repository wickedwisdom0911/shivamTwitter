import firebase from "firebase";

// Required for side-effects
const firebaseConfig = {
  apiKey: "AIzaSyDHqY3AiVIF-m5aTaOPZte8WlCtUFbEyNw",
  authDomain: "twitter-707a8.firebaseapp.com",
  databaseURL: "https://twitter-707a8-default-rtdb.firebaseio.com",
  projectId: "twitter-707a8",
  storageBucket: "twitter-707a8.appspot.com",
  messagingSenderId: "6747414358",
  appId: "1:6747414358:web:bddd79fd8e9775cc8580f7",
  measurementId: "G-FK0NM0L90S"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;