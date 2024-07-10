import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDB-yoFvXrCO2_TOx0zBr4bwRwLh6v-p0I",
  authDomain: "hitforfun-77f9b.firebaseapp.com",
  projectId: "hitforfun-77f9b",
  storageBucket: "hitforfun-77f9b.appspot.com",
  messagingSenderId: "37222581409",
  appId: "1:37222581409:web:8956d432b2a93098c35ce0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };