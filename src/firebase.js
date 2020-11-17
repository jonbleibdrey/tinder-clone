import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyATd3pByGT_JMKvyIUIGvAWFRZWLFlbsso",
    authDomain: "tinder-clone-9d53e.firebaseapp.com",
    databaseURL: "https://tinder-clone-9d53e.firebaseio.com",
    projectId: "tinder-clone-9d53e",
    storageBucket: "tinder-clone-9d53e.appspot.com",
    messagingSenderId: "596722111312",
    appId: "1:596722111312:web:f49de0ac066872994ad255",
    measurementId: "G-87FBN3T1H7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;