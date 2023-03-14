import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryList from './components/CategoryList';





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
        <Route path="/home/:id" element={<ItemDetailContainer products={products} />} />
        <Route path="/category/makers" element={<p>Mira nuestras coffee makers</p>} />
        <Route path="/category/accessories" element={<p>Mira nuestros accesories</p>} />
        <Route path="/category/grains" element={<p>Mira nuestros cafes</p>} />
        <Route path="/cart" element={<p>Estas en el carrito</p>} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </div >

  );
}

export default App
