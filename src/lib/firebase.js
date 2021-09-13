import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCujCQmYPZf6AqT9nkbY1ouUpEmp2_ONXA",
  authDomain: "ecommerce-ffb4a.firebaseapp.com",
  projectId: "ecommerce-ffb4a",
  storageBucket: "ecommerce-ffb4a.appspot.com",
  messagingSenderId: "286158714266",
  appId: "1:286158714266:web:d89658aea8918255303623",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
