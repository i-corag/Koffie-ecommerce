import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDD0ySJ_0rK_9TIs57QAu_rbAy-CQNc0Ek',
  authDomain: 'koffie-ecommerce.firebaseapp.com',
  projectId: 'koffie-ecommerce',
  storageBucket: 'koffie-ecommerce.appspot.com',
  messagingSenderId: '653240408858',
  appId: '1:653240408858:web:4612fb7cea8d54238caaa3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create db instance
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
