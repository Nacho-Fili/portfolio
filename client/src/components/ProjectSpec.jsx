import React from 'react';
import Div from './Div'
import Block from '../utils/Block';
import H3 from './H3'
import P from './P'
import A from './A'
import projects from '../data/projects'

export default function ProjectSpec(props){

    const style = {
        textAlign: 'justify',
        padding: '0 20px 20px 40px'
    }

    const { alt } = props

    return( 
        <Div  className='main--photo-container__description' display={Block}>
            <H3> Descripción    </H3>
            <P styleToAdd={style}>  {projects.get(alt).description}  </P>
            
            <H3> Tecnologias    </H3>
            <P styleToAdd={style}>  {projects.get(alt).technologies}    </P>
            
            <H3> Repo           </H3>
            <div style={{display:'flex', flexDirection:'column'}}>
            {
                projects.get(alt).repo
                    .map(project => 
                        <A href={project} styleToAdd={style}> 
                            { project} 
                        </A>)
            }
            </div>

            {
            projects.get(alt).site && 
                <>
                    <H3>Sitio</H3>
                    <A href={projects.get(alt).site} styleToAdd={style}>{projects.get(alt).site}</A>
                </>
            }
        </Div>
    )
}