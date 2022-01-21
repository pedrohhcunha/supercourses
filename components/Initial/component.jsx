import styles from './styles.module.scss'

export default function Initial(props){
    return(
        <section className={styles.section}>
            <h1 className={styles.title}><strong>Super courses</strong> for everything you need!</h1>
            <h2 className={styles.subTitle}>The best place to get knowledge through the internet</h2>

            <div className={styles.areaButtons}>
                <button className={styles.button}>Start now</button>
                <button className={styles.button}>Learn more</button>
            </div>
        </section>
    )
}