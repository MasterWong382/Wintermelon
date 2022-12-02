import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createNewUser } from './routes/createNewUserRoute.js';
import { loginDetailsRouter } from './routes/loginDetailsRoute.js';

const serviceAccount = {
  type: 'service_account',
  project_id: 'wintermelon-db',
  private_key_id: '91d031a57efe699098c43c0bf49e7a7f97bb6183',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6YCcKZKGbUnTP\n2QosbWYPNg7KE+ldJWEX7FQtE2WwdNu9wYV1LGAnfCCdolhKiye/9+xdH0tTPc+3\n5d89vxGp+PVqR97jrmkI11qJ80r70O+UAfS4P5UqlzmJY02PApeRCt3F04Z1mXsB\nZPFHmX85JR7klHfYDXqqcqG50yxujsQHkIXV1GgYmmRjzma5iTpV4/rnrDClxzuJ\nnAe6Zh7ukT3JAOh01Cu2stkZKdce7vM1fQHP3U5CsLdN2REMiz3Foqb3H6SSSeTO\n1LYo2MQYEqclbfrMvwSH2Pv2K8EHHfEEDOlvKvHenJBPzlkLE80h0XVkJzIdKj+Z\nMMnVnOALAgMBAAECggEAO0T/tWDqOdRfnIe3oghKWBUHYAE0CfCsr2hzHoCYKqUH\nCpHj6K7rhzMExkyOCmq1gemMi9K7aCX0jFV4iJDeQ7EODrX7bmmVMoAV5V/vHSTF\nQ8rZccyamdhMrmHblNqsq64Kd/J8RKLCCN/6kRwB5wDkkambcSRcOZ9Jyigbba7C\n0R8dYuSyEkil8gIP5LqlnC27FbB/JaeGlBLAP7rnm39Kia4ZV6dbUqtVVsK11BWl\nTNVIUJEa67TrGMeV0EcmKQRRowAE0ZnBxQRlj+JttgaMsKzuo4FYftUWniWU/eQn\n+22CnaJxNBd9J6N7w0Mf5+X3F/8SNoRYtIaVuN5XBQKBgQDsVbuUV/D0j02Uo2dp\n8NSzPPEdk5iiCyYLBAv/CTp1OfLcXBHyqXOxqaxxcq5p272siy2DDk21emFwj8PF\nQhVo//bgj/5sPdJUZfB8sdUYropzeWhshHaTN1E/kiK02pvcJk4xZ9mUUwgcQZDF\nATDJv0mNXhNX7w2AJxT+MEFSVQKBgQDJ4jdTTXq80v8XzxfH0LnBlgMLX3fSD7ke\n1sAczldbL72MeOhptS9R2pULE7KNekbYwwE+SJQkSO9dkYFZn5eo6CgC6w4u7o1y\nvIBIB4Bl49UfZVMHMuRaZFeLHrmatuOAQc3NVP1mSMgVKpztfnlYVcnl2Z9ntLXw\n5K0p+BWI3wKBgQCclAB/O/RsUzU3MTumuORzDAFDczJAydoemkPIaLjOSeJZlLZf\na103bA7P6wcbI3b7BgrVNXjOr5I3HUi7PBkrQ8qw5TXPSPY87Hz0YG2quJkKAHnq\ny6gzyQaPc6aC5AM3TDmqCf/hgVFyRw4/N5a3U4DLpHR0YfEz4rDJ5/afMQKBgQCW\naMbldnU6V00ctPs3sKekthogkAkaZQJ8Gm1ZSNZGpsPm83Hcx9OwfVTLwuolg/Ni\nra6wc6yDeB92K+EeH8wDWKvuuKeBidOypwRAJe6geuUfFgOM+nqtadLbYJHR1e6b\ncOtezrJYUWNYeb4fJzpK+OeKKuAbiMSA7C6jdSS+KwKBgQDfWGem73jWs/vs2zTK\nlTr0nHteQxqwHB15WxqVsh6JzNnAvuwDRT6LfzQJPBh9RlXGMn+vGHhvxsX1eq3p\nlSeRcfXcPs9+aPybY4pDwMV2Qln+nu26MFzgRATQhHADoKsVnEh+A34FSKEDm7A2\noHMdN71yebXcYpgcBwCnPOj2QA==\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-1xeyh@wintermelon-db.iam.gserviceaccount.com',
  client_id: '115276382794408098490',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1xeyh%40wintermelon-db.iam.gserviceaccount.com',
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseConfig = {
  apiKey: 'AIzaSyADAeM4ppgLn6q_-hKc24s9kY1SDa0cpdc',
  authDomain: 'wintermelon-db.firebaseapp.com',
  projectId: 'wintermelon-db',
  storageBucket: 'wintermelon-db.appspot.com',
  messagingSenderId: '271443258606',
  appId: '1:271443258606:web:1c638678684376b4c317ff',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/abc', (request, response) => {
  response.status(200).json({ message: 'Quote of the day Sam is the best!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/LoginDetails', loginDetailsRouter);
app.use('/createNewUser', createNewUser);
