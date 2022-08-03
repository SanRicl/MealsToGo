import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABDSrizCTeDDoOGatDfmDx2MhMkrUFWWU',
  authDomain: 'mealstogo-a8ed8.firebaseapp.com',
  projectId: 'mealstogo-a8ed8',
  storageBucket: 'mealstogo-a8ed8.appspot.com',
  messagingSenderId: '324550778714',
  appId: '1:324550778714:web:236a50e48e9b6af8ff9d63',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginRequest = async (email, password) => {
  const loggedUser = await signInWithEmailAndPassword(auth, email, password);
  return loggedUser;
};

export const registerRequest = async (email, password) => {
  const registeredUser = await createUserWithEmailAndPassword(auth, email, password);
  return registeredUser;
};

export const logoutRequest = async () => {
  await signOut(auth);

};
export default loginRequest;
