import { Button, ButtonGroup, Divider, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import style from './ItemDetailContainer.module.css';



const ItemDetailContainer = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id == id);
    return (
        <section className={style.container}>
            <div className={style.imageContainer}>
                <img src={product.image} alt='productImg' />
            </div>
            <div className={style.textContainer}>
                <Heading py='1em' variant='koffie'>{product.title}</Heading>
                <Heading size='sm' fontWeight='light'>{product.brand}</Heading>
                <Text py='1em'>{product.description}</Text>
                <Text>Dimensions: {product.dimensions}</Text>
                <Text>Capacity: {product.capacity}</Text>
                <Text>Rating: {product.rating.rate}</Text>
                <Heading size='lg' variant='koffie' textAlign='end' mt='1em'>US${product.price}</Heading>
                <Divider my='1em' />
                <ButtonGroup spacing='2'>
                    <Button variant='koffie-solid'>Buy now</Button>
                    <Button variant='koffie'>Add to cart</Button>
                </ButtonGroup>
            </div>
        </section>
    )
}

export default ItemDetailContainer









