import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj-q-6MEl1-OPUhE451b-I1omyuFt6SrY",
  authDomain: "cobalt-badge-187102.firebaseapp.com",
  projectId: "cobalt-badge-187102",
  storageBucket: "cobalt-badge-187102.appspot.com",
  messagingSenderId: "44271669031",
  appId: "1:44271669031:web:00813ae133d5bdf48f6302"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
