import { Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Cart from './components/Cart';
import './index.css';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </>

  );
}

export default App
