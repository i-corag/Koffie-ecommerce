import styles from './Cart.module.css';
import { Button, Divider, Heading, Text } from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { db } from '../../../db/firebase-config';
import { useAuthContext } from '../../contexts/AuthContext';
import { useCartContext } from '../../contexts/CartContext';
import Modal from '../Modal';

const Cart = () => {
    const {
        cartProducts,
        addToCart,
        removeFromCart,
        deleteProduct,
        clearCart,
        totalCartPrice,
    } = useCartContext();

    const { user } = useAuthContext();
    const navigate = useNavigate();

    const [id, setId] = useState(null);
    const [pay, setPay] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const handleLogged = () => {
        user ? setOpenModal(true) : navigate('/login');
    };

    const newOrder = () => {
        //create order
        let order = {};
        order.buyer = { name: user.displayName, email: user.email };
        order.products = cartProducts.map((cartProduct) => {
            const id = cartProduct.id;
            const title = cartProduct.title;
            const price = cartProduct.price;
            const quantity = cartProduct.quantity;
            return { id, title, price, quantity };
        });
        order.total = totalCartPrice();

        // add order to DB
        const ordersCollectionRef = collection(db, 'orders');
        addDoc(ordersCollectionRef, order)
            .then(({ id }) => setId(id))
            .catch((err) => console.error(err))
            .finally(() => setPay(false));

        return order;
    };

    return (
        <div className={styles.container}>
            {cartProducts.length === 0 ? (
                <div className={styles.emptyCart_container}>
                    <Heading size='sm' fontWeight='light'>
                        No products in the cart
                    </Heading>
                    <Link to='/home'>
                        <Button mt='2em' variant='koffie-solid'>
                            Back to shopping
                        </Button>
                    </Link>
                </div>
            ) : (
                <>
                    {id ? (
                        <div className={styles.orderConfirmation_container}>
                            <Heading size='md' fontWeight='bold' variant='koffie'>
                                Thank you for your order!
                            </Heading>
                            <Text my='1em' fontSize='md' fontWeight='normal'>
                                Remember to verify your information and order details before
                                paying
                            </Text>
                            <div className={styles.orderDetails_container}>
                                <Text fontSize='md' fontWeight='normal'>
                                    Order ID: <span>{id}</span>
                                </Text>
                                <Text fontSize='md' fontWeight='normal'>
                                    Name: <span>{user.displayName}</span>
                                </Text>
                                <Text fontSize='md' fontWeight='normal'>
                                    Email: <span>{user.email}</span>
                                </Text>
                            </div>
                            <Link to='/'>
                                <Button
                                    className='m-3'
                                    variant='outline-success'
                                    onClick={clearCart}>
                                    Confirmar Pedido
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.cartProducts_container}>
                            <div className={styles.cartProducts_clear_button}>
                                <Button
                                    mb='3em'
                                    variant='koffie-solid'
                                    onClick={() => clearCart()}>
                                    Clear all
                                </Button>
                            </div>
                            <ul>
                                {cartProducts.map((item) => {
                                    return (
                                        <>
                                            <li key={item.id}>
                                                <div className={styles.cartProduct_image_container}>
                                                    <img src={item.image} alt='productImg' />
                                                </div>
                                                <Text
                                                    w='250px'
                                                    fontSize='12px'
                                                    fontWeight='normal'
                                                    textAlign='center'>
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    w='80px'
                                                    fontSize='12px'
                                                    fontWeight='normal'
                                                    textAlign='center'>
                                                    US${item.price}
                                                </Text>
                                                <div className={styles.cartProduct_count_container}>
                                                    <Button
                                                        size='sm'
                                                        variant='koffie'
                                                        onClick={() => removeFromCart(item, 1)}>
                                                        -
                                                    </Button>
                                                    <Heading size='sm' variant='koffie'>
                                                        {item.quantity}
                                                    </Heading>
                                                    <Button
                                                        size='sm'
                                                        variant='koffie'
                                                        onClick={() => addToCart(item, 1)}>
                                                        +
                                                    </Button>
                                                </div>
                                                <Text
                                                    w='80px'
                                                    fontSize='12px'
                                                    textAlign='center'
                                                    spy='1em'>
                                                    Subtotal: US${(item.quantity * item.price).toFixed(2)}{' '}
                                                </Text>
                                                <Button
                                                    size='sm'
                                                    variant='koffie'
                                                    onClick={() => deleteProduct(item.id)}>
                                                    <AiOutlineDelete size='18px' />
                                                </Button>
                                            </li>
                                            <Divider my='1em' />
                                        </>
                                    );
                                })}
                            </ul>
                            {pay && (
                                <div className={styles.checkout_container}>
                                    <Heading size='md' mt='1em' variant='koffie'>
                                        Total US${totalCartPrice().toFixed(2)}
                                    </Heading>
                                    <Button
                                        mt='1em'
                                        variant='koffie-solid'
                                        onClick={handleLogged}>
                                        Checkout
                                    </Button>
                                    <Modal
                                        openModal={openModal}
                                        newOrder={newOrder}
                                        closeModal={() => setOpenModal(false)}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;
