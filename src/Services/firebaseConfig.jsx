import React from "react";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDb_LTa-HulnI8qnwpCRUfu6VLtVUwnAKA",
  authDomain: "database-chocomel.firebaseapp.com",
  projectId: "database-chocomel",
  storageBucket: "database-chocomel.appspot.com",
  messagingSenderId: "285491852643",
  appId: "1:285491852643:web:bd4c526b55d8b67615cf56"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export { db };