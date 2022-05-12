import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAACCs6WgEAdChSsZ_4vwI_Id79WC0Njbo",
  authDomain: "novel-app-26cd5.firebaseapp.com",
  databaseURL: "https://novel-app-26cd5.firebaseio.com",
  projectId: "novel-app-26cd5",
  storageBucket: "novel-app-26cd5.appspot.com",
  messagingSenderId: "561782774127",
  appId: "1:561782774127:web:8fda2427767f833729b09a",
  measurementId: "G-PVMGFZN1XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
