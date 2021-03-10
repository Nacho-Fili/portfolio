import React, {useState} from 'react';

export default function ProjectSpec(props){
    const { projectImgSrc } = props;
    
    const [display, setDisplay] = useState('none');

    const style = (displayStyle) => ({
        display: displayStyle,
    })
    
    

    return(
        <div style={style(display)} >
            <img src={projectImgSrc} alt="Proyecto"/>
       </div>
    )
}