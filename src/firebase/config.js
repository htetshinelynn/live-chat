import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKYmchjHBhIFpfMCiNZVaHQlJ197d9fco",
  authDomain: "vue-blog-system-fc4a8.firebaseapp.com",
  projectId: "vue-blog-system-fc4a8",
  storageBucket: "vue-blog-system-fc4a8.appspot.com",
  messagingSenderId: "921897948780",
  appId: "1:921897948780:web:9e88dd5642a792329eea49"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}
