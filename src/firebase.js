import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAi2-VQ1irrQnZd7SNRuNCq2B-FOPZ76dM",
  authDomain: "nasasapceapp.firebaseapp.com",
  projectId: "nasasapceapp",
  storageBucket: "nasasapceapp.appspot.com",
  messagingSenderId: "482751993604",
  appId: "1:482751993604:web:47d9a69fc7d9dfc263a251",
  databaseURL: "https://nasasapceapp-default-rtdb.firebaseio.com/",
};

// Check if there's already an instance of the Firebase app
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Initialize services
const auth = getAuth();
const storage = getStorage();
const database = getDatabase();

export { auth, storage, database };
