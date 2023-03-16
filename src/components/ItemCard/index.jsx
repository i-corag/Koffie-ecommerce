import { Button, ButtonGroup, Divider, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './ItemCard.module.css'



const ItemCard = ({ product }) => {
    return (
        <li className={styles.container}>
            <Link to={`/item/${product.id}`}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt='productImg' />
                </div>
                <div className={styles.textContainer}>
                    <Heading variant='title' noOfLines={1}>{product.title}</Heading>
                    <Heading variant='title' fontWeight='light'>{product.brand}</Heading>
                    <Text py='.5em' h='100px' size='xs' overflow='hidden' noOfLines={4}>{product.description}</Text>
                    <Heading size='sm' variant='koffie' textAlign='end' mt='1em'>US${product.price}</Heading>
                </div>
                <Divider my='.5em' />
                <ButtonGroup spacing='2'>
                    <Button variant='koffie-solid'>Buy now</Button>
                    <Button variant='koffie'>Add to cart</Button>
                </ButtonGroup>
            </Link>
        </li >
    )
}

export default ItemCard