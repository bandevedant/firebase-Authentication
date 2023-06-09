import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkE0xi0ntJe97weAqoOn9_ga6Sn_E5eJQ",
  authDomain: "auth-page-4a1de.firebaseapp.com",
  projectId: "auth-page-4a1de",
  storageBucket: "auth-page-4a1de.appspot.com",
  messagingSenderId: "652653579560",
  appId: "1:652653579560:web:63a5ab8e339ab9c655941d",
  measurementId: "G-YVCH61J185"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;