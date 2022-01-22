import { useState } from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function(props){

    const [email, setEmail] = useState("");
    const [emailSended, setEmailSended] = useState(false);

    const submitForm = event => {
        event.preventDefault();
        console.log("Email:", email)
        setEmail("")
        setEmailSended(true)
    }

    return(
        <section className={styles.section}>
            <h6 className={styles.subTitle}>Newsletter</h6>
            <h2 className={styles.title}>Get free content</h2>
            <p className={styles.description}>
            Receive weekly tips on how to study better to learn more </p>

            <form onSubmit={event => submitForm(event)} className={styles.areaInput}>
                <input onChange={event => setEmail(event.target.value)} value={email} name="email" className={styles.input} placeholder="Your better email" type="email" />
                <button type='submit' className={styles.button}>
                    <span>Subscribe</span>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                </button>
            </form>
            <div className={`${styles.feedback} ${emailSended ? styles.active : ''}`}>Enviamos um email de confirmação para <strong>phhcpedrohhcunha@gmail.com</strong>!</div>
        </section>
    )
}