import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const {
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_BUCKET,
  FIREBASE_APP_ID,
  FIREBASE_SENDER_ID,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(firebaseApp);

export default firebaseDb;
