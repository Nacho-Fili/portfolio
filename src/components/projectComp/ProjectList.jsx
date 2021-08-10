import Project from './Project'

export default function ProjectList({projects}){

    return(
        <>
            {projects.map(project => <Project key={+new Date() + Object.values(project).toString()} project={project}/>)}
        </>
    )
}