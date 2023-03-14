import { Button, ButtonGroup, Divider, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id == id);
    return (
        <section>
            <Heading size='md'>{product.title}</Heading>
            <Heading size='md'>{product.brand}</Heading>
            <Text>{product.category}</Text>
            <Text>{product.description}</Text>
            <Text>{product.dimentions}</Text>
            <Text>{product.capacity}</Text>
            <Text>{product.rating.rate}</Text>
            <Image src={product.image} alt='productImg' borderRadius='lg' />
            <Text color='blue.600' fontSize='2xl'>{product.price}</Text>


            <Divider />

            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
            </ButtonGroup>


        </section>
    )
}

export default ItemDetailContainer









