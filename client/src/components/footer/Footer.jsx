import colors from '../../colors/colors'
import styles from './footer.module.css'


export default function Footer() {
    
    const style = { 
        footer: { backgroundColor: colors.strong},
        a: { color: colors.light }
    }

    return (
        <footer className={styles.footer} style={style.footer}>
            <a className={styles.link} style={style.a} href='https://github.com/Nacho-Fili'>Github</a>
            <a className={styles.link} style={style.a} href='https://www.linkedin.com/in/nacho-filipovskis-320a6418b/'>Linkedin</a>
            <a className={styles.link} style={style.a} href='https://www.instagram.com/nacho_fili/'>Instagram</a>
        </footer>
    )
    
}