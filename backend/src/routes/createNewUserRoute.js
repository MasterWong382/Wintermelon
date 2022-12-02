import * as express from 'express';
import admin from 'firebase-admin';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/app';
// import 'firebase/auth';

const router = express.Router();

router.post('/', (request, response) => {
  // const auth = admin.auth();
  // const auth = firebase.auth();

  // const auth = getAuth();

  response.status(200).json({ message: 'Ok' });
  // const email = request.body.email;
  // const password = request.body.password;
  // auth
  //   .createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     let user = userCredential.user;
  //     console.log(user);
  //   });
  //   console.log('fetch colection');
  //   //if frontend value = firebase value: then
  //   db.collection('users')
  //     .get()
  //     .then((querySnapshot) => {
  //       // Loop through the data and store
  //       // it in array to display
  //       querySnapshot.forEach((element) => {
  //         var data = element.data();
  //         console.log(data);
  //       });
  //     });
  //   response.send(true);
});

export { router as createNewUser };
