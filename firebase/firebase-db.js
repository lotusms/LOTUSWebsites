import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj-q-6MEl1-OPUhE451b-I1omyuFt6SrY",
  authDomain: "cobalt-badge-187102.firebaseapp.com",
  projectId: "cobalt-badge-187102",
  storageBucket: "cobalt-badge-187102.appspot.com",
  messagingSenderId: "44271669031",
  appId: "1:44271669031:web:00813ae133d5bdf48f6302"

  // !LOTUSWebsites Firebase Config //
  // apiKey: "AIzaSyCt_fGDM1tdXCnDCgZZJgRLyH1LU-ru_W4",
  // authDomain: "lotuswebsites.firebaseapp.com",
  // projectId: "lotuswebsites",
  // storageBucket: "lotuswebsites.firebasestorage.app",
  // messagingSenderId: "803518418688",
  // appId: "1:803518418688:web:2711a1bde4c6c8ed07ede5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
