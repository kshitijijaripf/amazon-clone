import * as firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyD71zQlu7yxkp7ebrEYVF6s91tko-dLPsA",
    authDomain: "clone-f11e6.firebaseapp.com",
    databaseURL: "https://clone-f11e6.firebaseio.com",
    projectId: "clone-f11e6",
    storageBucket: "clone-f11e6.appspot.com",
    messagingSenderId: "922593483693",
    appId: "1:922593483693:web:92c775a755a35d133fdf24",
    measurementId: "G-HDH26JH5GC"
 }
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };