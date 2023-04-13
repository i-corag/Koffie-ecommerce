import styles from './ItemCard.module.css'
import { Button, Divider, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext';


const ItemCard = ({ product }) => {

    const { addToCart } = useCartContext();

    const [addMsg, setAddMsg] = useState(null);

    const onAdd = () => {
        setAddMsg('Add Successful')
        addToCart(product, 1)
    }

    return (
        <li className={styles.container}>
            <Link to={`/item/${product.id}`}>
                <div className={styles.image_container}>
                    <img src={product.image} alt='productImg' />
                </div>
                <div className={styles.text_container}>
                    <Heading variant='title' noOfLines={1}>{product.title}</Heading>
                    <Heading variant='title' fontWeight='light'>{product.brand}</Heading>
                    <Text py='.5em' h='100px' size='xs' overflow='hidden' noOfLines={4}>{product.description}</Text>
                    <Heading size='sm' variant='koffie' textAlign='end' mt='1em'>US${product.price}</Heading>
                </div>
                <Divider my='.5em' />
            </Link>
            {addMsg ?
                <div className={styles.cart_container}>
                    <Text color='green' fontSize='12px' fontWeight='normal'>{addMsg}</Text>
                    <Link to='/cart'>
                        <Text fontSize='sm' fontWeight='normal'>Go to cart</Text>
                    </Link>
                </div> :
                <Button variant='koffie' onClick={onAdd}>Add to cart</Button>
            }

        </li >
    )
}

export default ItemCard