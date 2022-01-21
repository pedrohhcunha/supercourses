import styles from './styles.module.scss'

export default function(props){
    return(
        <section className={styles.section}>
            <h6 className={styles.subTitle}>Newsletter</h6>
            <h2 className={styles.title}>Get free content</h2>
            <p className={styles.description}>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>

            <div className={styles.areaInput}>
                <input className={styles.input} placeholder="Your better email" type="text" />
                <button className={styles.button}>Subscribe</button>
            </div>
        </section>
    )
}