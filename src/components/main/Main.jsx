import colors from '../../colors/colors'
import styles from './main.module.css'
import ProjectListContainer from '../projectComp/ProjectListContainer'
import Form from '../form/Form'
import KnowledgeListContainer from '../knowledge/KnowledgeListContainer'

export default function Section() {

    const style = {
        backgroundColor: colors.midStrong
    }

    const styleH2 ={
        color: colors.light,
        borderBottom: `2px solid ${colors.strong}`
    }

    const styleP={ color: colors.light }
    
    return (
        <div className={styles.main} style={style}>
            <h2 style={styleH2}>Portafolio</h2>
            <ProjectListContainer />
            <div className={styles.knowledgeContainer} id="conocimientos">
                <h2 style={styleH2}>Conocimientos</h2>
                <KnowledgeListContainer />
            </div>
            <div id='sobremi'>
                <h2 style={styleH2}> Sobre mi </h2>
                <p className={styles.mainText} style={styleP}>Soy un estudiante de Ingeniería informática de 20 años al que le apasiona la tecnología, el desarrollo web y los videojuegos.
                            A los 18 años me adentré en el mundo de la programación mediante la plataforma de educación online platzi en la
                            que adquirí conocimientos básicos sobre programación en el lenguaje Javascript antes de entrar a la carrera de ingeniería informatica en la UBA.
                            Luego seguí estudiando en Platzi mientras asistía a la universidad, compaginando mis prácticas de programación en C en la facultad
                            con la instrucción algo más avanzada en Platzi. Actualmente tambien tomo clases en coderhouse, en el curso de ReactJS y proximamente de backend con nodeJS. 
/                            Mis proyectos personales se centran en resolver problemas puntuales de personas de mi entorno y ponerme nuevos desafíos con cosas que desconozco. Comencé con un proyecto en JS vanilla CSS y HTML para dominarlos. Luego aprendí a manejar el framework
                            React, el cual puse en práctica construyendo este portafolio y que posteriormente seguí utilizando en la aplicación motorcyclist-manager, el cual ademas incluye un 
                            login simple (solo username) y la conexion a una base de datos mediante una api programada por mi en nodejs.
         
                </p>
            </div> 
            
            <h2 style={styleH2}> Contacto </h2>
            <div id="contacto">
                <Form/>
            </div>
        </div>
    )
}