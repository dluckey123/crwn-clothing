import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4Ax225MU_PL4jK2Sdfwv-5pol4lGstg4",
    authDomain: "crwn-db-751d5.firebaseapp.com",
    databaseURL: "https://crwn-db-751d5-default-rtdb.firebaseio.com",
    projectId: "crwn-db-751d5",
    storageBucket: "crwn-db-751d5.appspot.com",
    messagingSenderId: "980943255962",
    appId: "1:980943255962:web:1f858d8d5b7108a3f6e223"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {    
        console.log('error creating user', error.message);
      }

    }

    return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;