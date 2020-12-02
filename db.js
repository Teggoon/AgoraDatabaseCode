const firebase = require("firebase");

const db = firebase.initializeApp({
    apiKey: "AIzaSyAX14vtpXXgs3Nl3XR3o_ANAoN_r0GW8c0",
    authDomain: "agoradbtest.firebaseapp.com",
    databaseURL: "https://agoradbtest.firebaseio.com",
    projectId: "agoradbtest",
    storageBucket: "agoradbtest.appspot.com",
    messagingSenderId: "632535587209",
    appId: "1:632535587209:web:20c0b383299022d41f6958",
    measurementId: "G-SS09EBWP13"
});


module.exports = db;
