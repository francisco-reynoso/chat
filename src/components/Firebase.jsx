import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-_da5A9HxeiPMRfl67oB9C2mnLb1pr6g",
    authDomain: "chat-react-9b263.firebaseapp.com",
    projectId: "chat-react-9b263",
    storageBucket: "chat-react-9b263.appspot.com",
    messagingSenderId: "604713310999",
    appId: "1:604713310999:web:cc5b2d9256aff97ad27552"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db= getFirestore(app);