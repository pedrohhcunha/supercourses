import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons' 

export default function Plans(props){
    return(
        <section className={styles.section}>
            <div className={styles.titleArea}>
                <h2 className={styles.title}>Wacth our Super Courses</h2>
                <p className={styles.paragraph}>
                    Get access to our super platform. <br />
                    Learn what you want from wherever you want.
                </p>
            </div>
            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <h3 className={styles.title}>Plan <strong>SILVER</strong></h3>
                    <p className={styles.description}>To start learn today</p>

                    <h4 className={styles.price}>$139</h4>

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
                    <h3 className={styles.title}>Plan <strong>GOLD</strong></h3>
                    <p className={styles.description}>To update your mind with us</p>

                    <h4 className={styles.price}>$179</h4>

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
                    <h3 className={styles.title}>Plan <strong>BUSINESS</strong></h3>
                    <p className={styles.description}>To your company</p>

                    <h4 className={styles.price}>$1000</h4>

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