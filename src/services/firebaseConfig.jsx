import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi7WZ2T5Fwzozm1NtGP4WFGl5KjX57bQk",
  authDomain: "ijmsabc-a5e7a.firebaseapp.com",
  projectId: "ijmsabc-a5e7a",
  storageBucket: "ijmsabc-a5e7a.appspot.com", // corrected: ".app" → ".appspot.com"
  messagingSenderId: "488070454964",
  appId: "1:488070454964:web:3bc2480425eefdd48a01e1",
  measurementId: "G-BC529CYLJC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);