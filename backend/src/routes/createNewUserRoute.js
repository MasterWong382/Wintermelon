import * as express from 'express';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import checkUserExist from '../utils/checkUserExist.js';

const router = express.Router();

router.post('/', async (request, response) => {
  const auth = getAuth();
  const db = getFirestore();

  const email = request.body.email;
  const password = request.body.password;

  // await checkUserExist();

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      let user = userCredential.user;
      let data = {
        uid: user.uid,
        token: user.accessToken,
      };

      const docRef = await addDoc(collection(db, 'users'), {
        email: email,
        uid: user.uid,
      });

      response
        .status(200)
        .json({ ...data, message: 'User successfully created!' });
    })
    .catch((error) => {
      let data = {
        code: error.code,
        errorMessage: error.message,
      };
      response.status(403).json({ ...data, message: 'Error!' });
    });
});

export { router as createNewUser };
