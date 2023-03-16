import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';
import './index.css';


function App() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get("../data.json");
      setProducts(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => { getProducts() }, []);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<ItemListContainer products={products} />} />
        <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer products={products} />} />
        <Route path="/cart" element={<p>Estas en el carrito</p>} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </div >

  );
}

export default App
