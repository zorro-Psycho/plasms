import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyCaPBCckYOpqD1p3gTQGhlkdcsQ0u1POak",
  authDomain: "plasms.firebaseapp.com",
  projectId: "plasms",
  storageBucket: "plasms.appspot.com",
  messagingSenderId: "626489436199",
  appId: "1:626489436199:web:91238be5de83548fb70602",
  measurementId: "G-EC3Z7KP5BD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db to use them in other files
export { auth, db };