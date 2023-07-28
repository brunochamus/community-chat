import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCwQQmahTUopD24vh746B-R4SBFMQVtPak",
    authDomain: "chat-app-b72c9.firebaseapp.com",
    projectId: "chat-app-b72c9",
    storageBucket: "chat-app-b72c9.appspot.com",
    messagingSenderId: "1001241130248",
    appId: "1:1001241130248:web:f8e6dbd4ffc7344d6628bd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
