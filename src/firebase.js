import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp( {
        apiKey: "AIzaSyAnFGSzVFyMcC6wI9n6AX28US2-lXxRiXk",
        authDomain: "owlchat-6f222.firebaseapp.com",
        projectId: "owlchat-6f222",
        storageBucket: "owlchat-6f222.appspot.com",
        messagingSenderId: "1045789380769",
        appId: "1:1045789380769:web:0eedc348248d60bbc4a0e0",
}).auth()