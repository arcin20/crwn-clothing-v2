
import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
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
  
  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
      prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformatin = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformatin
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
}