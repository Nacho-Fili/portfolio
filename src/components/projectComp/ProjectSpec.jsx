import styles from './projectSpec.module.css'
import colors from '../../colors/colors'

export default function ProjectSpec({ project }){

    const textColor = { color: colors.light}

    return( 
        <div style={{backgroundColor: colors.strong}} className={styles.container}>
            <h3 style={textColor} className={styles.title}> Descripción </h3>
            <p style={textColor} className={styles.text}> { project.description } </p>
            
            <h3 style={textColor} className={styles.title}> Tecnologias </h3>
            <p style={textColor} className={styles.text}> { project.technologies } </p>
            
            {
                Boolean(project.site) &&
                <>
                    <h3 style={ textColor } className={ styles.title }> Sitio </h3>
                    <a 
                        href = { project.site } 
                        className = { styles.a + ' ' + styles.text } 
                        target = '_blank' 
                        rel = 'noopener noreferrer'
                        style={textColor}> { project.site } </a>
                </>
            }

            <h3 style={textColor} className={styles.title}> Repo </h3>
            <div className={styles.reposContainer}>
                { project.repo.map(repo => <a href={repo} style={textColor} className={styles.a + ' ' + styles.text} target='_blank' rel='noopener noreferrer'> {repo} </a>)}            
            </div>
        </div>
    )
}