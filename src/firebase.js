import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu8Nv3vDpn6l-KjhcWh-3n2_CXqDwqRf4",
  authDomain: "facebook-clone-1ddd2.firebaseapp.com",
  projectId: "facebook-clone-1ddd2",
  storageBucket: "facebook-clone-1ddd2.appspot.com",
  messagingSenderId: "805354329310",
  appId: "1:805354329310:web:9cc993110f95e72df79e4f",
  measurementId: "G-5EC3V7M8XD",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
