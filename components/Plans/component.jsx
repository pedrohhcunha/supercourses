import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons' 

export default function Plans(props){
    return(
        <section className={styles.section}>
            <div className={styles.titleArea}>
                <h2 className={styles.title}>Wacth our Super Courses</h2>
                <p className={styles.paragraph}>Quam maiores id, libero eos iure autem provident! Necessitatibus ad id adipisci sit expedita ullam!</p>
            </div>
            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <h3 className={styles.title}>Plano <strong>GOLD</strong></h3>
                    <p className={styles.description}>Especial para universitários</p>

                    <h4 className={styles.price}>$134</h4>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                    </ul>
                    <button className={styles.button}>Try for free</button>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.title}>Plano <strong>GOLD</strong></h3>
                    <p className={styles.description}>Especial para universitários</p>

                    <h4 className={styles.price}>$134</h4>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                    </ul>
                    <button className={styles.button}>Try for free</button>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.title}>Plano <strong>GOLD</strong></h3>
                    <p className={styles.description}>Especial para universitários</p>

                    <h4 className={styles.price}>$134</h4>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.areaIcon}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </div>
                            <span>1GB  Cloud storage</span>
                        </li>
                    </ul>
                    <button className={styles.button}>Try for free</button>
                </div>
            </div>
        </section>
    )
}