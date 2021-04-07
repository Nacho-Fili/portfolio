import React, {useContext} from 'react'
import NoneDisplay from '../utils/NoneDisplay'
import ProjectContext from '../context/ProjectContext'
import colors from '../colors/colors'


const style = (_width, _height, displayStyle, backgroundColor) => ({
    height: _height,
    width: _width,
    margin: '0',
    paddingBottom: '20px',
    backgroundColor,
    ...displayStyle
})

export default function Div(props){

    const {projectMap} = useContext(ProjectContext)

    const {children, width, height, display, id, name, className } = props
    let {backgroundColor} = props

    let displayStyle

    if (!display)
        displayStyle = NoneDisplay.createStyleObject()

    else
        displayStyle = display.createStyleObject(props)

    if(projectMap.get(name) && !backgroundColor)
        backgroundColor = colors.strong

    return (
        <div style={style(width, height, displayStyle, backgroundColor)} className={className} name={id}>
            {children}
        </div>
    )
}
