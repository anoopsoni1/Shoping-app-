import { getFirestore, collection } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from "firebase/auth";

import { initializeApp  } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-1HrVmYkWVQ1kvy2JhTRtRlr4qsy32s",
  authDomain: "shopping-cart-211ec.firebaseapp.com",
  projectId: "shopping-cart-211ec",
  storageBucket: "shopping-cart-211ec.firebasestorage.app",
  messagingSenderId: "795902625117",
  appId: "1:795902625117:web:a6de6636402044eca054b4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();

export default app ;