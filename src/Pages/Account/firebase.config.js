import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl4rZJq_LfIsrhOCMQV9uxmkTG-UW9_z0",
  authDomain: "wiraafirebase.firebaseapp.com",
  projectId: "wiraafirebase",
  storageBucket: "wiraafirebase.appspot.com",
  messagingSenderId: "738534680398",
  appId: "1:738534680398:web:a5e0eab23f61dc1f2fa01f",
  measurementId: "G-3QYRQ0NRKT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
