// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// import { firebaseConfig } from "./global.js";
// import storageService from "./utils/storage.js";

// import databaseService from "./database.js";
// import authService from "./auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBK5Gtu3BrkCvi8RFS_BYP3ZrtyskL8Ry0",
  authDomain: "groupehorelsan.firebaseapp.com",
  projectId: "groupehorelsan",
  storageBucket: "groupehorelsan.appspot.com",
  messagingSenderId: "332245182930",
  appId: "1:332245182930:web:1b21b9454119178600c00b",
  measurementId: "G-B8SK5JH7W7",
  databaseURL:
    "https://groupehorelsan-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
