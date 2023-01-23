import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDl0RZm6zjintUWMhU5D6YutcWYxj6vbBM",
  authDomain: "chat-app-d0f9e.firebaseapp.com",
  projectId: "chat-app-d0f9e",
  storageBucket: "chat-app-d0f9e.appspot.com",
  messagingSenderId: "18193052078",
  appId: "1:18193052078:web:96b47443e1a2acbc5e583f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
