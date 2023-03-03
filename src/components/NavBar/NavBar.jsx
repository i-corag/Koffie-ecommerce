import React from 'react'
import styles from './NavBar.module.css'
import { Grid, GridItem } from '@chakra-ui/react'
import Logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <img className={styles.logo} src={Logo} alt="logo" />
                <div className={styles.categories}>
                    <a>MAKERS</a>
                    <a>GRAINS</a>
                    <a>MUGS</a>
                </div>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar
