import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4Ax225MU_PL4jK2Sdfwv-5pol4lGstg4",
    authDomain: "crwn-db-751d5.firebaseapp.com",
    projectId: "crwn-db-751d5",
    storageBucket: "crwn-db-751d5.appspot.com",
    messagingSenderId: "980943255962",
    appId: "1:980943255962:web:1f858d8d5b7108a3f6e223"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;