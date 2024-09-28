// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmJIkUgewRXQQ_rAiuGS6JfWsHUh1b2w",
  authDomain: "job-portal-demo-app.firebaseapp.com",
  projectId: "job-portal-demo-app",
  storageBucket: "job-portal-demo-app.appspot.com",
  messagingSenderId: "91124036991",
  appId: "1:91124036991:web:22072d4d61514d4027964a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;