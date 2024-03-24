import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAppe958HHIEnfE4_0RZzsjf8d3mp3ZWUg",
  authDomain: "chat-e5bdf.firebaseapp.com",
  projectId: "chat-e5bdf",
  storageBucket: "chat-e5bdf.appspot.com",
  messagingSenderId: "252892635367",
  appId: "1:252892635367:web:0dd9486ee567c962e94242"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();