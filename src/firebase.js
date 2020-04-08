import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB172PE0IKZfUK4KAeo1xC9YQBvG0kO3Sc",
    authDomain: "lunch-rush-4d021.firebaseapp.com",
    databaseURL: "https://lunch-rush-4d021.firebaseio.com",
    projectId: "lunch-rush-4d021",
    storageBucket: "lunch-rush-4d021.appspot.com",
    messagingSenderId: "985586640739",
    appId: "1:985586640739:web:881af6c5276a70c0889556",
    measurementId: "G-K8LLX69QW7"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
