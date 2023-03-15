 
 import { initializeApp } from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'
 import 'firebase/auth'


 const firebaseConfig = {
    apiKey: "AIzaSyDuJHjaKVRkA4q_tig02-YsNvWCMf0hzzw",
    authDomain: "olx-clone-using-react.firebaseapp.com",
    projectId: "olx-clone-using-react",
    storageBucket: "olx-clone-using-react.appspot.com",
    messagingSenderId: "1060520800314",
    appId: "1:1060520800314:web:f1f413ff61b23ac0834503",
    measurementId: "G-4801XPQTHT"
  };

  

export default initializeApp(firebaseConfig);
