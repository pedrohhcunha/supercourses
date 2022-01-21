import styles from './styles.module.scss'

export default function(props){
    return(
        <section className={styles.section}>
            <div className={styles.stat}>
                <h5 className={styles.data}>500+</h5>
                <span className={styles.description}>Updated courses</span>
            </div>
            <div className={styles.stat}>
                <h5 className={styles.data}>15K</h5>
                <span className={styles.description}>Active users</span>
            </div>
            <div className={styles.stat}>
                <h5 className={styles.data}>22</h5>
                <span className={styles.description}>Qualified teachers</span>
            </div>
            <div className={styles.stat}>
                <h5 className={styles.data}>560K</h5>
                <span className={styles.description}>Watched minutes</span>
            </div>
        </section>
    )
}