import * as firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAcEwUacdqjXX5hfxajigS3gJxrjl3ucOw",
  authDomain: "firacode-twitter.firebaseapp.com",
  databaseURL: "https://firacode-twitter.firebaseio.com",
  projectId: "firacode-twitter",
  storageBucket: "firacode-twitter.appspot.com",
  messagingSenderId: "405508680695",
  appId: "1:405508680695:web:78c31a69aed502ce41dcf2",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
export { storage, db, firebase as default };
