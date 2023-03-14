import { Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { HiOutlineShoppingCart } from 'react-icons/hi'



const CartWidget = () => {
    return (
        <Button leftIcon={<Icon as={HiOutlineShoppingCart} boxSize={5} />} variant='koffie' >
            0
        </Button>
    )
}

export default CartWidget