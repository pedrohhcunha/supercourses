import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import image from './images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function LearnMore(props){
    return(
        <section className={styles.section}>
            <div className={styles.leftArea}>
                <h2 className={styles.title}>Learn more with us</h2>
                <p className={styles.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis corporis odio cumque omnis illo commodi. Quam maiores id, libero eos iure autem provident! Necessitatibus ad id adipisci sit expedita ullam!</p>
                <Link href="https://google.com/" target="_blank">
                    <a className={styles.link}>
                        <span>Learn more</span>
                        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
                    </a>
                </Link>
            </div>
            <div className={styles.areaImage}>
            <Image src={image} layout="responsive" />
            </div>
        </section>
    )
}