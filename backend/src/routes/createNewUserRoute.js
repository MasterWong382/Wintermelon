import * as express from 'express';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const router = express.Router();

router.post('/', (request, response) => {
  const auth = getAuth();

  const email = request.body.email;
  const password = request.body.password;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      let data = {
        uid: user.uid,
        token: user.accessToken,
      };
      response
        .status(200)
        .json({ ...data, message: 'User successfully created!' });
    })
    .catch((error) => {
      let data = {
        code: error.code,
        errorMessage: error.message,
      };
      response.status(200).json({ ...data, message: 'Error!' });
    });
});

export { router as createNewUser };
