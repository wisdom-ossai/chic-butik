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
};

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userDocSnapshot = await userRef.get();
    console.log(userDocSnapshot.exists)
    if (!userDocSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try { 
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('there was an error creating user', e.message);
        }
    };
    return userRef;
}
firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, signInWithGoogle, createUserProfileDocument , firebase as default};   