import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5tF5jx7RcFotGYi5sibTMHi6mr2iDzZs",
  authDomain: "diginote-c48de.firebaseapp.com",
  projectId: "diginote-c48de",
  storageBucket: "diginote-c48de.appspot.com",
  messagingSenderId: "609614108235",
  appId: "1:609614108235:web:dd96aeb23f6984241b9fce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
