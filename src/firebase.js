import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZ0XRF74ek1BsifMldCFaB-w8y1-GqU-A",
  authDomain: "my-project-1-736b6.firebaseapp.com",
  databaseURL: "https://my-project-1-736b6-default-rtdb.firebaseio.com",
  projectId: "my-project-1-736b6",
  storageBucket: "my-project-1-736b6.appspot.com",
  messagingSenderId: "374186293909",
  appId: "1:374186293909:web:0fa412091790024469399c"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.database().ref("myData");
const storageRef = firebase.storage().ref('myData');

export { db, firebase, storageRef };