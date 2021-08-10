import colors from '../../colors/colors'
import ScrollTo from '../ScrollTo'
import styles from './navBar.module.css'

export default function NavBar(){

    const headerStyle ={
        backgroundColor: colors.strong,
        color: colors.light 
    }

    return(
        <header style={headerStyle} className={styles.header}>
            <nav className={styles.nav}>
                <p><ScrollTo href="proyectos"> Proyectos </ScrollTo></p>
                <p><ScrollTo href="conocimientos"> Conocimientos </ScrollTo></p>
                <p><ScrollTo href="sobremi"> Sobre mi </ScrollTo></p>
                <p><ScrollTo href="contacto">Contacto </ScrollTo></p>
            </nav>
            <h1 className={styles.mainTitle}>Ignacio FILIPOVSKIS</h1>
            <p>Estudiante de Ingeniería Informática</p>
        </header>
    )
}