import styles from './Dropdown.module.css';
import { Button } from '@chakra-ui/react';
import { BiUser } from 'react-icons/Bi';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function Dropdown() {
    const { user, signout } = useAuthContext();

    const [isOpen, setIsOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleOpen = () => setIsOpen(!isOpen);

    const handleLogOut = async (e) => {
        try {
            await signout();
        } catch (err) {
            setErrorMsg(err.message);
        }
    };

    if (user) {
        return (
            <div>
                <Button
                    onClick={handleOpen}
                    variant='koffie'
                    className={styles.dropdown}>
                    Welcome {user.displayName}
                </Button>
                {isOpen && (
                    <ul className={styles.menu}>
                        <li onClick={handleLogOut} className={styles.menu_item}>
                            <NavLink to='/login' onClick={handleOpen}>
                                LOG OUT
                            </NavLink>
                        </li>
                    </ul>
                )}
                {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
            </div>
        );
    } else {
        return (
            <div>
                <Button
                    onClick={handleOpen}
                    variant='koffie'
                    className={styles.dropdown}>
                    <BiUser size={20} />
                </Button>
                {isOpen && (
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}>
                            <NavLink to='/register' onClick={handleOpen}>
                                REGISTER
                            </NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink to='/login' onClick={handleOpen}>
                                LOG IN
                            </NavLink>
                        </li>
                    </ul>
                )}
                {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
            </div>
        );
    }
}

export default Dropdown;
