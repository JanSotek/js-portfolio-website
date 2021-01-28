import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_APP_ID,
    appId: `1:${process.env.REACT_APP_APP_ID}:web:95c7c9c56b2f654935626a`,
    databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`
};

firebase.initializeApp(config);

export default firebase;