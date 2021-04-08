import { useContext } from 'react'
import useImg from '../hooks/UseImg'
import colors from '../colors/colors'
import ProjectSpec from './ProjectSpec'
import ProjectContext from '../context/ProjectContext'

const style = (newSize, newCursor, showProject) => ({
    objectFit: 'fill',
    objectPosition: 'center',
    height: newSize,
    width: newSize,
    cursor: newCursor,
    padding: '10px',
    alignSelf: 'center',
    minWidth: '300px',
    
})

export default function Img (props) {

    const { size, cursor, onHover, exitHover } = useImg('50%')

    const {isInProjectState, projectMap, setProjectState} = useContext(ProjectContext);

    const {src, alt} = props

    const key = Object.keys(isInProjectState).find(key => key === alt)

    return (
        <div className='main--photo-container' style={{height:'inherit', width:'98%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img
                onClick= { () => setProjectState({
                    ...isInProjectState,
                    [key]: !projectMap.get(alt)
                })}

                onMouseEnter = {onHover}
                onMouseLeave = {exitHover}

                src={src} 
                alt={alt}
                style= {style(size, cursor, projectMap.get(alt))}
            />
            {projectMap.get(alt) && <div className="main--photo-container__description" style={{width: '50vw', height:'100%', backgroundColor:colors.strong}}> <ProjectSpec alt={alt}/> </div>}
        </ div>
    )

        
}