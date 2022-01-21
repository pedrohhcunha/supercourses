import styles from './styles.module.scss'

import Link from 'next/link'

export default function Header (props){
    return(
        <header className={styles.header}>
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
                <button className={styles.button}>Join us</button>
            </div>
        </header>
    )
}