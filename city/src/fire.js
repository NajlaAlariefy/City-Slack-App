import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCYUv4QtP5FhGS3VgIW_4xCIWWjaX-Az3w",
    authDomain: "city-c17ed.firebaseapp.com",
    databaseURL: "https://city-c17ed.firebaseio.com",
    projectId: "city-c17ed",
    storageBucket: "city-c17ed.appspot.com",
    messagingSenderId: "1086166848691"
};
var fire = firebase.initializeApp(config);
export default fire;

 