import styles from './NavBar.module.css';
import Logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown';

const NavBar = () => {
    let activeStyle = {
        color: '#968452',
    };
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <NavLink
                        to='/'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        <img src={Logo} alt='logo' />
                    </NavLink>
                </div>
                <div className={styles.categories}>
                    <NavLink
                        to='/category/makers'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        MAKERS
                    </NavLink>
                    <NavLink
                        to='/category/accessories'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        ACCESSORIES
                    </NavLink>
                    <NavLink
                        to='/category/grains'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        GRAINS
                    </NavLink>
                </div>
            </div>
            <div className={styles.auth_cart_container}>
                <Dropdown />
                <NavLink
                    to='/cart'
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
