import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByGEFTjdxC2v2U0c110moCi8WPx3VMhNc',
  authDomain: 'notestore-ebeec.firebaseapp.com',
  projectId: 'notestore-ebeec',
  storageBucket: 'notestore-ebeec.appspot.com',
  messagingSenderId: '426259001834',
  appId: '1:426259001834:web:5d60bdf1d334f7f1bc4293',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
