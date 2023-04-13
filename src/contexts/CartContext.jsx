import { createContext, useContext, useEffect, useState } from 'react'

const cartContext = createContext();

const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState(
        JSON.parse(localStorage.getItem("shopping-cart")) || []
    );

    useEffect(() => {
        localStorage.setItem(
            "shopping-cart",
            JSON.stringify(cartProducts)
        );
    }, [cartProducts]);

    const addToCart = (product, quantity) => {
        const existInCart = cartProducts.find((x) => x.id === product.id);
        if (existInCart) {
            setCartProducts(
                cartProducts.map((x) =>
                    x.id === product.id ? { ...existInCart, quantity: existInCart.quantity + quantity } : x
                ));
        } else {
            setCartProducts([...cartProducts, { ...product, quantity }])
        }
    }

    const removeFromCart = (product, quantity) => {
        const existInCart = cartProducts.find((x) => x.id === product.id);
        if (existInCart && existInCart.quantity > 0) {
            setCartProducts(
                cartProducts.map((x) =>
                    x.id === product.id ? { ...existInCart, quantity: existInCart.quantity - quantity } : x
                ));
        } else {
            setCartProducts([...cartProducts])
        }
    }

    const deleteProduct = (id) => setCartProducts(cartProducts.filter(product => product.id !== id));

    const clearCart = () => setCartProducts([]);

    const totalCartQuantity = () => cartProducts.reduce((acc, cur) => acc + cur.quantity, 0);

    const totalCartPrice = () => cartProducts.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0);

    return (
        <cartContext.Provider value={{
            cartProducts,
            addToCart,
            removeFromCart,
            deleteProduct,
            clearCart,
            totalCartQuantity,
            totalCartPrice
        }}>
            {children}
        </cartContext.Provider>
    )
}

export { useCartContext, CartProvider };