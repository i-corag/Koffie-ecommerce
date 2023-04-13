import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import theme from './styles/theme';






ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>,
);
