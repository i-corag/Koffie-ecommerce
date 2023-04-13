import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const productsContext = createContext();

const useProductsContext = () => useContext(productsContext);

const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('true');
  const [errorMsg, setErrorMsg] = useState('');

  const productsCollectionRef = collection(db, 'products');

  const getProducts = async () => {
    try {
      const productsCollection = await getDocs(productsCollectionRef);
      const products = productsCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(products);
      setLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productsContext.Provider value={{ products, loading, errorMsg }}>
      {children}
    </productsContext.Provider>
  );
}
export { useProductsContext, ProductsProvider }
