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

export const addCollectionAndDocuments = async (collectionKey, documents) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    documents.forEach(val => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, val);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});
}

export const convertDirectoriesSnapshotToMap = directoriesSnapshot => {
    const transformedDirectory = directoriesSnapshot.docs.map(doc => {
        const { title, imageUrl, linkUrl } = doc.data();

        return {
            id: doc.id,
            title,
            imageUrl,
            linkUrl
        }
    });
    return transformedDirectory;
};

firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, signInWithGoogle, createUserProfileDocument , firebase as default};   