import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const ItemCard = ({ product }) => {
    return (
        <li>
            <Link to={`${product.id}`}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={product.image}
                            alt='productImg'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.title}</Heading>
                            <Text>{product.description}</Text>
                            <Text color='blue.600' fontSize='2xl'>{product.price}</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Link>
        </li>
    )
}

export default ItemCard