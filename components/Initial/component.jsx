import styles from './styles.module.scss'
import Image from 'next/image'
import courseImg from './images/teste.png'

export default function Initial(props){
    return(
        <section className={styles.section}>
            <div className={styles.contentArea}>
                <h1 className={styles.title}><strong>Super courses</strong> for everything you need!</h1>
                <h2 className={styles.subTitle}>The best place to get knowledge through the internet</h2>

                <div className={styles.areaButtons}>
                    <button className={styles.button}>Start now</button>
                    <button className={styles.button}>Learn more</button>
                </div>
            </div>
            <div className={styles.rightArea}>
                <div className={styles.areaImage}>
                    <Image src={courseImg} layout="responsive" />
                </div>
            </div>
        </section>
    )
}