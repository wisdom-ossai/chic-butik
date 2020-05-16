import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6JJY_LolFFd1RfQmaGSV0sms6dH20V1k",
    authDomain: "chic-butik.firebaseapp.com",
    databaseURL: "https://chic-butik.firebaseio.com",
    projectId: "chic-butik",
    storageBucket: "chic-butik.appspot.com",
    messagingSenderId: "237163156238",
    appId: "1:237163156238:web:1a523a1833f532e44afd5f",
    measurementId: "G-28862HJKY7"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;   