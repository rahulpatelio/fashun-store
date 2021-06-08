import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAgSwXfNKnMeKJ4CI6sLFFGoyes4MwJqz8",
  authDomain: "fashun-db.firebaseapp.com",
  projectId: "fashun-db",
  storageBucket: "fashun-db.appspot.com",
  messagingSenderId: "807073190603",
  appId: "1:807073190603:web:4e20242018741badbe414e",
  measurementId: "G-R2S9WPW40Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



