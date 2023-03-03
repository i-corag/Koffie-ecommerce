import React from 'react'
import { Container } from '@chakra-ui/react'

const ItemListContainer = ({ gretting }) => {
    return (
        <Container m='3em' w='25' border='1px solid ' borderColor='secondary' color='secondary'>
            {gretting}
        </Container>
    )
}

export default ItemListContainer; 