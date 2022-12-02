import * as express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

router.post('/', (request, response) => {
  const db = admin.firestore();
  console.log('fetch colection');
  //if frontend value = firebase value: then
  db.collection('users')
    .get()
    .then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        console.log(data);
      });
    });
  response.send(true);
});

export { router as loginDetailsRouter };
