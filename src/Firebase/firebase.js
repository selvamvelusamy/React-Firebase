import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxGNqIAEAzgqFYdkPuhWF4d0N3GtGzGVA",
    authDomain: "platos-react-firebase.firebaseapp.com",
    databaseURL: "https://platos-react-firebase.firebaseio.com",
    projectId: "platos-react-firebase",
    storageBucket: "platos-react-firebase.appspot.com",
    messagingSenderId: "569385343568",
    appId: "1:569385343568:web:c29ffe9e479192a41a8f55"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();