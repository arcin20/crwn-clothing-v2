import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtMIBG9HhjCZRGVXIbONvMZ_E-rlREi78",
    authDomain: "crwn-clothing-db-94699.firebaseapp.com",
    projectId: "crwn-clothing-db-94699",
    storageBucket: "crwn-clothing-db-94699.appspot.com",
    messagingSenderId: "440283521939",
    appId: "1:440283521939:web:130f5174d352c61561be66"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
      prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}