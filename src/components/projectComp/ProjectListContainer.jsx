import ProjectList from "./ProjectList"
import projects from '../../data/projects'
import styles from './project.module.css'

export default function ProjectListContainer(){ 
    
    return(
        <div className={`${styles.projectListContainer} container`}>
            <ProjectList projects={projects}/>
        </div>
    )    
}