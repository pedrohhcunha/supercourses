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

            </div>
            <div className={styles.finalBar}>
                <Link target="_blank" href="https://www.google.com/">
                    <a className={styles.copyright}>
                    All Rights Reserved. SuperCourses© 2022
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