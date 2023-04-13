import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config.js';
import products from '../data.js';

const productsRef = collection(db, 'products');

const promises = products.map((product) => addDoc(productsRef, product));

try {
  Promise.all(promises).then(() => {
    console.log('Done!');
    process.exit(0);
  });
} catch (err) {
  console.error(err);
}
