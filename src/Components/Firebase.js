// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyBOHPvbfT0zFEBsups9Z5oxQBKLN2hU9rA",
    authDomain: "messenger-clone-97862.firebaseapp.com",
    projectId: "messenger-clone-97862",
    storageBucket: "messenger-clone-97862.appspot.com",
    messagingSenderId: "147306676526",
    appId: "1:147306676526:web:c7b6435bcce9f924d0fabf",
    measurementId: "G-SEMPP2NQED"
  });

  const db= firebaseApp.firestore();

  export default db ;