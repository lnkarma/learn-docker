// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOPeRtNokVkUlP2aI09g5VUH94s_mg_wA",
  authDomain: "wizard-form-webskitters.firebaseapp.com",
  projectId: "wizard-form-webskitters",
  storageBucket: "wizard-form-webskitters.appspot.com",
  messagingSenderId: "474584183413",
  appId: "1:474584183413:web:9378c71b86f97ff73c3e3c",
  measurementId: "G-BGNXNTMLLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase(app);
const usersRef = ref(db, 'users')
export const saveUser = (user) => {
    set(push(usersRef), user);
}
export default app;