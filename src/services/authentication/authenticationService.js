import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABDSrizCTeDDoOGatDfmDx2MhMkrUFWWU',
  authDomain: 'mealstogo-a8ed8.firebaseapp.com',
  projectId: 'mealstogo-a8ed8',
  storageBucket: 'mealstogo-a8ed8.appspot.com',
  messagingSenderId: '324550778714',
  appId: '1:324550778714:web:236a50e48e9b6af8ff9d63',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export default loginRequest;
