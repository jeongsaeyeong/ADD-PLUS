import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDBJlujRjQySZNo5ngriqVmQWBfVNS3ZJs",
    authDomain: "add-plus-d208e.firebaseapp.com",
    projectId: "add-plus-d208e",
    storageBucket: "add-plus-d208e.appspot.com",
    messagingSenderId: "807979576334",
    appId: "1:807979576334:web:ce557876cc21a1d7b8605f"
};

firebase.initializeApp(firebaseConfig)

export default firebase;