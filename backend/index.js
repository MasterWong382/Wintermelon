import { initializeApp } from "firebase/app";

const { response } = require("express");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/abc", (request, response) => {
  response.status(200).json({ message: "Quote of the day Sam is the best!" });
});

app.get("/createAccount", (request, response) => {
  response.status(200).json({ message: "Quote of the day Sam is the best!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADAeM4ppgLn6q_-hKc24s9kY1SDa0cpdc",
  authDomain: "wintermelon-db.firebaseapp.com",
  projectId: "wintermelon-db",
  storageBucket: "wintermelon-db.appspot.com",
  messagingSenderId: "271443258606",
  appId: "1:271443258606:web:1c638678684376b4c317ff",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
