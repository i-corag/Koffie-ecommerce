import { Button, Icon } from '@chakra-ui/react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useCartContext } from '../../contexts/CartContext';

const CartWidget = () => {

    const { totalCartQuantity } = useCartContext();

    return (
        <Button leftIcon={<Icon as={HiOutlineShoppingCart} boxSize={5} />} variant='koffie' >
            {totalCartQuantity()}
        </Button>
    )
}

export default CartWidget