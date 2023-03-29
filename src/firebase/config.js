// package
import firebase from 'firebase/app'
// services
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBX7EVpGRZyQXmAEgPvwHaS-OfXHBofiK0",
    authDomain: "cookingreact-10eb7.firebaseapp.com",
    databaseURL: "https://cookingreact-10eb7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cookingreact-10eb7",
    storageBucket: "cookingreact-10eb7.appspot.com",
    messagingSenderId: "193262719801",
    appId: "1:193262719801:web:9e852c3c75c03c59448ee8"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

//   init services
const projectFirestore = firebase.firestore()

export { projectFirestore }