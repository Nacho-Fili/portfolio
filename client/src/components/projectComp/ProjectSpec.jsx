import styles from './projectSpec.module.css'
import colors from '../../colors/colors'

export default function ProjectSpec({ project }){

    const titleColor = { color: colors.light}

    const pStyle = {
        color: colors.light,
        width: '50%',
        textAlign: 'justify',
        display: 'flex',
        justifyContent: 'center'
    }

    return( 
        <div style={{backgroundColor: colors.strong}} className={styles.container}>
            <h3 style={titleColor} className={styles.title}> Descripción </h3>
            <p style={pStyle}> { project.description } </p>
            
            <h3 style={titleColor} className={styles.title}> Tecnologias </h3>
            <p style={pStyle}> { project.technologies } </p>
            
            {
                Boolean(project.site) &&
                <>
                    <h3 style={titleColor} className={styles.title}> Sitio </h3>
                    <p style={pStyle}> { project.site } </p>
                </>
            }

            <h3 style={titleColor} className={styles.title}> Repo </h3>
            <div>
                { project.repo.map(repo => <a href={repo} style={pStyle} className={styles.a} target='_blank' rel='noopener noreferrer'> {repo} </a>)}            
            </div>
        </div>
    )
}