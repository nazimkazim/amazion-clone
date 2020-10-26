// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDSyAas9L4zMB7ZQiTiLqeXBf4bSPzKYWs",
  authDomain: "clone-4aff4.firebaseapp.com",
  databaseURL: "https://clone-4aff4.firebaseio.com",
  projectId: "clone-4aff4",
  storageBucket: "clone-4aff4.appspot.com",
  messagingSenderId: "922981787251",
  appId: "1:922981787251:web:f4a63d6b4df4c10bd72c06",
  measurementId: "G-6G1RQ9RGZB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

