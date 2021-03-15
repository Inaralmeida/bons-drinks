import styles from  './Header.module.css'
import {Link} from 'react-router-dom'

import React from 'react'

function Header() {
    return (
        <header className={styles.header}>
        <ul className={styles.lista}>
            <li className={styles.itemLista}>
                <Link className={styles.li} to='/drinks'>Drinks</Link>
                </li>
            <li className={styles.itemLista}>
                <Link className={styles.li} to='/sobre'>Sobre</Link>
                </li>
            <li className={styles.itemLista}>
                <Link className={styles.li} to='/'>Bons Drinks</Link>
                </li>
            <li className={styles.itemLista}>
                <Link className={styles.li} to='/time'>Nosso Time</Link>
                </li>
            <li className={styles.itemLista}>
                <Link className={styles.li} to='/contato'>Contato</Link>
                </li>
        </ul>
    </header>
    )
}

export default Header
