import Project from './Project'

export default function ProjectList({projects}){

    return(
        <>
            {projects.map(project => <Project project={project}/>)}
        </>
    )
}