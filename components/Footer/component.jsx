//Import styles modules
import styles from './styles.module.scss'

//Import necessary components
import Link from 'next/link'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props){
    return(
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                <div className={styles.resume}>
                    <h5 className={styles.title}>Super Courses</h5>
                    <p className={styles.paragraph}>Lorem ipsum, repudiandae dolorem ab unde corporis vel recusandae, labore consequuntur. Sapiente libero quibusdam labore.</p>
                </div>
                <div className={styles.groupInfos}>
                    <div className={styles.areaLinks}>
                        <h5 className={styles.title}>Company info</h5>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>About us</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Carrier</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.areaLinks}>
                        <h5 className={styles.title}>LGPD</h5>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>About us</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Carrier</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.areaLinks}>
                        <h5 className={styles.title}>Legal</h5>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>About us</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Carrier</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.areaLinks}>
                        <h5 className={styles.title}>Resources</h5>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>About us</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Carrier</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link target="_blank" href="https://www.google.com">
                                    <a className={styles.link}>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.finalBar}>
                <Link target="_blank" href="https://www.google.com/">
                    <a className={styles.copyright}>
                    All Rights Reserved. Super Courses© 2022
                    </a>
                </Link>
                <div className={styles.socialMedias}>
                    <Link target="_blank" href="https://www.google.com/">
                        <a className={styles.socialMedia}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </a>
                    </Link>
                    <Link target="_blank" href="https://www.google.com/">
                        <a className={styles.socialMedia}>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </a>
                    </Link>
                    <Link target="_blank" href="https://www.google.com/">
                        <a className={styles.socialMedia}>
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}