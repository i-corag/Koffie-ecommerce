import style from './ItemDetailContainer.module.css';
import { Button, Divider, Heading, Text } from '@chakra-ui/react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useProductsContext } from '../../contexts/ProductsContext';
import { useCartContext } from '../../contexts/CartContext';
import AddQty from '../AddQty';

const ItemDetailContainer = () => {

    const { products } = useProductsContext();
    const { addToCart } = useCartContext();
    const { id } = useParams();

    const [goToCart, setGoToCart] = useState(false);
    const product = products.find((product) => product.id == id);

    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart(product, quantity)
    }

    return (
        <section className={style.container}>
            <div className={style.image_container}>
                <img src={product.image} alt='productImg' />
            </div>
            <div className={style.text_container}>
                <Heading py='1em' variant='koffie'>{product.title}</Heading>
                <Heading size='sm' fontWeight='light'>{product.brand}</Heading>
                <Text py='1em'>{product.description}</Text>
                <Text>Dimensions: {product.dimensions}</Text>
                <Text>Capacity: {product.capacity}</Text>
                <Heading size='lg' variant='koffie' textAlign='end' mt='1em'>US${product.price}</Heading>
                <Divider my='1em' />
                {goToCart ?
                    <div className={style.checkout_container}>
                        <Link to='/home'>
                            <Text fontSize='md' fontWeight='normal'>Continue shopping</Text>
                        </Link>

                        <Button type='submit' variant="koffie" my='.7em'><NavLink to="/cart">Proceed to Checkout</NavLink></Button>
                    </div> :
                    <AddQty onAdd={onAdd} />
                }
            </div>
        </section>
    )
}

export default ItemDetailContainer









