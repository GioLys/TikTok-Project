
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDI2uQ9kBS2vPrnu58hQUW3U4McNn5dKic",
  authDomain: "tiktok---jornada-2fcf1.firebaseapp.com",
  projectId: "tiktok---jornada-2fcf1",
  storageBucket: "tiktok---jornada-2fcf1.appspot.com",
  messagingSenderId: "947148971070",
  appId: "1:947148971070:web:a5a615c655eee0efff856f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;