import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAR7bhyhcK3jo4I3ZrVunbCws-LHg34iIo',
  authDomain: 'sewakamerasamarinda-13134.firebaseapp.com',
  databaseURL: 'https://sewakamerasamarinda-13134-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sewakamerasamarinda-13134',
  storageBucket: 'sewakamerasamarinda-13134.appspot.com',
  messagingSenderId: '179053159894',
  appId: '1:179053159894:web:d941020f0a341e51c6b077',
  measurementId: 'G-7XV4ML2KT6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
