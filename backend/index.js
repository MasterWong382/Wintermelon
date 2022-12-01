// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
let bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/abc", (request, response) => {
  response.status(200).json({ message: "Quote of the day Sam is the best!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADAeM4ppgLn6q_-hKc24s9kY1SDa0cpdc",
//   authDomain: "wintermelon-db.firebaseapp.com",
//   projectId: "wintermelon-db",
//   storageBucket: "wintermelon-db.appspot.com",
//   messagingSenderId: "271443258606",
//   appId: "1:271443258606:web:1c638678684376b4c317ff",
// };

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getFirestore();

app.post("/LoginDetails", (request, response) => {
    console.log(request.body);
    //if frontend value = firebase value: then
    response.send(false);
    //else
    //response.send(false);
})