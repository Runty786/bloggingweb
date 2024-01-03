// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWPFMgi6ZQGNGh-VVmz2dU7QGBD1-gp0I",
  authDomain: "myblog-9d579.firebaseapp.com",
  projectId: "myblog-9d579",
  storageBucket: "myblog-9d579.appspot.com",
  messagingSenderId: "315326921861",
  appId: "1:315326921861:web:a0142db9466dba064abdec"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };