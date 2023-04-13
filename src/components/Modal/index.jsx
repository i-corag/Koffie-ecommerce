import { Button, Text } from '@chakra-ui/react';
import { useAuthContext } from '../../contexts/AuthContext';
import style from './Modal.module.css'

const Modal = ({ openModal, closeModal, newOrder }) => {

    const { user } = useAuthContext();

    if (!openModal) return null;

    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <Text fontSize='lg' fontWeight='normal' textAlign='center' mt='1em' >
                    Place order as <span>{user.email}</span>
                </Text>
                <div className={style.buttons_container}>
                    <Button variant='koffie' onClick={closeModal}>Cancel</Button>
                    <Button variant='koffie-solid' onClick={newOrder}>Confirm</Button>
                </div>
            </div>
        </div >
    )
}

export default Modal