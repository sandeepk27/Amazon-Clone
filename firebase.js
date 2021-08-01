var firebaseConfig = {
    apiKey: "AIzaSyCgA9M3KTt7iX8qJdku5bzrpjhKSwtoSPc",
    authDomain: "clone-47bff.firebaseapp.com",
    projectId: "clone-47bff",
    storageBucket: "clone-47bff.appspot.com",
    messagingSenderId: "751680684921",
    appId: "1:751680684921:web:542d5076be8b1b7eb6a5a8",
    measurementId: "G-V68NJ39ZFK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();