import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZT5DK41D11J22xZNuOEMFX7AKAgx_YQU',
  authDomain: 'nodejs-assignment-5caba.firebaseapp.com',
  projectId: 'nodejs-assignment-5caba',
  storageBucket: 'nodejs-assignment-5caba.appspot.com',
  messagingSenderId: '107073953731',
  appId: '1:107073953731:web:60b9aca7b1fc8171852776',
  measurementId: 'G-PV07X1JLKK',
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

