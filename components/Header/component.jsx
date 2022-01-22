import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export default function Header (props){

    const [animateHeader, setAnimateHeader] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                setAnimateHeader(true)
            } else setAnimateHeader(false)
        })
    }, []);
    
    return(
        <header className={`${styles.header} ${animateHeader ? styles.active : ''}`}>
            <nav className={styles.nav}>
                <h1 className={styles.title}>Super Courses</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Products</li>
                    <li className={styles.item}>Pricing</li>
                    <li className={styles.item}>Contact</li>
                </ul>
            </nav>
            <div className={styles.areaButtons}>
                <Link href="https://google.com/" target="_blank">
                    <a className={styles.link}>Login</a>
                </Link>
                <button className={styles.button}>
                    <span>Join us</span>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </button>
            </div>
            <FontAwesomeIcon icon={faBars} onClick={() => setMenuOpen(true)} className={styles.menuIcon} />
            <menu className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
                <div className={styles.areaClose}>
                    <h4 className={styles.menuTitle}>Menu</h4>
                    <FontAwesomeIcon icon={faTimes} onClick={() => setMenuOpen(false)} className={styles.iconClose}/>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Products</li>
                    <li className={styles.item}>Pricing</li>
                    <li className={styles.item}>Contact</li>
                </ul>
                <div className={styles.areaButtons}>
                    <Link href="https://google.com/" target="_blank">
                        <a className={styles.link}>Login</a>
                    </Link>
                    <button className={styles.button}>
                        <span>Join us</span>
                        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                    </button>
                </div>
            </menu>
        </header>
    )
}